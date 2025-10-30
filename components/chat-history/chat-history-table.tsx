"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatHistoryTableProps {
  visibleColumns: Record<string, boolean>
}

const mockData = [
  {
    id: 1,
    time: "2025-10-10 20:24:21",
    cost: "$0.015",
    sessionId: "chat_2228a097b618e099c7b0e7c0668",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 2,
    time: "2025-10-10 19:50:36",
    cost: "$0.060",
    sessionId: "chat_a6eed516daf6ced14d0f11b2a46",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 3,
    time: "2025-10-10 19:44:51",
    cost: "$0.015",
    sessionId: "chat_761bcf4d9cc04d8dbdfd7b55eec",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 4,
    time: "2025-10-10 19:39:53",
    cost: "$0.015",
    sessionId: "chat_e2373bf61f718bad1b1eef1589",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 5,
    time: "2025-10-10 17:42:43",
    cost: "$0.030",
    sessionId: "chat_63121584 1e47d0c025f28760e4e",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 6,
    time: "2025-10-10 17:11:04",
    cost: "$0.060",
    sessionId: "chat_4a62600d40caffaa0bbfa05f661",
    sessionStatus: "ended",
    userSentiment: "Positive",
    from: "+61423368671",
    to: "+61468030030",
    importantLeads: "true",
    callerWantsAppointment: "true",
  },
  {
    id: 7,
    time: "2025-10-10 13:55:09",
    cost: "$0.015",
    sessionId: "chat_46cdca8e52f7d475fa52f346de6",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 8,
    time: "2025-10-10 13:54:26",
    cost: "$0.015",
    sessionId: "chat_3a24e2a39242184bcc30bcdb6d3",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 9,
    time: "2025-10-10 13:54:16",
    cost: "$0.090",
    sessionId: "chat_ee8c03ad60019bf7a957c46ea36",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "+61422743931",
    to: "+61468030030",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 10,
    time: "2025-10-08 18:18:24",
    cost: "$0.015",
    sessionId: "chat_c87fb457c122c56a2e797d97666",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 11,
    time: "2025-10-08 18:16:55",
    cost: "$0.015",
    sessionId: "chat_03d6699fcc86da146395781cbfb",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 12,
    time: "2025-10-08 18:15:26",
    cost: "$0.015",
    sessionId: "chat_25690f9edd18e6bc94465cd68db",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
  {
    id: 13,
    time: "2025-10-08 18:06:54",
    cost: "$0.015",
    sessionId: "chat_0711544e1763aab994d4b2cd18f",
    sessionStatus: "ended",
    userSentiment: "Neutral",
    from: "",
    to: "",
    importantLeads: "false",
    callerWantsAppointment: "false",
  },
]

export default function ChatHistoryTable({ visibleColumns }: ChatHistoryTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 50
  const totalPages = Math.ceil(mockData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = mockData.slice(startIndex, startIndex + itemsPerPage)

  const columnLabels: Record<string, string> = {
    time: "Time",
    cost: "Cost",
    sessionId: "Session ID",
    sessionStatus: "Session Status",
    userSentiment: "User Sentiment",
    from: "From",
    to: "To",
    importantLeads: "Important Leads",
    callerWantsAppointment: "Caller wants to book an appointment",
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 border-b border-border sticky top-0">
            <tr>
              {Object.entries(visibleColumns).map(([key, visible]) =>
                visible ? (
                  <th
                    key={key}
                    className="px-6 py-3 text-left text-xs font-semibold text-foreground whitespace-nowrap border-r border-border last:border-r-0"
                  >
                    {columnLabels[key]}
                  </th>
                ) : null,
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr
                key={row.id}
                className={`border-b border-border hover:bg-gray-50 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                {visibleColumns.time && (
                  <td className="px-6 py-4 text-sm text-blue-600 border-r border-border">{row.time}</td>
                )}
                {visibleColumns.cost && (
                  <td className="px-6 py-4 text-sm text-foreground border-r border-border">{row.cost}</td>
                )}
                {visibleColumns.sessionId && (
                  <td className="px-6 py-4 text-sm text-foreground border-r border-border font-mono text-xs">
                    <div className="flex items-center gap-2">
                      {row.sessionId}
                      <button className="text-muted-foreground hover:text-foreground">
                        <Info className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                )}
                {visibleColumns.sessionStatus && (
                  <td className="px-6 py-4 text-sm text-foreground border-r border-border">{row.sessionStatus}</td>
                )}
                {visibleColumns.userSentiment && (
                  <td className="px-6 py-4 text-sm text-foreground border-r border-border">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      {row.userSentiment}
                    </span>
                  </td>
                )}
                {visibleColumns.from && (
                  <td className="px-6 py-4 text-sm text-foreground border-r border-border">{row.from || "-"}</td>
                )}
                {visibleColumns.to && (
                  <td className="px-6 py-4 text-sm text-foreground border-r border-border">{row.to || "-"}</td>
                )}
                {visibleColumns.importantLeads && (
                  <td className="px-6 py-4 text-sm text-foreground border-r border-border">{row.importantLeads}</td>
                )}
                {visibleColumns.callerWantsAppointment && (
                  <td className="px-6 py-4 text-sm text-foreground">{row.callerWantsAppointment}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="border-t border-border bg-white px-6 py-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages} • Total Session: {mockData.length}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1
            return (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(pageNum)}
              >
                {pageNum}
              </Button>
            )
          })}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
          <select className="ml-4 px-3 py-1 border border-border rounded text-sm">
            <option>50 / page</option>
            <option>100 / page</option>
          </select>
        </div>
      </div>
    </div>
  )
}
