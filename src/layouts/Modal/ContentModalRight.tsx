interface ContentModalRightInterface {
  children: React.ReactNode;
}
const ContentModalRight = ({ children }: ContentModalRightInterface) => {
  return (
    <div className="container-rightside-modal">
      <div className="content-modal-rightside">{children}</div>
    </div>
  );
};

export default ContentModalRight;
