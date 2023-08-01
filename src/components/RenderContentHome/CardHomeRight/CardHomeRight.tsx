import { useState } from "react";
import {
  Button,
  ModalBranding,
  ModalMarketing,
  ModalSocialMedia,
  ModalUx,
  UseLottieAnimation,
} from "@/components";
import dotsWhite from "@/assets/Icons/dots-white.svg";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { options, OptionData } from "./data";

const CardHomeRight = () => {
  const [btnDot, setBtnDot] = useState(1);
  const [modalOpen, setModalOpen] = useState({
    ux: false,
    branding: false,
    "social media": false,
    marketing: false,
  });

  const handleDotClick = (index: number) => {
    setBtnDot(index);
  };

  const handleScrollUp = () => {
    setBtnDot((prevBtnDot) => (prevBtnDot === 1 ? 4 : prevBtnDot - 1));
  };

  const handleScrollDown = () => {
    setBtnDot((prevBtnDot) => (prevBtnDot === 4 ? 1 : prevBtnDot + 1));
  };

  const handleModalOpen = (modalName: string) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const handleModalClose = (modalName: string) => {
    setModalOpen((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  return (
    <>
      <div className="dots-right">
        {options.map((option: OptionData) => (
          <div className="dots-icon-right" key={option.btnDot}>
            <img
              src={dotsWhite}
              alt="button icon"
              className={btnDot === option.btnDot ? "active-right" : ""}
              onClick={() => handleDotClick(option.btnDot)}
            />
          </div>
        ))}
      </div>
      <ReactScrollWheelHandler
        upHandler={handleScrollUp}
        downHandler={handleScrollDown}
      >
        {options.map(
          (option) =>
            btnDot === option.btnDot && (
              <div className="content-card-right" key={option.btnDot}>
                <div className={`content-lottie-${option.title.toLowerCase()}`}>
                  <UseLottieAnimation
                    animationData={option.animationData}
                    autoplay={true}
                    loop={true}
                  />
                </div>
                <h1 className="card-title-right">{option.title}</h1>
                <p className="card-description-right">{option.description}</p>
                <Button
                  buttonLabel={option.buttonLabel}
                  onClick={() => handleModalOpen(option.title.toLowerCase())}
                />
              </div>
            )
        )}
      </ReactScrollWheelHandler>
      {modalOpen.ux && (
        <ModalUx
          isOpen={modalOpen.ux}
          onRequestClose={() => handleModalClose("ux")}
        />
      )}
      {modalOpen.branding && (
        <ModalBranding
          isOpen={modalOpen.branding}
          onRequestClose={() => handleModalClose("branding")}
        />
      )}
      {modalOpen["social media"] && (
        <ModalSocialMedia
          isOpen={modalOpen["social media"]}
          onRequestClose={() => handleModalClose("social media")}
        />
      )}
      {modalOpen.marketing && (
        <ModalMarketing
          isOpen={modalOpen.marketing}
          onRequestClose={() => handleModalClose("marketing")}
        />
      )}
    </>
  );
};

export default CardHomeRight;
