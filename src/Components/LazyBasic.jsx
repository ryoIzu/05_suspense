import { Suspense ,lazy } from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

//遅延ロード
const LazyButton = lazy(() =>sleep(2000).then(() => import('./LazyButton')));

export default function LazyBasic() {
  return(
    <Suspense fallback = {<p>Now loading...</p>}>
      <LazyButton />
    </Suspense> 
  );
}