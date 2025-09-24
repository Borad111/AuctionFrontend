"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  endTime: string
  status: "active" | "ending-soon" | "ended"
}

export function CountdownTimer({ endTime, status }: CountdownTimerProps) {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endTime).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endTime])

  const isEnded =
    status === "ended" ||
    (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0)
    const isEndingSoon = timeLeft.days === 0 && timeLeft.hours < 24

  return (
    <Card className={`${isEndingSoon && !isEnded ? "border-destructive bg-destructive/5" : ""}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className={`h-5 w-5 ${isEndingSoon && !isEnded ? "text-destructive" : "text-muted-foreground"}`} />
          <h3 className={`font-semibold ${isEndingSoon && !isEnded ? "text-destructive" : ""}`}>
            {isEnded ? "Auction Ended" : isEndingSoon ? "Ending Soon!" : "Time Remaining"}
          </h3>
        </div>

        {!isEnded ? (
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className={`text-2xl font-bold ${isEndingSoon ? "text-destructive" : "text-primary"}`}>
                {timeLeft.days}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Days</div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${isEndingSoon ? "text-destructive" : "text-primary"}`}>
                {timeLeft.hours}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Hours</div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${isEndingSoon ? "text-destructive" : "text-primary"}`}>
                {timeLeft.minutes}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Minutes</div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${isEndingSoon ? "text-destructive" : "text-primary"}`}>
                {timeLeft.seconds}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Seconds</div>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-muted-foreground">00:00:00</div>
            <div className="text-sm text-muted-foreground mt-2">This auction has ended</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
