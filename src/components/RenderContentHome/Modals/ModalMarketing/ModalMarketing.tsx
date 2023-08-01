import { Button, UseLottieAnimation } from "@/components";
import animationMarketing from "@/assets/modalsLotties/marketing-full.json";
import { ContentModalLeft, ContentModalRight, Modal } from "@/layouts/Modal";
import { MailTo } from "@/components/MailTo";

interface ModalMarketingInterface {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalMarketing = ({
  isOpen,
  onRequestClose,
}: ModalMarketingInterface) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ContentModalLeft>
        <div className="container-description-marketing-mobile">
          <div className="lottie-marketing-mobile">
            <UseLottieAnimation
              animationData={animationMarketing}
              autoplay={true}
              loop={true}
            />
          </div>
          <h3 className="modal-marketing-title-left">Marketing</h3>
          <p className="modal-marketing-description-left span">
            Nothing makes sense if we don't make the public see it. That is why
            it <span>is so important that you add a market strategy</span> to
            your venture or company.
          </p>
          <p className="modal-marketing-description-left">
            We have the best team of analysts and designers who will create a
            tailored strategy for your company.
          </p>
          <MailTo email="hi@ache1.com" subject="Marketing Grow Up">
            <Button buttonLabel="Grow up now" />
          </MailTo>
        </div>
      </ContentModalLeft>
      <ContentModalRight>
        <div className="container-marketing-modal-right">
          <div className="content-marketing-modal-right">
            <p className="content-marketing-modal-right-title">
              What do we do?
            </p>
            <ul className="container-list-marketing">
              <li className="list-marketing">
                <p>Survey: Interaction, brand awareness, traffic.</p>
              </li>
              <li className="list-marketing">
                <p>
                  Set up platforms from scratch: Facebook Business, Google
                  Analytics.
                </p>
              </li>
              <li className="list-marketing">
                <p>Install Pixeles and code UA.</p>
              </li>
              <li className="list-marketing">
                <p>Monthly Campaings.</p>
              </li>
              <li className="list-marketing">
                <p>Bi-weekly or weekly dynamic reports</p>
              </li>
            </ul>
          </div>
          <div className="content-marketing-modal-right">
            <p className="content-marketing-modal-right-title">
              What are our goals?
            </p>
            <ul className="container-list-marketing">
              <li className="list-marketing">
                <p>Increase followers</p>
              </li>
              <li className="list-marketing">
                <p>Generate direct inquires to activate sales.</p>
              </li>
              <li className="list-marketing">
                <p>Make the brands recognized in the market.</p>
              </li>
            </ul>
          </div>
        </div>
        <button className="close-modal" onClick={onRequestClose}>
          X
        </button>
      </ContentModalRight>
    </Modal>
  );
};

export default ModalMarketing;
