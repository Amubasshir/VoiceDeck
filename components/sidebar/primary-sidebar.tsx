"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PrimarySidebarProps {
  isOpen: boolean
  onToggle: () => void
  activeSection: string
  onSectionChange: (section: string) => void
}

const menuSections = [
  {
    title: "BUILD",
    items: [
      { id: "agents", label: "Agents", icon: "🤖" },
      { id: "knowledge-base", label: "Knowledge Base", icon: "📚" },
    ],
  },
  {
    title: "DEPLOY",
    items: [
      { id: "phone-numbers", label: "Phone Numbers", icon: "📞" },
      { id: "batch-call", label: "Batch Call", icon: "📱" },
    ],
  },
  {
    title: "MONITOR",
    items: [
      { id: "call-history", label: "Call History", icon: "📋" },
      { id: "chat-history", label: "Chat History", icon: "💬" },
      { id: "analytics", label: "Analytics", icon: "📊" },
    ],
  },
  {
    title: "SYSTEM",
    items: [{ id: "settings", label: "Settings", icon: "⚙️" }],
  },
]

export default function PrimarySidebar({ isOpen, onToggle, activeSection, onSectionChange }: PrimarySidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["BUILD", "DEPLOY", "MONITOR", "SYSTEM"])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 bg-white border-r border-border transition-transform duration-300 lg:relative lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="font-bold text-sm">Retell AI</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onToggle} className="lg:hidden">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Workspace Selector */}
          <div className="p-4 border-b border-border">
            <Button variant="outline" className="w-full justify-between text-sm bg-transparent">
              <span className="truncate">Australia... Workspace</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation Sections */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuSections.map((section) => (
              <div key={section.title}>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {section.title}
                  <ChevronDown
                    className={cn(
                      "w-3 h-3 transition-transform",
                      expandedSections.includes(section.title) ? "rotate-180" : "",
                    )}
                  />
                </button>

                {expandedSections.includes(section.title) && (
                  <div className="space-y-1 mt-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => onSectionChange(item.id)}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                          activeSection === item.id
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-foreground hover:bg-muted",
                        )}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border space-y-2">
            <Button variant="outline" className="w-full justify-start text-sm bg-transparent">
              <span className="text-blue-600">●</span>
              Pay As You Go
            </Button>
            <Button variant="ghost" className="w-full justify-start text-xs text-muted-foreground">
              👤 wedigitalmonk@g...
            </Button>
            <div className="flex gap-2 text-xs text-muted-foreground pt-2">
              <button className="hover:text-foreground">Help</button>
              <span>•</span>
              <button className="hover:text-foreground">Updates</button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile toggle button */}
      {!isOpen && (
        <Button variant="ghost" size="sm" onClick={onToggle} className="fixed bottom-4 left-4 z-40 lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      )}
    </>
  )
}
