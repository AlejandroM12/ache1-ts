import {
  AnimationHome,
  ContentLeft,
  Header,
  Logo,
  Navbar,
  TitleHome,
} from "@/components";
import { Container } from "@/layouts";
import logoHome from "@/assets/logo/ache1-logo.svg";

const Home = () => {
  return (
    <Container>
      <Header transparent={true} height={100}>
        <Logo logo={logoHome} />
        <Navbar />
      </Header>

      <ContentLeft>
        <TitleHome />
        <AnimationHome />
      </ContentLeft>
    </Container>
  );
};

export default Home;
