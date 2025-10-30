"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { LucideIcon } from "lucide-react"

interface AreaChartCardProps {
  title: string
  subtitle?: string
  icon: LucideIcon
  data: Array<{ date: string; value: number }>
  dataKey: string
  color?: string
}

export default function AreaChartCard({
  title,
  subtitle,
  icon: Icon,
  data,
  dataKey,
  color = "#3b82f6",
}: AreaChartCardProps) {
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
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`color-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#9ca3af" style={{ fontSize: "12px" }} />
            <YAxis stroke="#9ca3af" style={{ fontSize: "12px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
              }}
            />
            <Area type="monotone" dataKey={dataKey} stroke={color} fillOpacity={1} fill={`url(#color-${dataKey})`} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
