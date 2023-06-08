interface ContainerInterface {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerInterface) => {
  return (
    <div className="site">
      <div className="sitebackground">
        <div className="container leftside"></div>
        <div className="container rightside"></div>
      </div>
      <div className="content_container">{children}</div>
    </div>
  );
};

export default Container;
