interface ContentLeftInterface {
  children: React.ReactNode;
}

const ContentLeft = ({ children }: ContentLeftInterface) => {
  return (
    <div className="container ">
      <div className="content ">{children}</div>
    </div>
  );
};
export default ContentLeft;
