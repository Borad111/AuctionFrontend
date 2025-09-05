import PublicRoute from "@/components/auth/PublicRoute";
import { AuthContainer } from "@/features/auth/container/AuthContainer";

export default function Home() {
  return (
   <>
   <PublicRoute>
      <AuthContainer />
      </PublicRoute>
   </>
  );
}
