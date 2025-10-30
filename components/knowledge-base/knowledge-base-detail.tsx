"use client"

import { Button } from "@/components/ui/button"
import { Edit, Trash2, RefreshCw, ChevronUp } from "lucide-react"
import { useState } from "react"

interface KnowledgeBaseDetailProps {
  selectedKB: string
}

const knowledgeBasesData: Record<
  string,
  {
    name: string
    id: string
    uploadedBy: string
    uploadDate: string
    webpages: Array<{
      url: string
      domain: string
      pages: number
      lastSynced: string
    }>
  }
> = {
  "booking-page-api": {
    name: "Booking page API",
    id: "know_3B",
    uploadedBy: "You",
    uploadDate: "10/02/2025 17:32",
    webpages: [
      {
        url: "https://www.apimmi.com.au/book-online",
        domain: "www.apimmi.com.au",
        pages: 1,
        lastSynced: "10/26/2025 15:57",
      },
    ],
  },
  "booking-page": {
    name: "Booking page",
    id: "know_2B",
    uploadedBy: "You",
    uploadDate: "10/01/2025 14:20",
    webpages: [
      {
        url: "https://www.example.com/booking",
        domain: "www.example.com",
        pages: 2,
        lastSynced: "10/25/2025 10:30",
      },
    ],
  },
}

export default function KnowledgeBaseDetail({ selectedKB }: KnowledgeBaseDetailProps) {
  const kb = knowledgeBasesData[selectedKB]
  const [expandedWebpage, setExpandedWebpage] = useState(0)

  if (!kb) {
    return (
      <div className="p-8">
        <p className="text-muted-foreground">Select a knowledge base to view details</p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-auto">
      {/* Header Section */}
      <div className="border-b border-border bg-white">
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{kb.name}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>ID: {kb.id}</span>
                <span>•</span>
                <span>Uploaded by: {kb.uploadedBy}</span>
                <span>•</span>
                <span>Uploaded on: {kb.uploadDate}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="default" size="sm" className="gap-2">
                <Edit className="w-4 h-4" />
                Edit
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <RefreshCw className="w-4 h-4" />
                Sync Webpages
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Synced Webpages</h2>

          {kb.webpages.map((webpage, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-white">
              {/* Webpage Item Header */}
              <button
                onClick={() => setExpandedWebpage(expandedWebpage === index ? -1 : index)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1 text-left">
                  <div className="w-8 h-8 rounded bg-yellow-100 flex items-center justify-center text-sm font-semibold text-yellow-700">
                    URL
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{webpage.domain}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <span>{webpage.pages} Page</span>
                      <span>•</span>
                      <span>Last synced on {webpage.lastSynced}</span>
                    </div>
                  </div>
                </div>
                <ChevronUp
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    expandedWebpage === index ? "" : "rotate-180"
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedWebpage === index && (
                <div className="border-t border-border p-4 bg-gray-50">
                  <p className="text-sm text-muted-foreground mb-2">URL:</p>
                  <p className="text-sm font-mono text-foreground break-all">{webpage.url}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
