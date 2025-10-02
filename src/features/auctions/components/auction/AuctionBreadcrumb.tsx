"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { config } from "@/config"
import { routes } from "@/constants/routes"

export function AuctionBreadcrumb({ category, title }: { category: string, title: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link href={routes.home} className="hover:text-foreground flex items-center gap-1">
        <ArrowLeft className="h-4 w-4" />
        Back to Auctions
      </Link>
      <span>/</span>
      <span>{category}</span>
      <span>/</span>
      <span className="text-foreground">{title}</span>
    </div>
  )
}
