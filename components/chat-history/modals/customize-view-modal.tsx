"use client"

import React from "react"

import { Button } from "@/components/ui/button"

interface CustomizeViewModalProps {
  visibleColumns: Record<string, boolean>
  onClose: () => void
  onApply: (columns: Record<string, boolean>) => void
}

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

export default function CustomizeViewModal({ visibleColumns, onClose, onApply }: CustomizeViewModalProps) {
  const [columns, setColumns] = React.useState(visibleColumns)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
        <h2 className="font-semibold mb-4">Customize View</h2>
        <div className="space-y-3 max-h-96 overflow-y-auto mb-6">
          {columnOptions.map((column) => (
            <label key={column.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={columns[column.id] || false}
                onChange={(e) =>
                  setColumns({
                    ...columns,
                    [column.id]: e.target.checked,
                  })
                }
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-sm">{column.label}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onApply(columns)}>Save</Button>
        </div>
      </div>
    </div>
  )
}
