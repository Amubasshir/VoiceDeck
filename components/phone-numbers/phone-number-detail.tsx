"use client"

import { Phone, Edit2, Trash2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

interface PhoneNumberDetailProps {
  selectedPhone?: string
}

const phoneNumberData = {
  "phone-1": {
    number: "+61 468 030 030",
    id: "+61468030030",
    provider: "Custom telephony",
    inboundCallAgent: "Receptionist /V72",
    outboundCallAgent: "Receptionist /V72",
    inboundSmsAgent: "Chat agent Receptionist/V35",
    outboundSmsAgent: "Chat agent Receptionist/V35",
    smsAdded: true,
  },
}

export default function PhoneNumberDetail({ selectedPhone = "phone-1" }: PhoneNumberDetailProps) {
  const data = phoneNumberData[selectedPhone as keyof typeof phoneNumberData]

  if (!data) {
    return (
      <div className="p-8">
        <p className="text-muted-foreground">Select a phone number to view details</p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{data.number}</h1>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Edit2 className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              ID: <span className="font-mono">{data.id}</span> • Provider: {data.provider}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Phone className="w-4 h-4" />
              Make an outbound call
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Phone className="w-4 h-4" />
              Make an outbound SMS
            </Button>
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Configuration Sections */}
        <Accordion type="single" collapsible className="space-y-4">
          {/* Inbound Call Agent */}
          <AccordionItem value="inbound-call" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="font-semibold">Inbound call agent</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm">
                <option>{data.inboundCallAgent}</option>
              </select>
              <label className="flex items-center gap-2 mt-4 cursor-pointer">
                <Checkbox id="inbound-webhook" />
                <span className="text-sm text-muted-foreground">Add an inbound webhook. (Learn more).</span>
              </label>
            </AccordionContent>
          </AccordionItem>

          {/* Outbound Call Agent */}
          <AccordionItem value="outbound-call" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="font-semibold">Outbound call agent</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm">
                <option>{data.outboundCallAgent}</option>
              </select>
            </AccordionContent>
          </AccordionItem>

          {/* Inbound SMS Agent */}
          <AccordionItem value="inbound-sms" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="font-semibold">Inbound SMS agent</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm">
                <option>{data.inboundSmsAgent}</option>
              </select>
              <label className="flex items-center gap-2 mt-4 cursor-pointer">
                <Checkbox id="inbound-sms-webhook" />
                <span className="text-sm text-muted-foreground">Add an inbound webhook. (Learn more).</span>
              </label>
            </AccordionContent>
          </AccordionItem>

          {/* Outbound SMS Agent */}
          <AccordionItem value="outbound-sms" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center justify-between w-full pr-4">
                <span className="font-semibold">Outbound SMS agent</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-sm">
                <option>{data.outboundSmsAgent}</option>
              </select>
            </AccordionContent>
          </AccordionItem>

          {/* Advanced Add-Ons */}
          <AccordionItem value="advanced" className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline py-4">
              <span className="font-semibold">Advanced Add-Ons</span>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-4">
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">SMS</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Added</span>
                    </div>
                    <p className="text-sm text-muted-foreground">The ability to send SMS</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Setup SMS Function →
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
