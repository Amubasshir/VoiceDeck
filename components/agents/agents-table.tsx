"use client"

import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const agentsData = [
  {
    id: 1,
    name: "Whatsapp Receptionist",
    type: "Conversation Flow",
    voice: { name: "Amy(UK)", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amy" },
    phone: "-",
    editedBy: "10/10/2025, 20:39",
  },
  {
    id: 2,
    name: "Chat agent Receptionist",
    type: "Conversation Flow",
    voice: null,
    phone: "+61 468 030 030",
    editedBy: "10/10/2025, 20:33",
  },
  {
    id: 3,
    name: "Receptionist",
    type: "Conversation Flow",
    voice: { name: "Amy(UK)", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amy" },
    phone: "+61 468 030 030",
    editedBy: "10/09/2025, 19:47",
  },
]

export default function AgentsTable() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">All Agents</h1>
      </div>

      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">Agent Name</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">Agent Type</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">Voice</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">Phone</TableHead>
              <TableHead className="text-xs font-semibold text-muted-foreground uppercase">Edited by</TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agentsData.map((agent) => (
              <TableRow key={agent.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                <TableCell className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-sm">🤖</div>
                    <span className="font-medium text-sm text-foreground">{agent.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-foreground">{agent.type}</TableCell>
                <TableCell className="text-sm">
                  {agent.voice ? (
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={agent.voice.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{agent.voice.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-foreground">{agent.voice.name}</span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell className="text-sm">
                  {agent.phone ? (
                    <span className="text-blue-600 font-medium">{agent.phone}</span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{agent.editedBy}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
