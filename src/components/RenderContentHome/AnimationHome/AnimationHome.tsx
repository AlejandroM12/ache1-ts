import { UseLottieAnimation } from "@/components";
import animationHome from "@/assets/lotties/animation-home.json";

const AnimationHome = () => {
  return (
    <div className="content-left">
      <UseLottieAnimation
        animationData={animationHome}
        autoplay={true}
        loop={true}
      />
    </div>
  );
};

export default AnimationHome;
