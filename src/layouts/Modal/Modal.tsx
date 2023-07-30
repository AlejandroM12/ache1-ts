import Modal from "react-modal";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    zIndex: "900",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    background: "transparent",
    border: "none",
    borderRadius: "0",
  },
};

Modal.setAppElement("#root");
interface FullScreenModalInterface {
  isOpen: any;
  onRequestClose: any;
  children: React.ReactNode;
}
const FullScreenModal = ({
  isOpen,
  onRequestClose,
  children,
}: FullScreenModalInterface) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0, 0, 0, 0.8)",
          zIndex: 1000,
        },
        content: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "static",
          top: "auto",
          left: "auto",
          right: "auto",
          bottom: "auto",
          border: "none",
          background: "transparent",
          overflow: "visible",
          WebkitOverflowScrolling: "touch",
          borderRadius: 0,
          padding: 0,
          maxWidth: "100%",
          width: "100%",
          height: "100%",
        },
      }}
    >
      {children}
    </Modal>
  );
};
export default FullScreenModal;
