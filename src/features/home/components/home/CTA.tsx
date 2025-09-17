import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

function CTA() {
  return (
    <div>
         <section className="py-16">
        <div className="container px-4 mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-background to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Bidding?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful bidders and discover amazing deals on unique items every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/register">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/auctions">Browse Auctions</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default CTA
