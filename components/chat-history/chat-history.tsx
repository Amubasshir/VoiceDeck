"use client"

import { useState } from "react"
import { Calendar, Filter, Settings2, Columns3, Download, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import ChatHistoryTable from "./chat-history-table"
import DateRangePopover from "./popovers/date-range-popover"
import FilterPopover from "./popovers/filter-popover"
import CustomizeViewPopover from "./popovers/customize-view-popover"
import CustomAttributesPopover from "./popovers/custom-attributes-popover"

export default function ChatHistory() {
  const [visibleColumns, setVisibleColumns] = useState({
    time: true,
    cost: true,
    sessionId: true,
    sessionStatus: true,
    userSentiment: true,
    from: true,
    to: true,
    importantLeads: true,
    callerWantsAppointment: true,
  })
  const [filters, setFilters] = useState<Record<string, any>>({})
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(null)

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-border bg-white">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded border border-border flex items-center justify-center text-sm">💬</div>
            <h1 className="text-xl font-semibold">Chat History</h1>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Calendar className="w-4 h-4" />
                  Date Range
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <DateRangePopover
                  onApply={(range) => {
                    setDateRange(range)
                  }}
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="start">
                <FilterPopover
                  onApply={(newFilters) => {
                    setFilters(newFilters)
                  }}
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Columns3 className="w-4 h-4" />
                  Customize View
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="start">
                <CustomizeViewPopover
                  visibleColumns={visibleColumns}
                  onApply={(columns) => {
                    setVisibleColumns(columns)
                  }}
                />
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Settings2 className="w-4 h-4" />
                  Custom Attributes
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="start">
                <CustomAttributesPopover />
              </PopoverContent>
            </Popover>

            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <ChatHistoryTable visibleColumns={visibleColumns} />
      </div>
    </div>
  )
}
