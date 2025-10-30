"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"

interface FilterPopoverProps {
  onApply: (filters: Record<string, any>) => void
}

export default function FilterPopover({ onApply }: FilterPopoverProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [filterValue, setFilterValue] = useState("")

  const filterOptions = [
    { id: "agent", label: "Agent" },
    { id: "chatId", label: "Chat ID" },
    { id: "userSentiment", label: "User Sentiment" },
    { id: "disconnectionReason", label: "Disconnection Reason" },
    { id: "chatSuccessful", label: "Chat Successful" },
    { id: "chatStatus", label: "Chat Status" },
  ]

  const customPostChatAnalysis = [
    { id: "callerWantsAppointment", label: "Caller wants to book an appointment" },
    { id: "importantLeads", label: "Important Leads" },
  ]

  if (selectedFilter) {
    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2">
          <button onClick={() => setSelectedFilter(null)}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <p className="text-sm font-medium">Filter by {selectedFilter}</p>
        </div>
        <Input
          placeholder={`Enter ${selectedFilter}`}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          className="text-sm"
        />
        <div className="flex gap-2 justify-end">
          <Button variant="outline" size="sm" onClick={() => setSelectedFilter(null)}>
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={() => {
              onApply({ [selectedFilter]: filterValue })
              setSelectedFilter(null)
              setFilterValue("")
            }}
          >
            Save
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-4">
      <p className="text-sm font-medium">Add Filters</p>
      <div className="space-y-2">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedFilter(option.id)}
            className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent text-sm text-left"
          >
            <span className="text-muted-foreground">+</span>
            {option.label}
          </button>
        ))}
      </div>

      <div className="border-t pt-3">
        <p className="text-xs font-semibold text-muted-foreground mb-2">CUSTOM POST CHAT ANALYSIS</p>
        <div className="space-y-2">
          {customPostChatAnalysis.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedFilter(option.id)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-accent text-sm text-left"
            >
              <span className="text-muted-foreground">+</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
