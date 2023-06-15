interface ContentLeftInterface {
  children: React.ReactNode;
}

const ContentLeft = ({ children }: ContentLeftInterface) => {
  return (
    <div className="container leftside width-left">
      <div className="content height-left">{children}</div>
    </div>
  );
};
export default ContentLeft;
