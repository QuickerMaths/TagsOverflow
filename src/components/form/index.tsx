import { zodResolver } from "@hookform/resolvers/zod"
import { UseFormReturn, useForm, useWatch } from "react-hook-form"
import { z } from "zod"
import {
  Form as FormUI,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Button } from "../ui/button"
import { useEffect } from "react"
import _ from "lodash"
import { useTagsProvider } from "@/context/tags-context"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import DatePicker from "../date-picker"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import useDebounce from "@/hooks/useDebounce"
import Typography from "../typography"
import { cn } from "@/utils/cn"

export const formSchema = z.object({
  inname: z.string(),
  order: z.enum(["asc", "desc"]), 
  pagesize: z
    .coerce  
    .number()
    .int()
    .min(1, {
      message: "Tags per page must be at least 1",
    })
    .max(100, {
      message: "Tags per page must not be greater than 100",
    }),
  date: z.object({
    fromdate: z.date().optional(),
    todate: z.date().optional(),
  }),
  sort: z.enum(['popular', 'activity', 'name']),
  minMax: z
    .object({
      min: z.coerce.number(),
      max: z.coerce.number(),
    })
    .refine(data => {
      if (data?.min && data?.max) {
        return data.min <= data.max
      }
      return true
    }, {
      message: "Minimum must be less than or equal to maximum",
    }),
})

export type FormType = z.infer<typeof formSchema>

const defaultFormValues = {
  inname: "",
  order: 'desc' as const,
  pagesize: 50,
  sort: 'popular' as const,
  date: {
    fromdate: undefined,
    todate: undefined,
  },
  minMax: {
    min: 0,
    max: 0,
  }
}

const Form = () => {
  const { tagsContextApi } = useTagsProvider()
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  })

  function onSubmit(values: FormType) {
    tagsContextApi.setFromState(values)
  }

  const debouncedSubmit = useDebounce(() => form.handleSubmit(onSubmit)(), 500)

  useEffect(() => {
    const subscription = form.watch(debouncedSubmit)
    return () => subscription.unsubscribe();
  }, [debouncedSubmit, form.watch]);

  return (
    <FormUI {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-6 md:grid-cols-10 grid-rows-3 md:grid-rows-2 gap-2 lg:gap-x-10">
        <SearchInput form={form} className="col-start-1 md:col-start-3 col-end-7 md:col-end-9 row-start-1 row-end-1"/> 
        <TagsPerPageInput form={form} className="col-start-1 col-end-4 md:col-end-3 row-start-2 md:row-start-1 row-end-2 md:row-end-1"/>
        <OrderSelect form={form} className="col-start-4 md:col-start-9 col-end-7 md:col-end-11 row-start-2 md:row-start-1 row-end-3 md:row-end-1"/>
        <AdvancedFiltersDrawer form={form} className="col-start-3 md:col-start-5 col-end-5 md:col-end-7 row-start-3 md:row-start2 row-end-3 md:row-end-2" />
      </form>
    </FormUI>
  )
}

interface FormProps {
  form: UseFormReturn<FormType>
  className?: string
}

const SearchInput = ({ form, className }: FormProps) => {
  return (
    <FormField
      control={form.control}
      name="inname"
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="sr-only">Search Tags</FormLabel>
          <FormControl>
            <Input placeholder="Search tags..." {...field} />
          </FormControl>
          <FormDescription className="sr-only">
            This is a input filed for searching tags.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const OrderSelect = ({ form, className }: FormProps) => {
  return (
    <FormField
      control={form.control}
      name="order"
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="sr-only">Order</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Order by..." />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
          <FormDescription className="sr-only">
            Select element used to order the tags.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const TagsPerPageInput = ({ form, className }: FormProps) => {
  return (
    <FormField
      control={form.control}
      name="pagesize"
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="sr-only">Tags per page</FormLabel>
          <FormControl>
            <Input placeholder="Tags per page..." onChange={_.debounce(field.onChange, 500)} />
          </FormControl>
          <FormDescription className="sr-only">
            This is a input filed for amount of tags displayed per page.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const AdvancedFiltersDrawer = ({ className, form }: FormProps) => {
  const handleReset = () => {
    form.resetField('date')
    form.resetField('sort')
    form.resetField('minMax')
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className={className} variant="ghost">Advanced filters</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-[1024px]">
          <DrawerHeader>
            <DrawerTitle asChild>
              <Typography tag="h2" variant="h3">Advanced filters</Typography>
            </DrawerTitle>
            <DrawerDescription asChild>
              <Typography tag="p" variant="span">Filter tags by date, popularity, and more.</Typography>
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 grid grid-cols-6 lg:grid-cols-11 grid-row-9 min-[540px]:grid-row-6 lg:grid-row-1 gap-3 ">
            <RangeDatePicker form={form} className="col-start-1 col-end-7 min-[540px]:col-end-4 ls:col-end-4 rows-start-1 rows-end-3 lg:rows-end-1"/>
            <SortRadioGroup form={form} className="col-start-1 min-[540px]:col-start-4 ls:col-start-4 col-end-7 lg:col-end-7 rows-start-4 min-[540px]:rows-start-1 lg:rows-start-1 rows-end-6 min-[540px]:rows-end-3 lg:rows-end-1"/>
            <MinMax form={form} className="col-start-1 lg:col-start-7 col-end-7 lg:col-end-12 rows-start-6 min-[540px]:rows-start-4 lg:rows-start-1 rows-end-9 min-[540px]:rows-end-7 lg:rows-start-1"/>
          </div>
          <DrawerFooter>
            <Button type="reset" onClick={handleReset} variant="default">Clear filters</Button>
          </DrawerFooter>
          </div>
      </DrawerContent>
    </Drawer>
  )
}

const RangeDatePicker = ({ form, className }: FormProps) => {
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', className)}>
          <FormLabel>Search Range</FormLabel>
          <DatePicker field={field} />
          <FormDescription className="sr-only">
            Select the date to see tags created within that time period.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

const SortRadioGroup = ({ form, className }: FormProps) => {
  return (
    <FormField
      control={form.control}
      name="sort"
      render={({ field }) => (
        <FormItem className={cn("grid grid-cols-3 grid-rows-4 space-y-0", className)}>
          <FormLabel className="col-start-1 col-end-1 row-start-1 row-end-1">Sort by...</FormLabel> 
          <RadioGroup
            onValueChange={field.onChange}
            defaultValue={field.value}
            value={field.value}
            className="col-start-1 col-end-4 row-start-3 row-end-3 flex"
          >
            <RadioGroupFormItem value="popular" />
            <RadioGroupFormItem value="activity" />
            <RadioGroupFormItem value="name" />
          </RadioGroup>
          <FormDescription className="sr-only">
            Select the sorting order for the tags.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

interface RadioGroupFormItemProps {
  value: "popular" | "activity" | "name"
}

const RadioGroupFormItem = ({ value }: RadioGroupFormItemProps) => {
  return (
    <FormItem className="flex-center gap-x-2 space-y-0">
      <FormControl>
        <RadioGroupItem value={value} />
      </FormControl>
      <FormLabel className="font-normal capitalize">
        {value}
      </FormLabel>
    </FormItem>
  )
}

const MinMax = ({ form, className }: FormProps) => {
  const sort = useWatch({ control: form.control, name: 'sort' })

  useEffect(() => {
    if (sort !== 'popular') {
      form.resetField('minMax')
    }
  }, [sort])

  return (
    <div className={cn('grid grid-cols-6 grid-rows-7 gap-x-2', className)}>
      <FormField
        control={form.control}
        name="minMax.min"
        render={({ field }) => (
          <FormItem className="flex flex-col col-start-1 col-end-4 row-start-1 row-end-7">
            <FormLabel>Minimum of related posts</FormLabel>
            <FormControl>
              <Input disabled={form.getValues().sort !== 'popular'} placeholder="Minimum..." type="number" {...field} />
            </FormControl>
            <FormDescription className="sr-only">
              This is a input filed for a minimum amount of related posts.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="minMax.max"
        render={({ field }) => (
          <FormItem className="flex flex-col col-start-4 col-end-7 row-start-1 row-end-7">
            <FormLabel>Maximum of related posts</FormLabel>
            <FormControl>
              <Input disabled={form.getValues().sort !== 'popular'} placeholder="Maximum..." type="number" {...field} />
            </FormControl>
            <FormDescription className="sr-only">
              This is a input filed for a maximum amount of related posts.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.getFieldState('minMax').error?.root?.message && (
        <Typography tag="p" variant="span" className="text-red-500 text-sm col-start-1 col-end-6 row-start-8 row-end-8">
          {form.getFieldState('minMax').error?.root?.message}
        </Typography>
      )}
    </div>     
  )
}

export default Form