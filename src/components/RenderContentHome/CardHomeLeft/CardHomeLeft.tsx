import { useState } from "react";
import { UseLottieAnimation } from "@/components";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import dots from "@/assets/Icons/dots.svg";
import webAppsAnimation from "@/assets/lotties/web-apps.json";
import appsMobileAnimation from "@/assets/lotties/apps-mobile-home.json";
import bestWebsitesAnimation from "@/assets/lotties/best-websites.json";

const CardHomeLeft = () => {
  const [btnState, setBtnState] = useState(1);

  const handleClick = (newState: number) => {
    setBtnState(newState);
  };

  const upHandler = () => {
    if (btnState >= 1) {
      setBtnState((prevBtnState) =>
        prevBtnState === 3 ? 1 : prevBtnState + 1
      );
    }
  };

  const downHandler = () => {
    if (btnState >= 1) {
      setBtnState((prevBtnState) =>
        prevBtnState === 1 ? 3 : prevBtnState - 1
      );
    }
  };

  return (
    <>
      <div className="dots-left">
        {[1, 2, 3].map((state) => (
          <div className="dots-icon-left" key={state}>
            <img
              src={dots}
              alt="button icon"
              className={btnState === state ? "active-left" : ""}
              onClick={() => handleClick(state)}
            />
          </div>
        ))}
      </div>
      <ReactScrollWheelHandler
        upHandler={() => downHandler()}
        downHandler={() => upHandler()}
      >
        {btnState === 1 && (
          <div
            className="content-card-left content-web-apps"
            data-aos="fade-up"
          >
            <div className="content-lottie-webApps">
              <UseLottieAnimation
                animationData={webAppsAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
            <h1 className="card-title-left">Web apps</h1>
            <p className="card-description-left">
              You need to organize your business; nothing better than having
              your own online system, in which your entire team has access.
            </p>
            {/* <Button buttonLabel="Biggest systems" onClick={openModalWebApp} /> */}
          </div>
        )}

        {btnState === 2 && (
          <div
            className="content-card-left content-apps-mobile"
            data-aos="fade-up"
          >
            <h1 className="card-title-left">Apps mobile</h1>
            <p className="card-description-left">
              It makes your app unique. From usability analysis to testing to
              launch your MVP.
            </p>
            {/* <Button buttonLabel="Our tecnologies" onClick={openModalApp} /> */}
            <div className="content-lottie-apps-mobile">
              <UseLottieAnimation
                animationData={appsMobileAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
          </div>
        )}
        {btnState === 3 && (
          <div
            className="content-card-left content-best-websites-mobile"
            data-aos="fade-up"
          >
            <div className="content-lottie-web-sites-mobile">
              <UseLottieAnimation
                animationData={bestWebsitesAnimation}
                autoplay={true}
                loop={true}
              />
            </div>
            <h1 className="card-title-left">Best</h1>
            <h1 className="card-title-left">Websites</h1>
            <p className="card-description-left ">
              Is your website still not responsive? Today 80% of accesses to
              your website are through mobile devices. To make your website
              accessible to any user, it must be adaptable to all devices.
            </p>
            {/* <MailTo email="hi@ache1.com" subject="New Website">
              <Button buttonLabel="I want to start" />
            </MailTo> */}
          </div>
        )}
      </ReactScrollWheelHandler>
    </>
  );
};

export default CardHomeLeft;
