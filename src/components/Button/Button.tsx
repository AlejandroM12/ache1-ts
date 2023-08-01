interface ButtonInterface {
  onClick?: () => void;
  buttonLabel: string;
}
const Button = ({ buttonLabel, onClick }: ButtonInterface) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {buttonLabel}
      </button>
    </>
  );
};

export default Button;
