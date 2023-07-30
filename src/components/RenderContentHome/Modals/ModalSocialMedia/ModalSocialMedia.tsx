import { UseLottieAnimation } from "@/components";
import animationSocialMedia from "@/assets/modalsLotties/social-media-full.json";
import { ContentModalLeft, ContentModalRight, Modal } from "@/layouts/Modal";

interface ModalSocialMediaInterface {
  isOpen: any;
  onRequestClose: any;
}
const ModalSocialMedia = ({
  isOpen,
  onRequestClose,
}: ModalSocialMediaInterface) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <ContentModalLeft>
        <div className="container-description-social-media-left">
          <div className="lottie-social-media-modal">
            <UseLottieAnimation
              animationData={animationSocialMedia}
              autoplay={true}
              loop={true}
            />
          </div>
          <h3 className="modal-social-media-title-left">Social Media</h3>
          <p className="modal-social-media-description-left span">
            <span>We create your content and design it!</span>
          </p>
          <p className="modal-social-media-description-left">
            A feed that conveys the essence of your brand and is in every detail
            is what your networks need to stand out in the market.
          </p>
          <p className="modal-social-media-description-left">
            Do you need to carry out a solid brand strategy in networks for your
            company?
          </p>
          <p className="modal-social-media-description-left span">
            <span>Get in touch and find out about our plans.</span>
          </p>
        </div>
      </ContentModalLeft>
      <ContentModalRight>
        <p className="modal-title-social-media-right">
          I want a call to learn more
        </p>
        <div className="container-modal-social-media-description-right">
          <div className="container-card-social-media-right bassic">
            <p className="content-card-title-social-media-right">Basic Pack</p>
            <ul className="container-list-social-media">
              <li className="list-social-media">Content writing</li>
              <li className="list-social-media">
                3 post design and weekly stories
              </li>
              <li className="list-social-media">No posting on weekends</li>
              <li className="list-social-media">Schedule of dates</li>
            </ul>
          </div>
          <div className="container-card-social-media-right">
            <p className="content-card-title-social-media-right">
              Classic Pack
            </p>
            <ul className="container-list-social-media">
              <li className="list-social-media">
                Content creation and writing
              </li>
              <li className="list-social-media">
                Design 15 posts and monthly stories
              </li>
              <li className="list-social-media">Organic user tracking</li>
              <li className="list-social-media">Schedule of dates</li>
            </ul>
          </div>
          <div className="container-card-social-media-right full">
            <p className="content-card-title-social-media-right">Full Pack</p>
            <ul className="container-list-social-media">
              <li className="list-social-media">
                Content creation and writing
              </li>
              <li className="list-social-media">
                Design 15 posts and monthly stories
              </li>
              <li className="list-social-media">Organic user tracking</li>
              <li className="list-social-media">Responses to queries</li>
              <li className="list-social-media">Schedule of dates</li>
            </ul>
          </div>
          <div className="container-card-social-media-right">
            <p className="content-card-title-social-media-right">
              Premium Pack
            </p>
            <ul className="container-list-social-media">
              <li className="list-social-media">
                Content creation and writing
              </li>
              <li className="list-social-media">
                Design 30 posts and monthly stories
              </li>
              <li className="list-social-media">Organic user tracking</li>
              <li className="list-social-media">Responses to queries</li>
              <li className="list-social-media">Schedule of dates</li>
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

export default ModalSocialMedia;
