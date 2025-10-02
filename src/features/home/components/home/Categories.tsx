  import React from "react";

  import { CategoryCard } from "@/features/home/components/ui/CategoryCard";
  import { CategoriesProps } from "../../types";
  import CategoriesSkeleton from "../ui/CategoriesSkeleton";
  import { StateHandler } from "@/components/ui/StateHandler";

  function Categories({ categories, loading, error }: CategoriesProps) {
  
    return (
      <StateHandler loading={loading} error={error} loadingFallback={<CategoriesSkeleton />}>

        <section className="py-16 bg-muted/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of auction categories and find exactly
                what you're looking for
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {categories.map ((category) => (
                <CategoryCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  icon={category.icon ?? "HelpCircle"}
                  auctionCount={category.auctionCount}
                />
              ))}
            </div>
          </div>
        </section>
        </StateHandler>
        

    );
  }

  export default Categories;
