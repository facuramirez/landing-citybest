/* global jarallax */
import dynamic from "next/dynamic";

const Content = dynamic(() => import("./content"), { ssr: false });

export default function Home() {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : <Content />}
    </div>
  );
}
