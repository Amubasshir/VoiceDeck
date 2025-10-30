import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface KPICardProps {
  title: string
  value: string | number
  icon: LucideIcon
  subtitle?: string
}

export default function KPICard({ title, value, icon: Icon, subtitle }: KPICardProps) {
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
        <div className="text-3xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}
