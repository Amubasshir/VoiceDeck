"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Filter, Plus, Settings, BarChart3, TrendingUp, Clock, Phone } from "lucide-react"
import KPICard from "./kpi-card"
import AreaChartCard from "./area-chart-card"
import DonutChartCard from "./donut-chart-card"
import StackedBarChartCard from "./stacked-bar-chart-card"
import HorizontalBarChartCard from "./horizontal-bar-chart-card"

// Mock data
const areaChartData = [
  { date: "Sep 29, 2025", value: 45 },
  { date: "Sep 30, 2025", value: 52 },
  { date: "Oct 01, 2025", value: 48 },
  { date: "Oct 02, 2025", value: 61 },
  { date: "Oct 03, 2025", value: 55 },
  { date: "Oct 04, 2025", value: 67 },
  { date: "Oct 05, 2025", value: 72 },
  { date: "Oct 06, 2025", value: 68 },
]

const callSuccessfulData = [
  { name: "Unsuccessful", value: 45 },
  { name: "Successful", value: 255 },
]

const disconnectionReasonData = [
  { name: "Agent hangup", value: 120 },
  { name: "Invalid destination", value: 85 },
  { name: "Other", value: 51 },
]

const userSentimentData = [
  { name: "Neutral", value: 180 },
  { name: "Positive", value: 76 },
  { name: "Unknown", value: 0 },
]

const phoneData = [
  { name: "Inbound", value: 156 },
  { name: "Outbound", value: 100 },
]

const stackedBarData = [
  {
    date: "Sep 22, 2025",
    "Call counts: successful": 45,
    "Call counts: unsuccessful": 12,
  },
  {
    date: "Sep 29, 2025",
    "Call counts: successful": 78,
    "Call counts: unsuccessful": 18,
  },
  {
    date: "Oct 06, 2025",
    "Call counts: successful": 92,
    "Call counts: unsuccessful": 22,
  },
]

const disconnectionStackedData = [
  {
    date: "Sep 22, 2025",
    "Call counts: agent hangup": 45,
    "Call counts: invalid destination": 12,
    "Call counts: other": 8,
  },
  {
    date: "Sep 29, 2025",
    "Call counts: agent hangup": 78,
    "Call counts: invalid destination": 18,
    "Call counts: other": 12,
  },
  {
    date: "Oct 06, 2025",
    "Call counts: agent hangup": 92,
    "Call counts: invalid destination": 22,
    "Call counts: other": 15,
  },
]

const sentimentStackedData = [
  {
    date: "Sep 22, 2025",
    "Call counts: neutral": 45,
    "Call counts: positive": 12,
    "Call counts: unknown": 3,
  },
  {
    date: "Sep 29, 2025",
    "Call counts: neutral": 78,
    "Call counts: positive": 18,
    "Call counts: unknown": 5,
  },
  {
    date: "Oct 06, 2025",
    "Call counts: neutral": 92,
    "Call counts: positive": 22,
    "Call counts: unknown": 8,
  },
]

const agentSuccessfulData = [
  { name: "Whatsapp Rece...", value: 245 },
  { name: "agent_272cf05...", value: 156 },
  { name: "Receptionist", value: 89 },
]

const agentPickedUpData = [
  { name: "Whatsapp Rece...", value: 312 },
  { name: "Receptionist", value: 198 },
  { name: "agent_272cf05...", value: 145 },
]

const agentTransferData = [
  { name: "Whatsapp Rece...", value: 267 },
  { name: "agent_272cf05...", value: 178 },
  { name: "Receptionist", value: 112 },
]

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("all-time")

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Analytics</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Calendar className="w-4 h-4" />
              All time
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="ghost" size="sm">
              Reset
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Plus className="w-4 h-4" />
              Add
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Settings className="w-4 h-4" />
              Edit
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <KPICard title="Call Counts" value="256" icon={Phone} subtitle="All agents" />
          <KPICard title="Call Duration" value="21s" icon={Clock} subtitle="All agents" />
          <KPICard title="Call Latency" value="1331ms" icon={TrendingUp} subtitle="All agents" />
        </div>

        {/* First Row of Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AreaChartCard
            title="Call Counts"
            subtitle="All agents"
            icon={BarChart3}
            data={areaChartData}
            dataKey="value"
          />
          <DonutChartCard
            title="Call Successful"
            subtitle="All agents"
            icon={BarChart3}
            data={callSuccessfulData}
            colors={["#3b82f6", "#ff9966"]}
          />
        </div>

        {/* Second Row of Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <DonutChartCard
            title="Disconnection Reason"
            subtitle="All agents"
            icon={BarChart3}
            data={disconnectionReasonData}
            colors={["#3b82f6", "#ff9966", "#a78bfa"]}
          />
          <DonutChartCard
            title="User Sentiment"
            subtitle="All agents"
            icon={BarChart3}
            data={userSentimentData}
            colors={["#3b82f6", "#ff9966", "#a78bfa"]}
          />
          <DonutChartCard
            title="Phone inbound/outbound"
            subtitle="All agents"
            icon={BarChart3}
            data={phoneData}
            colors={["#3b82f6", "#ff9966"]}
          />
        </div>

        {/* Rate Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <AreaChartCard
            title="Call Picked Up Rate"
            subtitle="All agents"
            icon={BarChart3}
            data={areaChartData}
            dataKey="value"
          />
          <AreaChartCard
            title="Call Successful Rate"
            subtitle="All agents"
            icon={BarChart3}
            data={areaChartData}
            dataKey="value"
          />
          <AreaChartCard
            title="Call Transfer Rate"
            subtitle="All agents"
            icon={BarChart3}
            data={areaChartData}
            dataKey="value"
          />
        </div>

        {/* Additional Rate Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <AreaChartCard
            title="Voicemail Rate"
            subtitle="All agents"
            icon={BarChart3}
            data={areaChartData}
            dataKey="value"
          />
          <AreaChartCard
            title="Average call duration"
            subtitle="All agents"
            icon={BarChart3}
            data={areaChartData}
            dataKey="value"
          />
          <AreaChartCard
            title="Average Latency"
            subtitle="All agents"
            icon={BarChart3}
            data={areaChartData}
            dataKey="value"
          />
        </div>

        {/* Stacked Bar Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StackedBarChartCard
            title="Call Successful"
            subtitle="All agents"
            icon={BarChart3}
            data={stackedBarData}
            dataKeys={[
              { key: "Call counts: successful", name: "Call counts: successful", color: "#3b82f6" },
              { key: "Call counts: unsuccessful", name: "Call counts: unsuccessful", color: "#ff9966" },
            ]}
          />
          <StackedBarChartCard
            title="Disconnection Reason"
            subtitle="All agents"
            icon={BarChart3}
            data={disconnectionStackedData}
            dataKeys={[
              { key: "Call counts: agent hangup", name: "Call counts: agent hangup", color: "#3b82f6" },
              { key: "Call counts: invalid destination", name: "Call counts: invalid destination", color: "#ff9966" },
              { key: "Call counts: other", name: "+2 more", color: "#a78bfa" },
            ]}
          />
          <StackedBarChartCard
            title="User Sentiment"
            subtitle="All agents"
            icon={BarChart3}
            data={sentimentStackedData}
            dataKeys={[
              { key: "Call counts: neutral", name: "Call counts: neutral", color: "#3b82f6" },
              { key: "Call counts: positive", name: "Call counts: positive", color: "#ff9966" },
              { key: "Call counts: unknown", name: "Call counts: unknown", color: "#a78bfa" },
            ]}
          />
        </div>

        {/* Horizontal Bar Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <HorizontalBarChartCard
            title="Call Successful"
            subtitle="All agents"
            icon={BarChart3}
            data={agentSuccessfulData}
            color="#3b82f6"
          />
          <HorizontalBarChartCard
            title="Call Picked Up Rate"
            subtitle="All agents"
            icon={BarChart3}
            data={agentPickedUpData}
            color="#3b82f6"
          />
          <HorizontalBarChartCard
            title="Call Transfer Rate"
            subtitle="All agents"
            icon={BarChart3}
            data={agentTransferData}
            color="#3b82f6"
          />
        </div>
      </div>
    </div>
  )
}
