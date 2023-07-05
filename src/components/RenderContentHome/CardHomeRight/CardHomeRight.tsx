import { useState } from "react";
import Modal from "react-modal";
import { Button, UseLottieAnimation } from "@/components";
import dotsWhite from "@/assets/Icons/dots-white.svg";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import options from "./data";

const CardHomeRight = () => {
  const [btnDot, setBtnDot] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDotClick = (index: any) => {
    setBtnDot(index);
  };

  const handleScrollUp = () => {
    setBtnDot((prevBtnDot) => (prevBtnDot === 1 ? 4 : prevBtnDot - 1));
  };

  const handleScrollDown = () => {
    setBtnDot((prevBtnDot) => (prevBtnDot === 4 ? 1 : prevBtnDot + 1));
  };

  const handleModalOpen = (modalOpenFunc: any) => {
    modalOpenFunc();
    setModalOpen(true);
  };

  const handleModalClose = (modalCloseFunc: any) => {
    modalCloseFunc();
    setModalOpen(false);
  };

  return (
    <>
      <div className="dots-right">
        {options.map((option) => (
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
                  onClick={() => handleModalOpen(option.modalOpen)}
                />
              </div>
            )
        )}
      </ReactScrollWheelHandler>
      {options.map(
        (option) =>
          modalOpen &&
          btnDot === option.btnDot && (
            <Modal
              key={option.btnDot}
              isOpen={modalOpen}
              onRequestClose={() => handleModalClose(option.modalClose)}
            />
          )
      )}
    </>
  );
};

export default CardHomeRight;
