'use client'

import { useEffect, useState } from 'react'

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
    bg: '#D9C4A0',
    text: '#3a3020',
    pill: { bg: 'rgba(0,0,0,0.1)', border: 'rgba(0,0,0,0.12)' },
    tooltip: { bg: 'rgba(58,48,32,0.85)', text: '#d9c4a0' },
  },
  rain: {
    bg: '#282F38',
    text: '#A5B4C4',
    pill: { bg: 'rgba(255,255,255,0.08)', border: 'transparent' },
    tooltip: { bg: 'rgba(165,180,196,0.12)', text: '#A5B4C4' },
  },
  overcast: {
    bg: '#3D3B38',
    text: '#E8E6E2',
    pill: { bg: 'rgba(255,255,255,0.08)', border: 'transparent' },
    tooltip: { bg: 'rgba(232,230,226,0.1)', text: '#E8E6E2' },
  },
  snow: {
    bg: '#e5e3df',
    text: '#2a2825',
    pill: { bg: 'rgba(0,0,0,0.08)', border: 'rgba(0,0,0,0.12)' },
    tooltip: { bg: 'rgba(42,40,37,0.85)', text: '#e5e3df' },
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
      className="footer-card rounded-[20px] overflow-hidden flex flex-col justify-between p-8 md:p-12 h-[464px]"
      style={{ backgroundColor: state.bg, color: state.text }}
    >
      {/* Main content */}
      <div>
        <h2 className="text-[28px] font-bold leading-tight max-w-[520px]">
          Designed and built by Cindy Tsai
        </h2>
        <div className="flex gap-8 mt-8">
          <a
            href="mailto:cindytsai7@gmail.com"
            className="text-[14px] font-bold uppercase opacity-60 hover:opacity-100 transition-opacity duration-200"
          >
            E-MAIL →
          </a>
          <a
            href="https://www.linkedin.com/in/cindyctsai/"
            className="text-[14px] font-bold uppercase opacity-60 hover:opacity-100 transition-opacity duration-200"
          >
            LINKEDIN →
          </a>
        </div>
      </div>

      {/* Weather strip */}
      <div className="flex justify-end">
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
