import { useNavigate } from "@remix-run/react";
import { s } from "./landing.styles";

let chartIdCounter = 0;

const MockChart = () => {
  const id = `chartGrad-${chartIdCounter++}`;
  return (
    <svg viewBox="0 0 320 80" fill="none" style={{ width: "100%", height: "80px" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 60 C40 55 60 40 100 35 C140 30 160 45 200 30 C240 15 280 20 320 10"
        stroke="#3B82F6"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0 60 C40 55 60 40 100 35 C140 30 160 45 200 30 C240 15 280 20 320 10 L320 80 L0 80 Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
};

const features = [
  {
    icon: "⚖️",
    iconBg: "#14532D",
    title: "Weight",
    desc: "Bodyweight, body fat, and hydration — the metrics that tell you whether you're actually progressing.",
    stat: "± 0.1",
    statLabel: "kg resolution",
  },
  {
    icon: "🧬",
    iconBg: "#1E3A5F",
    title: "Body composition",
    desc: "Multi-metric body tracking so you can see what's changing, not just how much you weigh.",
    stat: "3",
    statLabel: "core metrics",
  },
  {
    icon: "❤️",
    iconBg: "#4C0519",
    title: "VO2max",
    desc: "VO2max percentile and aerobic capacity so you know where you stand and where you're headed.",
    stat: "46+",
    statLabel: "percentile tracked",
  },
];

export function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div className={s.page}>
      {/* Nav */}
      <nav className={s.nav}>
        <div className={s.navLogo}>
          <div className={s.navLogoIcon}>B</div>
          <span className={s.navLogoText}>brawney</span>
        </div>

        <div className={s.navLinks}>
          {["Workouts", "Pricing", "Roadmap", "Blog"].map((link) => (
            <button key={link} className={s.navLink}>{link}</button>
          ))}
        </div>

        <div className={s.navActions}>
          <button className={s.navSignIn} onClick={() => navigate("/login")}>
            Sign in
          </button>
          <button className={s.navCta} onClick={() => navigate("/signup")}>
            Get started →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroContent}>
          <div className={s.heroBadge}>
            <div className={s.heroBadgeDot} />
            Track everything that matters
          </div>

          <h1 className={s.heroHeadline}>
            Track the{" "}
            <span className={s.heroAccent}>numbers</span>
            {" "}that actually move.
          </h1>

          <p className={s.heroBody}>
            Weight. Body composition. VO2max. Brawney measures the metrics that
            tell you whether you're actually progressing — and shows you the
            trend, not just today's number.
          </p>

          <div className={s.heroCtas}>
            <button
              className={s.heroPrimary}
              onClick={() => navigate("/signup")}
            >
              Join the waitlist →
            </button>
            <button
              className={s.heroSecondary}
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>
        </div>

        <div className={s.heroVisual}>
          <div className={s.mockCard}>
            <div className={s.mockCardHeader}>
              <div className={s.mockCardDots}>
                {["#EF4444", "#FBBF24", "#34D399"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: c,
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: "11px", color: "#52525B" }}>brawney — body tracker</span>
              <div style={{ width: "60px" }} />
            </div>

            <div className={s.mockCardBody}>
              <div className={s.mockMetricsRow}>
                <div className={s.mockMetric}>
                  <div className={s.mockMetricLabel}>Body weight</div>
                  <div className={s.mockMetricValue}>
                    85.0
                    <span className={s.mockMetricUnit}> kg</span>
                  </div>
                  <MockChart />
                  <div className={s.mockMetricTrend}>↓ 1.2 kg · Last 30 days</div>
                </div>

                <div className={s.mockMetric}>
                  <div className={s.mockMetricLabel}>Body fat</div>
                  <div className={s.mockMetricValue}>
                    18.4
                    <span className={s.mockMetricUnit}> %</span>
                  </div>
                  <MockChart />
                  <div className={s.mockMetricTrend}>↓ 0.8% · Last 30 days</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                {[
                  { label: "VO2max", value: "46", unit: "ml/kg" },
                  { label: "Hydration", value: "58", unit: "%" },
                  { label: "Streak", value: "12", unit: "days" },
                ].map(({ label, value, unit }) => (
                  <div
                    key={label}
                    style={{
                      backgroundColor: "#09090B",
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #27272A",
                    }}
                  >
                    <div style={{ fontSize: "10px", color: "#71717A", marginBottom: "4px" }}>
                      {label}
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "bold", color: "#F4F4F5", letterSpacing: "-0.025em" }}>
                      {value}
                      <span style={{ fontSize: "10px", color: "#71717A", fontWeight: "normal" }}> {unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={s.features}>
        <div className={s.featuresHeader}>
          <div className={s.featuresEyebrow}>Why brawney</div>
          <h2 className={s.featuresHeadline}>Three categories. Zero noise.</h2>
          <p className={s.featuresSubtext}>
            We isolate the three areas that matter to athletes who care about data —
            the ones that move the needle on your performance, and your sense of it.
          </p>
        </div>

        <div className={s.featureCards}>
          {features.map(({ icon, iconBg, title, desc, stat, statLabel }) => (
            <div key={title} className={s.featureCard}>
              <div
                className={s.featureIcon}
                style={{ backgroundColor: iconBg }}
              >
                {icon}
              </div>
              <div className={s.featureTitle}>{title}</div>
              <div className={s.featureDesc}>{desc}</div>
              <div className={s.featureStat}>
                <span className={s.featureStatValue}>{stat}</span>
                <span className={s.featureStatLabel}>{statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={s.ctaSection}>
        <h2 className={s.ctaHeadline}>
          One radial dial.
          <br />
          One smooth log.
        </h2>
        <p className={s.ctaBody}>
          Capture a number in two seconds with the radial dial, or fine-tune with
          the full entry form. Add it when you feel it — it doesn't need to be
          perfect. No friction, no drama.
        </p>
        <button className={s.ctaButton} onClick={() => navigate("/signup")}>
          Join the waitlist →
        </button>
      </section>

      {/* Footer */}
      <footer className={s.footer}>
        <div className={s.footerBrand}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "5px",
              backgroundColor: "#3B82F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            B
          </div>
          <span className={s.footerText}>© 2026 Brawney. All rights reserved.</span>
        </div>

        <div className={s.footerLinks}>
          {["Privacy", "Terms", "Support"].map((l) => (
            <button key={l} className={s.footerLink}>{l}</button>
          ))}
        </div>
      </footer>
    </div>
  );
}
