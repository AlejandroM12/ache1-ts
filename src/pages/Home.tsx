import { Header, Logo, Navbar } from "@/components";
import logoHome from "@/assets/logo/ache1-logo.svg";

const Home = () => {
  return (
    <div>
      <Header transparent={true} height={100}>
        <Logo logo={logoHome} />
        <Navbar />
      </Header>
    </div>
  );
};

export default Home;
