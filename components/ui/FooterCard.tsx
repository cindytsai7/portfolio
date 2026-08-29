'use client'

import { useEffect, useRef, useState } from 'react'
import VariableProximity from '@/components/ui/VariableProximity'

type Condition = 'sunny' | 'rain' | 'overcast' | 'snow'

type WeatherState = {
  bg:     string
  text:   string
  stroke: string
}

const states: Record<Condition, WeatherState> = {
  sunny:    { bg: 'rgba(242,230,200,0.60)', text: '#3a3020', stroke: 'rgba(58,48,32,0.20)'  },
  rain:     { bg: 'rgba(180,198,216,0.50)', text: '#1e2d3d', stroke: 'rgba(30,45,61,0.20)'  },
  overcast: { bg: 'rgba(200,196,190,0.55)', text: '#2a2825', stroke: 'rgba(42,40,37,0.20)'  },
  snow:     { bg: 'rgba(225,232,240,0.55)', text: '#2a2825', stroke: 'rgba(42,40,37,0.20)'  },
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/New_York',
  })
}

export default function FooterCard() {
  const [condition, setCondition] = useState<Condition>('overcast')
  const [temp, setTemp]           = useState<number | null>(null)
  const [time, setTime]           = useState(() => formatTime(new Date()))
  const containerRef              = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/weather')
      .then((r) => r.json())
      .then((data) => {
        setCondition(data.condition)
        setTemp(data.temp)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 60_000)
    return () => clearInterval(id)
  }, [])

  const state = states[condition]

  return (
    <div
      ref={containerRef}
      className="footer-card rounded-card overflow-hidden flex flex-col px-6 py-8 md:px-10 md:py-12 min-h-[280px]"
      style={{
        backgroundColor: state.bg,
        color:           state.text,
        boxShadow:       `inset 0 0 0 1px ${state.stroke}`,
      }}
    >
      {/* Stacks below md — side by side these two collide on a phone */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end mt-auto">

        <h2 className="text-card-title font-normal max-w-[520px]">
          © 2026 Designed and built by <VariableProximity
            label="Cindy Tsai"
            fromFontVariationSettings="'wght' 600"
            toFontVariationSettings="'wght' 300"
            containerRef={containerRef}
            radius={150}
            falloff="linear"
          />.
        </h2>

        <p className="text-card-title font-normal shrink-0">
          New York · {time}{temp !== null ? ` · ${temp}°F` : ''}
        </p>

      </div>
    </div>
  )
}
