"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function NativeAdClient({ scriptUrl, containerId }: { scriptUrl: string; containerId: string }) {
  const pathname = usePathname();
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      const container = document.createElement("div");
      container.id = containerId;
      host.appendChild(container);

      const script = document.createElement("script");
      script.async = true;
      script.src = scriptUrl;
      script.dataset.cfasync = "false";
      script.dataset.gameWikiNativeAd = containerId;
      host.insertBefore(script, container);
    });

    return () => {
      cancelled = true;
      host.replaceChildren();
    };
  }, [containerId, scriptUrl, pathname]);

  return <div ref={hostRef} data-native-ad-slot />;
}
