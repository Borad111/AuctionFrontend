"use client"

import { Card, CardContent } from "@/components/ui/card"
import * as Icons from "lucide-react"
import Link from "next/link"
import { CategoryCardProps } from "../../types"


export function CategoryCard({ id, name, icon, auctionCount }: CategoryCardProps) {
  const LucideIcon = (Icons as any)[icon] || Icons.HelpCircle

  return (
    <Link href={`/auctions?category=${id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <LucideIcon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {auctionCount} auctions
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
