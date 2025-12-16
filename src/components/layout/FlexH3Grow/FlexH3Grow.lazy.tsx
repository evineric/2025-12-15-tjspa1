import React, { lazy, Suspense, type JSX } from "react";

const LazyFlexH3Grow = lazy(() => import("../src/components/FlexH3Grow/FlexH3Grow"));

const FlexH3Grow = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyFlexH3Grow {...props} />
  </Suspense>
);

export default FlexH3Grow;
