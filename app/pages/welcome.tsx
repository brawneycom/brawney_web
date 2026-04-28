import { useNavigate } from "@remix-run/react";
import { css } from "styled-system/css";

const styles = {
  page: css({
    position: "fixed",
    inset: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bg: "gray.950",
    _light: { bg: "gray.50" },
  }),
  inner: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10",
    maxWidth: "sm",
    width: "full",
    px: "6",
  }),
  brand: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3",
  }),
  logo: css({
    width: "14",
    height: "14",
    borderRadius: "2xl",
    bg: "blue.600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2xl",
    fontWeight: "bold",
    color: "white",
    letterSpacing: "tight",
  }),
  title: css({
    fontSize: "3xl",
    fontWeight: "bold",
    color: "gray.50",
    letterSpacing: "tight",
    _light: { color: "gray.900" },
  }),
  tagline: css({
    fontSize: "sm",
    color: "gray.400",
    textAlign: "center",
    lineHeight: "relaxed",
    _light: { color: "gray.500" },
  }),
  divider: css({
    width: "full",
    height: "px",
    bg: "gray.800",
    _light: { bg: "gray.200" },
  }),
  actions: css({
    display: "flex",
    flexDirection: "column",
    gap: "3",
    width: "full",
  }),
  btn_primary: css({
    width: "full",
    py: "3",
    borderRadius: "lg",
    fontSize: "sm",
    fontWeight: "semibold",
    cursor: "pointer",
    transition: "all",
    transitionDuration: "fast",
    border: "none",
    bg: "blue.600",
    color: "white",
    _hover: { bg: "blue.500" },
    _active: { bg: "blue.700" },
  }),
  btn_secondary: css({
    width: "full",
    py: "3",
    borderRadius: "lg",
    fontSize: "sm",
    fontWeight: "semibold",
    cursor: "pointer",
    transition: "all",
    transitionDuration: "fast",
    bg: "transparent",
    color: "gray.300",
    border: "1px solid token(colors.gray.700)",
    _hover: { bg: "gray.800", color: "gray.100" },
    _active: { bg: "gray.700" },
    _light: {
      color: "gray.600",
      borderColor: "gray.300",
      _hover: { bg: "gray.100", color: "gray.900" },
    },
  }),
};

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>B</div>
          <h1 className={styles.title}>Brawney</h1>
          <p className={styles.tagline}>
            Track your progress. Stay consistent. Get stronger.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.actions}>
          <button className={styles.btn_primary} onClick={() => navigate("/login")}>
            Log in
          </button>
          <button className={styles.btn_secondary} onClick={() => navigate("/signup")}>
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}
