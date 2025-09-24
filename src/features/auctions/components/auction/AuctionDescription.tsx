"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AuctionDescription({ description }: { description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm max-w-none">
          {description.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0 text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
