import { zodResolver } from "@hookform/resolvers/zod"
import { UseFormReturn, useForm } from "react-hook-form"
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

const formSchema = z.object({
  search: z.string(),
  order: z.enum(["asc", "desc"]), 
  tagsPerPage: z
    .coerce  
    .number()
    .int()
    .min(1, {
      message: "Tags per page must be at least 1",
    })
    .max(25, {
      message: "Tags per page must not be greater than 25",
    }),
})

const Form = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      order: 'asc',
      tagsPerPage: 25
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  useEffect(() => {
    const subscription = form.watch(() => form.handleSubmit(onSubmit)())
    return () => subscription.unsubscribe();
}, [form.handleSubmit, form.watch]);
 
  return (
    <FormUI {...form}>
      <form className="grid grid-cols-6 md:grid-cols-10 grid-rows-3 md:grid-rows-2 gap-2 lg:gap-x-10">
        <div className="col-start-1 md:col-start-3 col-end-7 md:col-end-9 row-start-1 row-end-1">
          <SearchInput form={form} /> 
        </div>
        <div className="col-start-1 col-end-4 md:col-end-3 row-start-2 md:row-start-1 row-end-2 md:row-end-1">
          <TagsPerPageInput form={form} />
        </div>
        <div className="col-start-4 md:col-start-9 col-end-7 md:col-end-11 row-start-2 md:row-start-1 row-end-3 md:row-end-1">
          <OrderSelect form={form} />
        </div>
        <Button type="button" variant="ghost" className="col-start-3 md:col-start-4 col-end-5 md:col-end-7 row-start-3 md:row-start2 row-end-3 md:row-end-2">
          Advanced filters
        </Button>
      </form>
    </FormUI>
  )
}

interface FormProps {
  form: UseFormReturn<z.infer<typeof formSchema>>
}

const SearchInput = ({ form }: FormProps) => {
  return (
    <FormField
      control={form.control}
      name="search"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="sr-only">Search Tags</FormLabel>
          <FormControl>
            <Input placeholder="Search tags..." onChange={_.debounce(field.onChange, 500)} />
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

const OrderSelect = ({ form }: FormProps) => {
  return (
    <FormField
      control={form.control}
      name="order"
      render={({ field }) => (
        <FormItem>
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

const TagsPerPageInput = ({ form }: FormProps) => {
  return (
    <FormField
      control={form.control}
      name="tagsPerPage"
      render={({ field }) => (
        <FormItem>
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
export default Form