"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DateRangeModalProps {
  onClose: () => void
  onApply: (range: { start: Date; end: Date }) => void
}

export default function DateRangeModal({ onClose, onApply }: DateRangeModalProps) {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 9, 28))
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const renderCalendar = (monthDate: Date) => {
    const daysInMonth = getDaysInMonth(monthDate)
    const firstDay = getFirstDayOfMonth(monthDate)
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }

    return days
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  const renderMonthCalendar = (monthDate: Date) => {
    const days = renderCalendar(monthDate)
    const isCurrentMonth = monthDate.getMonth() === currentMonth.getMonth()

    return (
      <div key={monthDate.getMonth()}>
        <h3 className="text-center font-semibold mb-4">
          {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
        </h3>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground w-8">
              {day}
            </div>
          ))}
          {days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => day && setSelectedDate(new Date(monthDate.getFullYear(), monthDate.getMonth(), day))}
              className={`w-8 h-8 text-sm rounded flex items-center justify-center ${
                day === null
                  ? "text-muted-foreground"
                  : day === selectedDate.getDate() && isCurrentMonth
                    ? "bg-black text-white font-semibold"
                    : "hover:bg-gray-100"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full mx-4">
        <div className="grid grid-cols-2 gap-8 mb-6">
          {/* Left sidebar with presets */}
          <div className="space-y-2">
            {[
              "Today",
              "Last 7 days",
              "Last 4 weeks",
              "Last 3 months",
              "Week to date",
              "Month to date",
              "Year to date",
              "All time",
            ].map((preset) => (
              <button key={preset} className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm">
                {preset}
              </button>
            ))}
          </div>

          {/* Calendar */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {renderMonthCalendar(currentMonth)}
              {renderMonthCalendar(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
            </div>
          </div>
        </div>

        <div className="border-t pt-4 mb-4">
          <p className="text-sm text-muted-foreground">
            Range: <span className="font-semibold text-foreground">Date Range</span>
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onApply({ start: selectedDate, end: new Date() })
            }}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}
