  import { Clock, Shield, Users } from 'lucide-react'
  import React from 'react'

  function Trust() {
    return (
      <div>
              <section className="py-12 border-b">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">500K+</h3>
                <p className="text-muted-foreground">Active Bidders</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-muted-foreground">Secure Transactions</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p className="text-muted-foreground">Live Auctions</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  export default Trust
