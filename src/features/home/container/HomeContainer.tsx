"use client";
import dynamic from "next/dynamic";
import HeroSkeleton from "../components/ui/HeroSkeleton";
import TrustSkeleton from "../components/ui/TrustSkeleton";
import FeaturedAuctionsSkeleton from "../components/ui/FeaturedAuctionsSkeleton";
import CategoriesSkeleton from "../components/ui/CategoriesSkeleton";
import CTASkeleton from "../components/ui/CTASkeleton";
import { useFeaturedAuctions } from "../hooks/useFeaturedItems";
import { useCategories } from "../hooks/useCategories";
import { SectionBoundary } from "@/components/errorBoundary/SectionBoundary";
import { Suspense } from "react";

const Hero = dynamic(
  () => import("@/features/home/components/home/Hero").then((mod) => mod.Hero),
  {
    loading: () => <HeroSkeleton />,
    ssr: true,
  }
);

const Trust = dynamic(
  () =>
    import("@/features/home/components/home/Trust").then((mod) => mod.default),
  {
    loading: () => <TrustSkeleton />,
    ssr: true,
  }
);

const FeaturedAuctions = dynamic(
  () =>
    import("@/features/home/components/home/FeaturedAuctions").then(
      (mod) => mod.default
    ),
  {
    loading: () => <FeaturedAuctionsSkeleton />,
    ssr: false,
  }
);
const Categories = dynamic(
  () =>
    import("@/features/home/components/home/Categories").then(
      (mod) => mod.default
    ),
  {
    loading: () => <CategoriesSkeleton />,
    ssr: true,
  }
);
const CTA = dynamic(
  () =>
    import("@/features/home/components/home/CTA").then((mod) => mod.default),
  {
    loading: () => <CTASkeleton />,
    ssr: true,
  }
);
export default function HomeContainer({initialCategories}:{initialCategories:any[]}) {
  const {
    featuredAuctions,
    loading: auctionLoading,
    error: auctionError,
  } = useFeaturedAuctions();
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories(initialCategories);
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
          <Hero />
          <Trust />
          <FeaturedAuctions
            auctions={featuredAuctions}
            loading={auctionLoading}
            error={auctionError}
          />
          <SectionBoundary message="Unable to load categories">
              <Categories
                categories={categories}
                loading={categoriesLoading}
                error={categoriesError}
              />
          </SectionBoundary>
          <CTA />
      </main>
    </div>
  );
}
