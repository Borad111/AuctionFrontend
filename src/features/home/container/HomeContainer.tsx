"use client"
import dynamic from "next/dynamic";
import HeroSkeleton from "../components/ui/HeroSkeleton";
import TrustSkeleton from "../components/ui/TrustSkeleton";
import FeaturedAuctionsSkeleton from "../components/ui/FeaturedAuctionsSkeleton";
import CategoriesSkeleton from "../components/ui/CategoriesSkeleton";
import CTASkeleton from "../components/ui/CTASkeleton";
import { useFeaturedAuctions } from "../hooks/useFeaturedItems";
import { useCategories } from "../hooks/useCategories";

  const Hero=dynamic(
    ()=>
      import("@/features/home/components/home/Hero").then(
        (mod) => mod.Hero
      ),
      {
        loading : () => <HeroSkeleton/>,
        ssr:false
      }
  );

  const Trust = dynamic(
  () => import("@/features/home/components/home/Trust").then((mod) => mod.default),
  {
    loading: () => <TrustSkeleton />,
    ssr: false,
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
    ssr: false,
  }
);
const CTA = dynamic(
  () =>
    import("@/features/home/components/home/CTA").then(
      (mod) => mod.default
    ),
  {
    loading: () => <CTASkeleton />,
    ssr: false,
  }
);
export default function HomeContainer() { 
  

  const { featuredAuctions, loading:auctionLoading, error:auctionError } = useFeaturedAuctions();
  const { categories,loading:categoriesLoading,error:categoriesError}=useCategories();
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero/>
        <Trust/>
        <FeaturedAuctions auctions={featuredAuctions} loading={auctionLoading} error={auctionError} />
        <Categories categories={categories} loading={categoriesLoading} error={categoriesError}/>
        <CTA/>
      </main>
    </div>
  );
}