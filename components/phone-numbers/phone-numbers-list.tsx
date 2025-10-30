"use client"

import { Phone, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PhoneNumbersListProps {
  selectedPhone?: string
  onSelectPhone?: (id: string) => void
}

const phoneNumbers = [{ id: "phone-1", number: "+61 468 030 030" }]

export default function PhoneNumbersList({ selectedPhone, onSelectPhone }: PhoneNumbersListProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Phone Numbers</span>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Plus className="w-4 h-4" />
        </Button>
      </div>
      {phoneNumbers.map((phone) => (
        <button
          key={phone.id}
          onClick={() => onSelectPhone?.(phone.id)}
          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
            selectedPhone === phone.id ? "bg-blue-50 text-blue-700 font-medium" : "text-foreground hover:bg-gray-50"
          }`}
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{phone.number}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
