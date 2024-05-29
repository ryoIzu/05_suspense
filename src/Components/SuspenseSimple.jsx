import { Suspense } from "react";
import ThrowPromise from "./ThrowPromise";

export default function SuspenseSimple() {
  return(
    <>
      <Suspense fallback={<p>Now loading....</p>}>
        <ThrowPromise />
      </Suspense>
    </>
  );
}