"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { assetPath } from "@/lib/urls";

export function ResponsiveBanner() {
  const hostRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    // The cancelled first effect in Strict Mode must never request an ad.
    queueMicrotask(() => {
      if (cancelled) return;
      const mobile = window.innerWidth < 768;
      const frame = document.createElement("iframe");
      frame.title = "Advertisement";
      frame.width = mobile ? "320" : "728";
      frame.height = mobile ? "50" : "90";
      // An isolated document preserves the official synchronous GET CODE and
      // document.write behavior without letting it replace the React document.
      frame.src = assetPath(`/ads/${mobile ? "mobile" : "desktop"}.html`);
      host.appendChild(frame);
    });
    return () => {
      cancelled = true;
      host.replaceChildren();
    };
  }, [pathname]);

  return <aside className="ad-slot ad-banner" aria-label="Advertisement" data-banner-ad-slot>
    <p className="ad-label">Advertisement</p>
    <div ref={hostRef} className="ad-banner-host" />
  </aside>;
}
