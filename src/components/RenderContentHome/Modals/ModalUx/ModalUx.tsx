import { Button, UseLottieAnimation } from "@/components";
import uxAnimation from "@/assets/modalsLotties/modal-ux.json";
import uxProcess from "@/assets/modalsImg/ux-process.svg";
import arrowRight from "@/assets/modalsImg/arrow-modal.svg";
import { ContentModalLeft, ContentModalRight, Modal } from "@/layouts/Modal";
import { MailTo } from "@/components/MailTo";

interface ModalUxInterface {
  isOpen: boolean;
  onRequestClose: () => void;
}
const ModalUx = ({ isOpen, onRequestClose }: ModalUxInterface) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ContentModalLeft>
        <div className="container-description-modal-ux">
          <div className="lottie-modal-ux">
            <UseLottieAnimation
              animationData={uxAnimation}
              autoplay={true}
              loop={true}
            />
          </div>
          <h3 className="modal-ux-title-left">Ux</h3>
          <p className="modal-ux-description-left">
            How many times do we see that when launching our MVP we{" "}
            <span>missed solving essential things</span> for its correct use?
          </p>
          <p className="modal-ux-description-left">
            This happens to us by rushing and skipping stages. The most
            important is the <span>usability analysis stage.</span>{" "}
          </p>
          <p className="modal-ux-description-left">
            If you want your <span>application to be successful</span>, you have
            to spend the necessary time on ux design.
          </p>
          <MailTo email="hi@ache1.com" subject="Ux Project">
            <Button buttonLabel="I want to start" />
          </MailTo>
        </div>
      </ContentModalLeft>
      <ContentModalRight>
        <h3 className="modal-title-ux-right">Ux Process</h3>
        <div className="container-modal-img-ux-right">
          <img src={uxProcess} alt="ux design" className="ux-modal-img" />
        </div>
        <img src={arrowRight} className="arrow-modal" alt="icon arrow" />
        <button className="close-modal" onClick={onRequestClose}>
          X
        </button>
      </ContentModalRight>
    </Modal>
  );
};

export default ModalUx;
