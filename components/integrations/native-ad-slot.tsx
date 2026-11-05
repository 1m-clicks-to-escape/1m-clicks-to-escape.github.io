import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  return <aside className="ad-slot ad-native" aria-label="Advertisement">
    <p className="ad-label">Advertisement</p>
    <NativeAdClient
      scriptUrl="https://bauval.org/21/6fd796539e83855b113c759828a99498"
      containerId="container-6fd796539e83855b113c759828a99498"
    />
  </aside>;
}
