import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

type Condition = 'sunny' | 'rain' | 'overcast' | 'snow'

type ForecastDay = {
  day: string
  temp: number
  condition: Condition
}

const mockForecast: ForecastDay[] = [
  { day: 'THU', temp: 61, condition: 'overcast' },
  { day: 'FRI', temp: 55, condition: 'rain' },
  { day: 'SAT', temp: 64, condition: 'sunny' },
]

function mapCondition(id: number): Condition {
  if (id >= 200 && id < 600) return 'rain'
  if (id >= 600 && id < 700) return 'snow'
  if (id >= 700 && id < 800) return 'overcast'
  if (id === 800 || id === 801 || id === 802) return 'sunny'
  return 'overcast'
}

async function getForecast(apiKey: string): Promise<ForecastDay[]> {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=New%20York,NY,US&appid=${apiKey}&units=imperial&cnt=24`,
      { next: { revalidate: 600 } }
    )
    if (!res.ok) return mockForecast

    const data = await res.json()
    const seenDays = new Set<string>()
    const todayStr = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' })
    const forecast: ForecastDay[] = []

    for (const item of data.list) {
      const date = new Date(item.dt * 1000)
      const dateStr = date.toLocaleDateString('en-US', { timeZone: 'America/New_York' })
      if (dateStr === todayStr || seenDays.has(dateStr)) continue
      seenDays.add(dateStr)

      const dayStr = date
        .toLocaleDateString('en-US', { weekday: 'short', timeZone: 'America/New_York' })
        .toUpperCase()

      forecast.push({
        day: dayStr,
        temp: Math.round(item.main.temp),
        condition: mapCondition(item.weather[0].id),
      })

      if (forecast.length === 3) break
    }

    return forecast.length >= 3 ? forecast : mockForecast
  } catch {
    return mockForecast
  }
}

export async function GET() {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY

  if (!apiKey) {
    return NextResponse.json({ condition: 'rain' as Condition, temp: 58, forecast: mockForecast })
  }

  try {
    const [weatherRes, forecast] = await Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=New%20York,NY,US&appid=${apiKey}&units=imperial`,
        { next: { revalidate: 600 } }
      ),
      getForecast(apiKey),
    ])

    if (!weatherRes.ok) throw new Error()
    const data = await weatherRes.json()

    return NextResponse.json({
      condition: mapCondition(data.weather[0].id),
      temp: Math.round(data.main.temp),
      forecast,
    })
  } catch {
    return NextResponse.json({ condition: 'rain' as Condition, temp: 58, forecast: mockForecast })
  }
}
