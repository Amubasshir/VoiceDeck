"use client"

import { Plus, ChevronLeft, ChevronRight, BookOpen, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import PhoneNumbersList from "@/components/phone-numbers/phone-numbers-list"

interface SecondarySidebarProps {
  activeSection: string
  selectedKB?: string
  onSelectKB?: (id: string) => void
  selectedPhone?: string
  onSelectPhone?: (id: string) => void
}

const knowledgeBases = [
  { id: "booking-page-api", name: "Booking page API" },
  { id: "booking-page", name: "Booking page" },
]

export default function SecondarySidebar({
  activeSection,
  selectedKB,
  onSelectKB,
  selectedPhone,
  onSelectPhone,
}: SecondarySidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  if (activeSection !== "agents" && activeSection !== "knowledge-base" && activeSection !== "phone-numbers") {
    return null
  }

  const isAgentsSection = activeSection === "agents"
  const isKBSection = activeSection === "knowledge-base"
  const isPhoneSection = activeSection === "phone-numbers"

  return (
    <aside
      className={`hidden md:flex bg-white border-r border-border flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-56"
      }`}
    >
      {/* Header with collapse button */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded border border-border flex items-center justify-center">
              {isAgentsSection ? "📁" : isKBSection ? <BookOpen className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
            </div>
            <span className="font-semibold text-sm">
              {isAgentsSection ? "All Agents" : isKBSection ? "Knowledge Base" : "Phone Numbers"}
            </span>
          </div>
        )}
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Content based on section */}
      {!isCollapsed && (
        <div className="flex-1 p-4 overflow-y-auto">
          {isAgentsSection && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Folders</span>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {isKBSection && (
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Knowledge Bases
                </span>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {knowledgeBases.map((kb) => (
                <button
                  key={kb.id}
                  onClick={() => onSelectKB?.(kb.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selectedKB === kb.id ? "bg-blue-50 text-blue-700 font-medium" : "text-foreground hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{kb.name}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {isPhoneSection && <PhoneNumbersList selectedPhone={selectedPhone} onSelectPhone={onSelectPhone} />}
        </div>
      )}
    </aside>
  )
}
