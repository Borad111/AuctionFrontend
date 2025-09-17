// components/common/header/NavigationClient.tsx
"use client";

import dynamic from "next/dynamic";
import FooterSkeleton from "./FooterSkeleton";

// Dynamic import allowed in client component
const Footer = dynamic(() => import("./Footer").then(mod => mod.Footer), {
  loading: () => <FooterSkeleton />,
  ssr: false,
});

export default function FooterClient() {
  return <Footer/>;
}
