import React, { lazy, Suspense, type JSX } from "react";

const LazyTemplateName = lazy(() => import("../src/components/TemplateName/TemplateName"));

const TemplateName = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
