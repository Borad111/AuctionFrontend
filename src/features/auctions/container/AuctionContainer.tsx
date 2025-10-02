"use client"
import { AuctionRelated } from "../components/auction/AuctionRelated"
import dynamic from "next/dynamic"
import { AuctionBreadcrumbSkeleton } from "../components/ui/AuctionBreadcrumbSkeleton"
import { ImageGallerySkeleton } from "@/features/auctions/components/ui/ImageGallerySkeleton"
import { AuctionHeaderSkeleton } from "../components/ui/AuctionHeaderSkeleton"
import { CountdownTimerSkeleton } from "../components/ui/CountdownTimerSkeleton"
import { BiddingFormSkeleton } from "../components/ui/BiddingFormSkeleton"
import { AuctionSellerInfoSkeleton } from "../components/ui/AuctionSellerInfoSkeleton"
import { AuctionTrustIndicatorsSkeleton } from "../components/ui/AuctionTrustIndicatorsSkeleton"
import { AuctionDescriptionSkeleton } from "../components/ui/AuctionDescriptionSkeleton"
import { AuctionDetailsSkeleton } from "../components/ui/AuctionDetailsSkeleton"
import { BidHistorySkeleton } from "../components/ui/BidHistorySkeleton"
import { AuctionContainerProps } from "../types"
import { useAuctionDetail } from "../hooks/useAuctionDetail"
import { StateHandler } from "@/components/ui/StateHandler"
import AuctionSkeleton from "../components/ui/AuctionSkeleton"


const AuctionBreadcrumb = dynamic(
  () =>
    import("@/features/auctions/components/auction/AuctionBreadcrumb").then(
      (mod) => mod.AuctionBreadcrumb
    ),
  {
    loading: () => <AuctionBreadcrumbSkeleton />,
    ssr: false,
  }
);
const ImageGallery = dynamic(
  () =>
    import("@/features/auctions/components/auction/image-gallery").then(
      (mod) => mod.ImageGallery
    ),
  {
    loading: () => <ImageGallerySkeleton />,
    ssr: false,
  }
);
const AuctionHeader=dynamic(
  () =>
    import("../components/auction/AuctionHeader").then(
      (mod) => mod.AuctionHeader
    ),
  {
    loading: () => <AuctionHeaderSkeleton />,
    ssr: false,
  }
);
const CountdownTimer = dynamic(
  () =>
    import("../components/auction/countdown-timer").then(
      (mod) => mod.CountdownTimer
    ),
  {
    loading: () => <CountdownTimerSkeleton />,
    ssr: false,
  }
);
const BiddingForm = dynamic(
  () =>
    import("../components/auction/bidding-form").then(
      (mod) => mod.BiddingForm
    ),
  {
    ssr: false,
    loading: () => <BiddingFormSkeleton/>,
  }
);
const AuctionSellerInfo = dynamic(
  () =>
    import("../components/auction/AuctionSellerInfo").then(
      (mod) => mod.AuctionSellerInfo
    ),
  {
    ssr: false,
    loading: () => <AuctionSellerInfoSkeleton/>,
  }
);
const AuctionTrustIndicators = dynamic(
  () =>
    import("../components/auction/AuctionTrustIndicators").then(
      (mod) => mod.AuctionTrustIndicators
    ),
  {
    ssr: false,
    loading: () => <AuctionTrustIndicatorsSkeleton/>,
  }
);
const AuctionDescription = dynamic(
  () =>
    import("../components/auction/AuctionDescription").then(
      (mod) => mod.AuctionDescription
    ),
  {
    ssr: false,
    loading: () => <AuctionDescriptionSkeleton/>,
  }
);
const AuctionDetails = dynamic(
  () =>
    import("../components/auction/AuctionDetails").then(
      (mod) => mod.AuctionDetails
    ),
  {
    ssr: false,
    loading: () =><AuctionDetailsSkeleton /> ,
  }
);
const BidHistory = dynamic(
  () =>
    import("../components/auction/bid-history").then(
      (mod) => mod.BidHistory
    ),
  {
    ssr: false,
    loading: () => <BidHistorySkeleton/>,
  }
);
export function AuctionContainer({ auctionId }: AuctionContainerProps) {
  const { auction, loading, error } = useAuctionDetail(auctionId);
 
    
  return (
    <StateHandler     loading={loading} error={error} loadingFallback={<AuctionSkeleton/>}  >
  {
  !auction ? (
  <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-destructive mb-4">
              Auction Not Found
            </h2>
            <p className="text-muted-foreground">
              The auction you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </div>
  ):(
  <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 mx-auto">

        <AuctionBreadcrumb 
          category={auction.category.name} 
          title={auction.title} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ImageGallery images={auction.images} title={auction.title} />
          </div>

          <div className="space-y-6">
            <AuctionHeader
              title={auction.title}
              condition={auction.condition}
              status={auction?.status}
              watchers={auction.watchers}
            />
             <CountdownTimer 
              endTime={auction.endTime} 
              status={auction.status.toLowerCase() as "active" | "ending-soon" | "ended"} 
            />
            <BiddingForm
              currentBid={auction.currentPrice}
              minimumBid={auction.minimumBid}
              reservePrice={auction.reservePrice || undefined}
              reserveMet={auction.reserveMet}
              auctionStatus={auction.status.toLowerCase() as "active" | "ending-soon" | "ended"}
              onPlaceBid={(amount: number) => console.log("Placing bid:", amount)}
            />
            <AuctionSellerInfo
              seller={auction.seller}
              rating={auction.sellerRating}
              location={auction.location}
              shipping={auction.shipping}
            />
            <AuctionTrustIndicators />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <AuctionDescription description={auction.description} />
              <AuctionDetails
              startingBid={auction.startingBid}
              currentBid={auction.currentPrice}
              reservePrice={auction.reservePrice || 0}
              reserveMet={auction.reserveMet}
              totalBids={auction.bidHistory.length}
            />
          </div>
          <div>
            <BidHistory 
              bids={auction.bidHistory} 
              currentBid={auction.currentPrice} 
            />
          </div>
        </div>

        {/* <AuctionRelated relatedAuctions={relatedAuctions} /> */}
            </div>
    </div>
  )
}
  
    </StateHandler>

  )
}
