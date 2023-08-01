import { Button, UseLottieAnimation } from "@/components";
import animationBranding from "@/assets/modalsLotties/branding-full.json";
import { ContentModalLeft, ContentModalRight, Modal } from "@/layouts/Modal";
import { MailTo } from "@/components/MailTo";

interface ModalBrandingInterface {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalBranding = ({ isOpen, onRequestClose }: ModalBrandingInterface) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ContentModalLeft>
        <div className="container-description-branding-left">
          <div className="lottie-branding-modal">
            <UseLottieAnimation
              animationData={animationBranding}
              autoplay={true}
              loop={true}
            />
          </div>
          <h3 className="modal-branding-title-left">Branding</h3>
          <p className="modal-branding-description-left span">
            <span>What is it? What is it for? Why is it so necessary?</span>
          </p>
          <p className="modal-branding-description-left">
            When starting a new business, it is required to create a specific
            identity for that product, which is what will identify it and make
            it stand out in the market.
          </p>
          <p className="modal-branding-description-left">
            Because when you create a logo or brand, you are considering
            specific fonts and color palette for that logo.
          </p>
          <MailTo email="hi@ache1.com" subject="New Branding">
            <Button buttonLabel="I want to start" />
          </MailTo>
        </div>
      </ContentModalLeft>
      <ContentModalRight>
        <h3 className="modal-title-branding-right">Brand Process</h3>
        <div className="container-modal-branding-description-right">
          <div className="container-modal-branding-description-first">
            <div className="content-description-branding">
              <p className="modal-branding-description-title">
                <span className="modal-branding-count">1</span>Call to Start
              </p>
              <p className="modal-branding-description">
                We get to know each other and set the objectives of your brand.
              </p>
            </div>
            <div className="content-description-branding">
              <p className="modal-branding-description-title">
                <span className="modal-branding-count">2</span>Work plan
              </p>
              <p className="modal-branding-description">
                For us it is important that you know our design process day by
                day. That is why we send you a schedule with the dates of each
                task, so you know what we are working on.
              </p>
            </div>
            <div className="content-description-branding">
              <p className="modal-branding-description-title">
                <span className="modal-branding-count">3</span>Brand Survey
              </p>
              <p className="modal-branding-description">
                The brand survey is a tool that we use to get to know each other
                a little more. It is considered before starting the design of
                your brand identity. It is a very important kick for us, helping
                us to reach our short-term goals.
              </p>
            </div>
          </div>
          <div className="container-modal-branding-description-two">
            <div className="content-description-branding">
              <p className="modal-branding-description-title">
                <span className="modal-branding-count">4</span>Firsts propouse
              </p>
              <p className="modal-branding-description">
                Finding the desired path is not something simple. That is why at
                first we will present you with several proposals, of which the
                selected one will give the foot to your complete graphic system.
              </p>
            </div>
            <div className="content-description-branding">
              <p className="modal-branding-description-title">
                <span className="modal-branding-count">5</span>Biggest system
              </p>
              <p className="modal-branding-description">
                We develop your complete graphic system. Brand, brand
                applications, user manuals, mockups.
              </p>
            </div>
            <div className="content-description-branding">
              <p className="modal-branding-description-title">
                <span className="modal-branding-count">6</span>All ready to rock
              </p>
              <p className="modal-branding-description">
                All set to hit the slopes. We deliver your brand manual and
                editable brand files ready to use in any project from now on.
              </p>
            </div>
          </div>
        </div>
        <button className="close-modal" onClick={onRequestClose}>
          X
        </button>
      </ContentModalRight>
    </Modal>
  );
};

export default ModalBranding;
