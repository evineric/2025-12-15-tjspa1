import React, { lazy, Suspense, type JSX } from "react";

const LazyFlexV1Grow = lazy(() => import("../src/components/FlexV1Grow/FlexV1Grow"));

const FlexV1Grow = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyFlexV1Grow {...props} />
  </Suspense>
);

export default FlexV1Grow;
