"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import type { LucideIcon } from "lucide-react"

interface StackedBarChartCardProps {
  title: string
  subtitle?: string
  icon: LucideIcon
  data: Array<Record<string, any>>
  dataKeys: Array<{ key: string; name: string; color: string }>
}

export default function StackedBarChartCard({ title, subtitle, icon: Icon, data, dataKeys }: StackedBarChartCardProps) {
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
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
            <Legend />
            {dataKeys.map((item) => (
              <Bar key={item.key} dataKey={item.key} stackId="a" fill={item.color} name={item.name} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
