import { Logo } from "@/components";
import logoHome from "@/assets/logo/ache1-logo.svg";
interface ContentModalLeftInterface {
  children: React.ReactNode;
}

const ContentModalLeft = ({ children }: ContentModalLeftInterface) => {
  return (
    <div className="container-leftside-modal">
      <div className="content-modal-leftside">
        <div className="header-modal">
          <Logo logo={logoHome} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ContentModalLeft;
