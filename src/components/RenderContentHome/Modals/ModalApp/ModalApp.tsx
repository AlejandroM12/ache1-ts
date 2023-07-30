import { UseLottieAnimation } from "@/components";
import animationAppMobile from "@/assets/modalsLotties/apps-mobile.json";
import nodeLogo from "@/assets/modalsImg/node.svg";
import reactLogo from "@/assets/modalsImg/react.svg";
import netLogo from "@/assets/modalsImg/net.svg";
import iosLogo from "@/assets/modalsImg/ios.svg";
import androidLogo from "@/assets/modalsImg/android.svg";
import awsLogo from "@/assets/modalsImg/aws.svg";
import firebaseLogo from "@/assets/modalsImg/firebase.svg";
import { ContentModalLeft, ContentModalRight, Modal } from "@/layouts/Modal";

interface ModalAppInterface {
  isOpen: any;
  onRequestClose: any;
}
const ModalApp = ({ isOpen, onRequestClose }: ModalAppInterface) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ContentModalLeft>
        <div className="container-description-modal-app-mobile">
          <div className="lottie-modal-app-mobile">
            <UseLottieAnimation
              animationData={animationAppMobile}
              autoplay={true}
              loop={true}
            />
          </div>
          <h3 className="modal-app-title-left">Apps mobile</h3>
          <p className="modal-app-description-left">
            We are ready to create your app{" "}
            <span>in any language you want.</span> Respecting the latest trends
            in technologies.
          </p>
          <p className="modal-app-description-left">
            We focus on building{" "}
            <span>high-quality, high-performance custom solutions.</span> We
            create your custom app from design, strategy to its correct
            development.
          </p>
        </div>
      </ContentModalLeft>
      <ContentModalRight>
        <h3 className="modal-title-app-right">We believe in this languages</h3>
        <div className="container-modal-app-img-first">
          <div className="modal-node-logo">
            <img src={nodeLogo} className="app-modal-node-img" alt="nodejs" />
            <p>Node JS</p>
          </div>
          <div className="modal-react-native-logo">
            <img
              src={reactLogo}
              className="app-modal-react-native-img"
              alt="reactjs"
            />
            <p>React Native</p>
          </div>
          <div className="modal-net-logo">
            <img src={netLogo} className="app-modal-net-img" alt=".net" />
            <p>.NET</p>
          </div>
        </div>
        <div className="container-modal-app-img-two">
          <div className="content-modal-app-ios">
            <img src={iosLogo} className="app-modal-img" alt="ios" />
            <p>iOS</p>
          </div>
          <div className="content-modal-app-android">
            <img src={androidLogo} className="app-modal-img" alt="android" />
            <p>Android</p>
          </div>
          <div className="content-modal-app-aws">
            <img src={awsLogo} className="app-modal-img" alt="aws" />
            <p>Amazon</p>
          </div>
          <div className="content-modal-app-firebase">
            <img src={firebaseLogo} className="app-modal-img" alt="firebase" />
            <p>Firebase</p>
          </div>
        </div>
        <button className="close-modal" onClick={onRequestClose}>
          X
        </button>
      </ContentModalRight>
    </Modal>
  );
};

export default ModalApp;
