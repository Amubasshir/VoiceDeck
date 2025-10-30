"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CustomAttributesPopover() {
  return (
    <div className="p-4 space-y-4">
      <p className="text-sm font-medium">Custom Attributes</p>
      <Input placeholder="Search attributes..." className="text-sm" />
      <div className="space-y-2 max-h-64 overflow-y-auto">
        <div className="text-sm text-muted-foreground py-4 text-center">No custom attributes available</div>
      </div>
      <div className="flex gap-2 justify-end border-t pt-3">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button size="sm">Apply</Button>
      </div>
    </div>
  )
}
