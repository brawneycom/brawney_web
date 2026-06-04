import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { useAuth } from "~/contexts";
import { LandingScreen } from "~/pages/landing/landing";

export default function HomeRoute() {
  const { me, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && me) {
      navigate("/dashboard", { replace: true });
    }
  }, [me, loading, navigate]);

  return <LandingScreen />;
}
