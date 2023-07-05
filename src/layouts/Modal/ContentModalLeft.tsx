interface ContentModalLeftInterface {
  children: React.ReactNode;
}

const ContentModalLeft = ({ children }: ContentModalLeftInterface) => {
  return (
    <div className="container-leftside-modal">
      <div className="content-modal-leftside">{children}</div>
    </div>
  );
};

export default ContentModalLeft;
