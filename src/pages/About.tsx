import { Header, Logo, Navbar } from "@/components";
import logoSection from "@/assets/logo/logo-white.svg";

const About = () => {
  return (
    <div>
      <Header transparent={false} height={100}>
        <Logo logo={logoSection} />
        <Navbar />
      </Header>
    </div>
  );
};

export default About;
