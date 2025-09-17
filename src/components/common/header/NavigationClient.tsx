// components/common/header/NavigationClient.tsx
"use client";

import dynamic from "next/dynamic";
import NavigationSkeleton from "./NavigationSkeleton";

// Dynamic import allowed in client component
const Navigation = dynamic(() => import("./Navigation").then(mod => mod.Navigation), {
  loading: () => <NavigationSkeleton />,
  ssr: false,
});

export default function NavigationClient() {
  return <Navigation />;
}
