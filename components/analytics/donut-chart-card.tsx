"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"
import type { LucideIcon } from "lucide-react"

interface DonutChartCardProps {
  title: string
  subtitle?: string
  icon: LucideIcon
  data: Array<{ name: string; value: number }>
  colors?: string[]
}

const defaultColors = ["#3b82f6", "#ff9966", "#a78bfa", "#34d399"]

export default function DonutChartCard({
  title,
  subtitle,
  icon: Icon,
  data,
  colors = defaultColors,
}: DonutChartCardProps) {
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
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
