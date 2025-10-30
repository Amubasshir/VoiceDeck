"use client"

import { Button } from "@/components/ui/button"

interface CustomAttributesModalProps {
  onClose: () => void
  onApply: () => void
}

export default function CustomAttributesModal({ onClose, onApply }: CustomAttributesModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
        <h2 className="font-semibold mb-4">Custom Attributes</h2>
        <p className="text-sm text-muted-foreground mb-6">
          No custom attributes available. Create custom attributes to filter and view your data.
        </p>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onApply}>Done</Button>
        </div>
      </div>
    </div>
  )
}
