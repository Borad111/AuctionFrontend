import PublicRoute from "@/components/auth/PublicRoute";
import { GlobalBoundary } from "@/components/errorBoundary/GlobalBoundary";
import HomeContainer from "@/features/home/container/HomeContainer";

export default function Home() {
  return (
    <>
      <PublicRoute>
        {/* <AuthContainer /> */}
        {/* <GlobalBoundary> */}
        <HomeContainer />
        {/* </GlobalBoundary> */}
      </PublicRoute>
    </>
  );
}
