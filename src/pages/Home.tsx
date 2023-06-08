import { Header, Logo, Navbar } from "@/components";
import { Container } from "@/layouts";
import logoHome from "@/assets/logo/ache1-logo.svg";

const Home = () => {
  return (
    <Container>
      <Header transparent={true} height={100}>
        <Logo logo={logoHome} />
        <Navbar />
      </Header>
    </Container>
  );
};

export default Home;
