"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface CustomizeViewPopoverProps {
  visibleColumns: Record<string, boolean>
  onApply: (columns: Record<string, boolean>) => void
}

export default function CustomizeViewPopover({ visibleColumns, onApply }: CustomizeViewPopoverProps) {
  const [columns, setColumns] = React.useState(visibleColumns)

  const columnOptions = [
    { id: "time", label: "Time" },
    { id: "cost", label: "Cost" },
    { id: "sessionId", label: "Session ID" },
    { id: "sessionStatus", label: "Session Status" },
    { id: "userSentiment", label: "User Sentiment" },
    { id: "from", label: "From" },
    { id: "to", label: "To" },
    { id: "importantLeads", label: "Important Leads" },
    { id: "callerWantsAppointment", label: "Caller wants to book an appointment" },
  ]

  return (
    <div className="p-4 space-y-4">
      <p className="text-sm font-medium">Select Columns to Display</p>
      <div className="space-y-3">
        {columnOptions.map((option) => (
          <div key={option.id} className="flex items-center gap-2">
            <Checkbox
              id={option.id}
              checked={columns[option.id] || false}
              onCheckedChange={(checked) => {
                setColumns({
                  ...columns,
                  [option.id]: checked,
                })
              }}
            />
            <label htmlFor={option.id} className="text-sm cursor-pointer">
              {option.label}
            </label>
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-end border-t pt-3">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button
          size="sm"
          onClick={() => {
            onApply(columns)
          }}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
