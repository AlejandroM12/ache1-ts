import { useState, useEffect } from "react";
import {
  AnimationHome,
  CardHomeLeft,
  CardHomeRight,
  ContentLeft,
  ContentRight,
  DescriptionRightHome,
  Header,
  Logo,
  Navbar,
  TitleHome,
} from "@/components";
import { Container } from "@/layouts";
import logoHome from "@/assets/logo/ache1-logo.svg";

const Home = () => {
  const [change, setChange] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleInter = () => {
    setScrolled(true);
    setTimeout(() => {
      setChange(true);
    }, 500);
  };
  const handleScroll = (e: any) => {
    const wDelta = e.wheelDelta < 0 ? "down" : "up";
    setScrolled(wDelta === "down");
    if (wDelta === "down") {
      setTimeout(() => {
        setChange(true);
        setScrolled(false);
      }, 3000);
    }
  };
  const changeHome = () => {
    setChange(false);
    // setOnSwipeHomeMobile(false);
  };
  useEffect(() => {
    window.addEventListener("mousewheel", handleScroll);
    return () => window.removeEventListener("mousewheel", handleScroll);
  }, []);
  return (
    <Container>
      <Header transparent={true} height={100}>
        <Logo logo={logoHome} onClick={() => setChange(false)} />
        <Navbar />
      </Header>

      <ContentLeft>
        <TitleHome />
        {!change ? (
          <>
            <AnimationHome />
          </>
        ) : (
          <CardHomeLeft />
        )}
      </ContentLeft>
      <ContentRight>
        {!change ? (
          <DescriptionRightHome handleInter={handleInter} scrolled={scrolled} />
        ) : (
          <CardHomeRight />
        )}
      </ContentRight>
    </Container>
  );
};

export default Home;
