"use client"

import { useState } from "react"
import { Plus, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FilterModalProps {
  onClose: () => void
  onApply: (filters: Record<string, any>) => void
}

const filterOptions = [
  { id: "agent", label: "Agent" },
  { id: "chat-id", label: "Chat ID" },
  { id: "user-sentiment", label: "User Sentiment" },
  { id: "disconnection-reason", label: "Disconnection Reason" },
  { id: "chat-successful", label: "Chat Successful" },
  { id: "chat-status", label: "Chat Status" },
  { id: "caller-wants-appointment", label: "Caller wants to book an appointment" },
  { id: "important-leads", label: "Important Leads" },
]

export default function FilterModal({ onClose, onApply }: FilterModalProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)
  const [filterValue, setFilterValue] = useState("")

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
        {selectedFilter ? (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <button onClick={() => setSelectedFilter(null)}>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <h2 className="font-semibold">Filter by {filterOptions.find((f) => f.id === selectedFilter)?.label}</h2>
            </div>

            {selectedFilter === "chat-id" && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter Chat ID"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md text-sm"
                />
              </div>
            )}

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedFilter(null)}>
                Cancel
              </Button>
              <Button onClick={() => onApply({ [selectedFilter]: filterValue })}>Save</Button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-semibold mb-4">Add Filters</h2>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 text-sm text-left"
                >
                  <Plus className="w-4 h-4 text-muted-foreground" />
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
