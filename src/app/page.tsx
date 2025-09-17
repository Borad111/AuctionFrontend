import PublicRoute from "@/components/auth/PublicRoute";
import { AuthContainer } from "@/features/auth/container/AuthContainer";
import HomeContainer from "@/features/home/container/HomeContainer";

export default function Home() {
  return (
   <>
   <PublicRoute>
      {/* <AuthContainer /> */}
      <HomeContainer/>
      </PublicRoute>
   </>
  );
}
