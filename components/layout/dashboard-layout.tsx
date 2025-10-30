"use client"

import { useState } from "react"
import PrimarySidebar from "@/components/sidebar/primary-sidebar"
import SecondarySidebar from "@/components/sidebar/secondary-sidebar"
import Topbar from "@/components/topbar/topbar"
import AgentsTable from "@/components/agents/agents-table"
import KnowledgeBaseDetail from "@/components/knowledge-base/knowledge-base-detail"
import PhoneNumberDetail from "@/components/phone-numbers/phone-number-detail"
import ChatHistory from "@/components/chat-history/chat-history"
import Analytics from "@/components/analytics/analytics"
import Settings from "@/components/settings/settings"

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeSection, setActiveSection] = useState("agents")
  const [selectedKB, setSelectedKB] = useState("booking-page-api")
  const [selectedPhone, setSelectedPhone] = useState("phone-1")

  return (
    <div className="flex h-screen bg-background">
      {/* Primary Sidebar */}
      <PrimarySidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Secondary Sidebar */}
      <SecondarySidebar
        activeSection={activeSection}
        selectedKB={selectedKB}
        onSelectKB={setSelectedKB}
        selectedPhone={selectedPhone}
        onSelectPhone={setSelectedPhone}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto bg-background">
          {activeSection === "agents" && <AgentsTable />}
          {activeSection === "knowledge-base" && <KnowledgeBaseDetail selectedKB={selectedKB} />}
          {activeSection === "phone-numbers" && <PhoneNumberDetail selectedPhone={selectedPhone} />}
          {activeSection === "batch-call" && (
            <div className="p-8">
              <h1 className="text-2xl font-bold">Batch Call</h1>
            </div>
          )}
          {activeSection === "call-history" && (
            <div className="p-8">
              <h1 className="text-2xl font-bold">Call History</h1>
            </div>
          )}
          {activeSection === "chat-history" && <ChatHistory />}
          {activeSection === "analytics" && <Analytics />}
          {activeSection === "settings" && <Settings />}
        </main>
      </div>
    </div>
  )
}
