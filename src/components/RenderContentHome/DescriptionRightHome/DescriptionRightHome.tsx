import arrow from "@/assets/Icons/arrow.svg";

interface DescriptionRightHomeInterface {
  handleInter: () => void;
  scrolled: boolean;
}
const DescriptionRightHome = ({
  handleInter,
  scrolled,
}: DescriptionRightHomeInterface) => {
  return (
    <div className="content-right">
      <h1>Have you</h1>
      <h1 className="content-right-title-two">got an idea?</h1>
      <p>Bring your idea, we make it happen.</p>
      <p>Bring your brand, we make it growth.</p>
      <h2 className="content-right-title-three">Let´s create</h2>
      <div
        style={{
          transitionDuration: "500ms",
          transform: `translateY(${scrolled ? 100 : 0}px)`,
          opacity: scrolled ? 0.5 : 1,
        }}
        className="content-down-arrow"
      >
        <button className="arrow-redir" onClick={handleInter}>
          <img src={arrow} alt="icon arrow" className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default DescriptionRightHome;
