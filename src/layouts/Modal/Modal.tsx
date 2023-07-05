import Modal from "react-modal";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100vh",
  },
};

Modal.setAppElement("#yourAppElement");
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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {children}
    </Modal>
  );
};
export default FullScreenModal;
