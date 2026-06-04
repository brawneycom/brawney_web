import { useNavigate } from "@remix-run/react";
import { SignupComponent } from "@bd-shared-ui/auth/signup";
import { brawneyConfig } from "@bd-shared-ui/themes";
import { useAuth } from "~/contexts";

export function SignUpScreen() {
  const navigate = useNavigate();
  const { fetch: refetchMe } = useAuth();

  return (
    <SignupComponent
      config={brawneyConfig}
      onSuccess={() => {
        refetchMe();
        navigate("/");
      }}
      onLoginClick={() => navigate("/login")}
      onGoogleClick={() => {
        // TODO: wire Google OAuth
      }}
    />
  );
}
