"use client"

import { useState } from "react"
import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Limit {
  id: string
  label: string
  value: number
  editable: boolean
}

export default function Settings() {
  const [limits, setLimits] = useState<Limit[]>([
    { id: "concurrent-calls", label: "Concurrent Calls Limit", value: 20, editable: true },
    { id: "llm-token", label: "LLM Token Limit", value: 32768, editable: false },
    { id: "telnyx-cps", label: "Telnyx CPS", value: 1, editable: true },
    { id: "twilio-cps", label: "Twilio CPS", value: 1, editable: true },
    { id: "custom-telephony-cps", label: "Custom Telephony CPS", value: 1, editable: true },
  ])

  const [editingLimit, setEditingLimit] = useState<Limit | null>(null)
  const [editValue, setEditValue] = useState("")

  const handleAdjustLimit = (limit: Limit) => {
    setEditingLimit(limit)
    setEditValue(limit.value.toString())
  }

  const handleSaveLimit = () => {
    if (editingLimit) {
      setLimits(
        limits.map((limit) =>
          limit.id === editingLimit.id ? { ...limit, value: Number.parseInt(editValue) || limit.value } : limit,
        ),
      )
      setEditingLimit(null)
      setEditValue("")
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Limits</h1>

      <div className="space-y-4 max-w-4xl">
        {limits.map((limit) => (
          <div
            key={limit.id}
            className="bg-white border border-border rounded-lg p-6 flex items-center justify-between"
          >
            <div>
              <div className="text-sm text-muted-foreground mb-1">{limit.label}</div>
              <div className="text-2xl font-semibold">{limit.value.toLocaleString()}</div>
            </div>
            {limit.editable && (
              <Button variant="ghost" size="sm" onClick={() => handleAdjustLimit(limit)} className="gap-2">
                <Pencil className="w-4 h-4" />
                Adjust Limit
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Edit Limit Dialog */}
      <Dialog open={!!editingLimit} onOpenChange={() => setEditingLimit(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adjust {editingLimit?.label}</DialogTitle>
            <DialogDescription>Enter a new value for this limit.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="limit-value">Limit Value</Label>
            <Input
              id="limit-value"
              type="number"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="mt-2"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditingLimit(null)}>
              Cancel
            </Button>
            <Button onClick={handleSaveLimit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
