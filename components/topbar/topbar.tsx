"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Topbar() {
  return (
    <div className="h-16 border-b border-border bg-white px-6 flex items-center justify-between">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10 bg-muted border-0" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          Import
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
          Create an Agent
        </Button>
      </div>
    </div>
  )
}
