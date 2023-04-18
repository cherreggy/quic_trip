import { Spin } from "antd";
import { Suspense, lazy } from "react";
const Inn = lazy(() => import("./inn"));

export default function Home() {
  return (
    <Suspense fallback={<Spin />}>
      <Inn />
    </Suspense>
  );
}
