"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { LucideIcon } from "lucide-react"

interface HorizontalBarChartCardProps {
  title: string
  subtitle?: string
  icon: LucideIcon
  data: Array<{ name: string; value: number }>
  color?: string
}

export default function HorizontalBarChartCard({
  title,
  subtitle,
  icon: Icon,
  data,
  color = "#3b82f6",
}: HorizontalBarChartCardProps) {
  return (
    <Card className="bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-muted-foreground" />
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
        </div>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} layout="vertical" margin={{ top: 10, right: 30, left: 100, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis type="number" stroke="#9ca3af" style={{ fontSize: "12px" }} />
            <YAxis dataKey="name" type="category" stroke="#9ca3af" style={{ fontSize: "12px" }} width={90} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
              }}
            />
            <Bar dataKey="value" fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
