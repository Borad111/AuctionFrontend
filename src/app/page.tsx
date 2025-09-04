import PublicRoute from "@/components/auth/PublicRoute";
import { AuthContainer } from "@/features/auth/container/AuthContainer";
import Image from "next/image";

export default function Home() {
  return (
   <>
   {/* <PublicRoute> */}
      <AuthContainer />
      {/* </PublicRoute> */}
   </>
  );
}
