import { config } from '@/config';
import HomeContainer from '@/features/home/container/HomeContainer'
import React from 'react'


async function getCategoriesSSR() {
  const res = await fetch(`${config.api.auction}/categories`, {
    cache: "no-store", // fresh data every time (or revalidate: 60 for ISR)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
export default async function page() {
   const categoriesData = await getCategoriesSSR();
  return (
    <div>
      <HomeContainer initialCategories={categoriesData.categories}/>
    </div>
  )
}

