import { ImageResponse } from "next/og";
import { getLogoDataUri } from "@/lib/logo-data-uri";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const logo = getLogoDataUri();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
        }}
      >
        <img src={logo} width={32} height={32} alt="" />
      </div>
    ),
    { ...size }
  );
}
