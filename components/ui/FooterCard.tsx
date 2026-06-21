'use client'

import { useEffect, useRef, useState } from 'react'
import VariableProximity from '@/components/ui/VariableProximity'

type Condition = 'sunny' | 'rain' | 'overcast' | 'snow'
type ForecastDay = { day: string; temp: number; condition: Condition }

type WeatherState = {
  bg: string
  text: string
  pill: { bg: string; border: string }
  tooltip: { bg: string; text: string }
}

const states: Record<Condition, WeatherState> = {
  sunny: {
    bg: 'rgba(242,230,200,0.60)',
    text: '#3a3020',
    pill: { bg: 'rgba(0,0,0,0.07)', border: 'rgba(0,0,0,0.10)' },
    tooltip: { bg: 'rgba(80,65,40,0.92)', text: 'rgba(242,230,200,1)' },
  },
  rain: {
    bg: 'rgba(180,198,216,0.50)',
    text: '#1e2d3d',
    pill: { bg: 'rgba(0,0,0,0.07)', border: 'rgba(0,0,0,0.10)' },
    tooltip: { bg: 'rgba(30,45,61,0.92)', text: 'rgba(180,198,216,1)' },
  },
  overcast: {
    bg: 'rgba(200,196,190,0.55)',
    text: '#2a2825',
    pill: { bg: 'rgba(0,0,0,0.07)', border: 'rgba(0,0,0,0.10)' },
    tooltip: { bg: 'rgba(50,48,45,0.92)', text: 'rgba(200,196,190,1)' },
  },
  snow: {
    bg: 'rgba(225,232,240,0.55)',
    text: '#2a2825',
    pill: { bg: 'rgba(0,0,0,0.07)', border: 'rgba(0,0,0,0.10)' },
    tooltip: { bg: 'rgba(40,50,60,0.92)', text: 'rgba(225,232,240,1)' },
  },
}

const conditionLabels: Record<Condition, string> = {
  sunny: 'Golden hour energy',
  rain: 'Classic drizzle vibe',
  overcast: 'Cozy gray blanket',
  snow: 'Powder day mode',
}

function formatTime(date: Date) {
  return date
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Los_Angeles',
    })
    .toUpperCase()
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[0.65em] h-[0.65em] shrink-0 ml-0.5">
      <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect key={deg} x="11.25" y="1.5" width="1.5" height="3" rx="0.75" transform={`rotate(${deg} 12 12)`} />
      ))}
    </svg>
  )
}

function CloudBase() {
  return (
    <>
      <circle cx="7" cy="12" r="4" fill="currentColor" />
      <circle cx="12.5" cy="9.5" r="5.5" fill="currentColor" />
      <circle cx="18" cy="12" r="3.5" fill="currentColor" />
      <rect x="3" y="12" width="18.5" height="4.5" fill="currentColor" />
    </>
  )
}

function RainIcon() {
  return (
    <svg width="16" height="16" viewBox="-1 2 26 22">
      <CloudBase />
      <circle cx="8" cy="20.5" r="1.5" fill="currentColor" />
      <circle cx="13" cy="20.5" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20.5" r="1.5" fill="currentColor" />
    </svg>
  )
}

function OvercastIcon() {
  return (
    <svg width="16" height="16" viewBox="-1 3 26 18">
      <CloudBase />
    </svg>
  )
}

function SnowIcon() {
  return (
    <svg width="16" height="16" viewBox="-1 2 26 22">
      <CloudBase />
      {[8, 13, 18].map((cx) => (
        <g key={cx} transform={`translate(${cx}, 20.5)`}>
          <rect x="-0.75" y="-2.5" width="1.5" height="5" rx="0.75" fill="currentColor" />
          <rect x="-2.5" y="-0.75" width="5" height="1.5" rx="0.75" fill="currentColor" />
        </g>
      ))}
    </svg>
  )
}

const icons: Record<Condition, React.ReactNode> = {
  sunny: <SunIcon />,
  rain: <RainIcon />,
  overcast: <OvercastIcon />,
  snow: <SnowIcon />,
}

export default function FooterCard() {
  const [condition, setCondition] = useState<Condition>('overcast')
  const [temp, setTemp] = useState<number | null>(null)
  const [forecast, setForecast] = useState<ForecastDay[]>([])
  const [time, setTime] = useState(() => formatTime(new Date()))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/weather')
      .then((r) => r.json())
      .then((data) => {
        setCondition(data.condition)
        setTemp(data.temp)
        setForecast(data.forecast ?? [])
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
      className="footer-card surface-card rounded-card overflow-hidden flex flex-col px-6 py-8 md:px-10 md:py-12 min-h-[280px]"
      style={{ backgroundColor: state.bg, color: state.text }}
    >
      {/* Bottom row: copyright left, weather right */}
      <div className="flex justify-between items-end mt-auto">
        <h2 className="text-[20px] font-bold leading-[1.08] tracking-[-0.025em] max-w-[520px]">
          © 2026 Designed and built by <VariableProximity
            label="Cindy Tsai"
            fromFontVariationSettings="'wght' 600"
            toFontVariationSettings="'wght' 300"
            containerRef={containerRef}
            radius={150}
            falloff="linear"
          />.
        </h2>
        <div className="relative flex items-center gap-2 font-mono text-[13px] uppercase">
          <span style={{ opacity: 0.7 }}>SEATTLE</span>
          <span style={{ opacity: 0.7 }}>·</span>
          <span style={{ opacity: 0.7 }}>{time}</span>

          {temp !== null && (
            <>
              <span style={{ opacity: 0.7 }}>·</span>

              <div
                className="weather-pill"
                style={{ background: state.pill.bg, borderColor: state.pill.border }}
              >
                {/* Tooltip */}
                <div
                  className="tooltip font-sans normal-case"
                  style={{ background: state.tooltip.bg, color: state.tooltip.text }}
                >
                  <p className="text-[13px]" style={{ opacity: 0.6 }}>
                    {conditionLabels[condition]}
                  </p>
                  <p className="text-[28px] font-semibold leading-none mt-1">
                    {temp}°
                  </p>
                  <div
                    className="my-3"
                    style={{ height: '1px', backgroundColor: 'currentColor', opacity: 0.15 }}
                  />
                  <div className="flex justify-between">
                    {forecast.map((day) => (
                      <div key={day.day} className="flex flex-col items-center gap-1">
                        <span className="text-[11px] font-mono uppercase" style={{ opacity: 0.6 }}>
                          {day.day}
                        </span>
                        {icons[day.condition]}
                        <span className="text-[13px]">{day.temp}°</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pill content */}
                <span className="flex items-center gap-1.5" style={{ opacity: 0.7 }}>
                  {icons[condition]}
                  <span>{temp}°F</span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
