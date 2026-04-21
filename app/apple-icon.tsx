import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

const CANVAS = 180;
const IMG = 228;

export const size = { width: CANVAS, height: CANVAS };
export const contentType = "image/png";

export default async function AppleIcon() {
  const buf = await readFile(path.join(process.cwd(), "public", "stattewordmark.png"));
  const src = `data:image/png;base64,${buf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: CANVAS,
          height: CANVAS,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#ffffff",
        }}
      >
        <img
          alt=""
          src={src}
          width={IMG}
          height={IMG}
          style={{
            flexShrink: 0,
            objectFit: "contain",
          }}
        />
      </div>
    ),
    { width: CANVAS, height: CANVAS },
  );
}
