import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/utils/cn"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FormControl } from "../ui/form"
import { ControllerRenderProps } from "react-hook-form"
import { DateRange } from "react-day-picker"
import { z } from 'zod'
import { formSchema } from "../form"
 
interface DatePickerProps {
    field: ControllerRenderProps<z.infer<typeof formSchema>, "date">
}

const DatePicker = ({ field: { onChange, value} }: DatePickerProps) => {
    const handleSelect = (date: DateRange | undefined) => {
        onChange({
            fromdate: date?.from,
            todate: date?.to,
        })
    }

    return (
        <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "w-full pl-3 text-left font-normal truncate",
                !value?.fromdate && !value?.todate && "text-muted-foreground"
              )}
            >
              {value?.fromdate && value?.todate ? (
                <>
                  {format(value?.fromdate, "P")} -{" "}
                  {format(value?.todate, "P")}
                </>
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            mode="range"
            selected={{
                from: value?.fromdate,
                to: value?.todate,
            }}
            onSelect={handleSelect}
          />
        </PopoverContent>
      </Popover>
    )
}

export default DatePicker