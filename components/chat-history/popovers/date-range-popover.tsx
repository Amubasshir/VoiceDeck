"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"

interface DateRangePopoverProps {
  onApply: (range: { start: Date; end: Date }) => void
}

export default function DateRangePopover({ onApply }: DateRangePopoverProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date(2025, 9, 28))
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())

  const presets = [
    { label: "Today", getValue: () => ({ start: new Date(), end: new Date() }) },
    {
      label: "Last 7 days",
      getValue: () => {
        const end = new Date()
        const start = new Date(end)
        start.setDate(start.getDate() - 7)
        return { start, end }
      },
    },
    {
      label: "Last 4 weeks",
      getValue: () => {
        const end = new Date()
        const start = new Date(end)
        start.setDate(start.getDate() - 28)
        return { start, end }
      },
    },
    {
      label: "Last 3 months",
      getValue: () => {
        const end = new Date()
        const start = new Date(end)
        start.setMonth(start.getMonth() - 3)
        return { start, end }
      },
    },
    {
      label: "Week to date",
      getValue: () => {
        const end = new Date()
        const start = new Date(end)
        start.setDate(start.getDate() - start.getDay())
        return { start, end }
      },
    },
    {
      label: "Month to date",
      getValue: () => {
        const end = new Date()
        const start = new Date(end.getFullYear(), end.getMonth(), 1)
        return { start, end }
      },
    },
    {
      label: "Year to date",
      getValue: () => {
        const end = new Date()
        const start = new Date(end.getFullYear(), 0, 1)
        return { start, end }
      },
    },
    {
      label: "All time",
      getValue: () => {
        const end = new Date()
        const start = new Date(2020, 0, 1)
        return { start, end }
      },
    },
  ]

  return (
    <div className="p-4 space-y-4">
      {/* Presets */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">Quick Select</p>
        <div className="grid grid-cols-2 gap-2">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="outline"
              size="sm"
              className="justify-start text-xs bg-transparent"
              onClick={() => {
                const range = preset.getValue()
                setStartDate(range.start)
                setEndDate(range.end)
                onApply(range)
              }}
            >
              {preset.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Calendar Selection */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Select Date Range</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">From</p>
            <CalendarComponent
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              disabled={(date) => (endDate ? date > endDate : false)}
              className="rounded-md border"
            />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">To</p>
            <CalendarComponent
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              disabled={(date) => (startDate ? date < startDate : false)}
              className="rounded-md border"
            />
          </div>
        </div>
      </div>

      {/* Selected Range Display */}
      {startDate && endDate && (
        <div className="border-t pt-3">
          <p className="text-xs text-muted-foreground">
            Range:{" "}
            <span className="font-semibold text-foreground">
              {format(startDate, "MMM dd, yyyy")} - {format(endDate, "MMM dd, yyyy")}
            </span>
          </p>
        </div>
      )}

      {/* Apply Button */}
      <Button
        className="w-full"
        onClick={() => {
          if (startDate && endDate) {
            onApply({ start: startDate, end: endDate })
          }
        }}
      >
        Apply
      </Button>
    </div>
  )
}
