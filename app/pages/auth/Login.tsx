import { useNavigate } from "@remix-run/react";
import { LoginComponent } from "@bd-shared-ui/auth/login";
import { brawneyConfig } from "@bd-shared-ui/themes";
import { useAuth } from "~/contexts";

export function LoginScreen() {
  const navigate = useNavigate();
  const { fetch: refetchMe } = useAuth();

  return (
    <LoginComponent
      config={brawneyConfig}
      onSuccess={() => {
        refetchMe();
        navigate("/");
      }}
      onSignupClick={() => navigate("/signup")}
      onForgotPasswordClick={() => navigate("/forgot-password")}
      onGoogleClick={() => {
        // TODO: wire Google OAuth
      }}
    />
  );
}
