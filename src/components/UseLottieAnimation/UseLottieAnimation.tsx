import { useLottie } from "lottie-react";

interface UseLottieAnimationInterface {
  animationData: any;
  loop: boolean;
  autoplay: boolean;
  width?: number | string;
  height?: number | string;
}
function UseLottieAnimation({
  animationData,
  loop,
  autoplay,
  width,
  height,
}: UseLottieAnimationInterface) {
  const { View } = useLottie({
    animationData: animationData,
    loop: loop,
    autoplay: autoplay,
    width: width,
    height: height,
  });
  return View;
}

export default UseLottieAnimation;
