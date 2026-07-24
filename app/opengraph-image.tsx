import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";
import { getLogoDataUri } from "@/lib/logo-data-uri";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = getLogoDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(212,175,55,0.25) 0%, rgba(5,5,5,0) 60%)",
        }}
      >
        <img src={logo} width={110} height={110} alt="" style={{ marginBottom: 8 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 60, height: 1, background: "rgba(212,175,55,0.6)" }} />
          <div
            style={{
              fontSize: 90,
              fontWeight: 700,
              letterSpacing: 12,
              color: "#F7D774",
              fontFamily: "serif",
            }}
          >
            VYRONIX
          </div>
          <div style={{ width: 60, height: 1, background: "rgba(212,175,55,0.6)" }} />
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 22,
            letterSpacing: 10,
            color: "#A0A0A0",
            textTransform: "uppercase",
          }}
        >
          Lab
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 32,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
