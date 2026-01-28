import { Composition } from 'remotion';
import { DemoVideo } from './DemoVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="DemoVideo"
        component={DemoVideo}
        durationInFrames={360}
        fps={30}
        width={640}
        height={400}
      />
    </>
  );
};
