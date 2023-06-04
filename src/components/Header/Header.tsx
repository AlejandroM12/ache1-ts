interface HeaderInterface {
  transparent: boolean;
  height: number;
  children: React.ReactNode;
}

const Header = ({ transparent, height, children }: HeaderInterface) => {
  const headerStyles = {
    backgroundColor: transparent
      ? "transparent"
      : "linear-gradient(180deg, #0055FF 0%, #6C63FF 100%);",
    height: height ? `${height}px` : "100px",
  };

  const headerClass = `header ${
    transparent ? "transparent" : "background-header-sections"
  }`;

  return (
    <header style={headerStyles} className={headerClass}>
      {children}
    </header>
  );
};

export default Header;
