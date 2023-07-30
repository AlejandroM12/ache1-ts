import animationUx from "@/assets/lotties/ux.json";
import animationBranding from "@/assets/lotties/branding.json";
import socialMediaAnimation from "@/assets/lotties/social-media.json";
import marketingAnimation from "@/assets/lotties/marketing.json";

 const options = [
    {
      btnDot: 1,
      animationData: animationUx,
      title: "Ux",
      description:
        "We carry out a survey of the market and the competition. We plan and design the correct flow for your website to be successful.",
        buttonLabel: "How do we work?"
    },
    {
      btnDot: 2,
      animationData: animationBranding,
      title: "Branding",
      description:
        "Design your brand identity from scratch. Create a unique language that identifies you in the market.",
        buttonLabel: "I want to start"
    },
    {
      btnDot: 3,
      animationData: socialMediaAnimation,
      title: "Social Media",
      description:
        "We perform a competitive analysis to create your brand strategy on social networks. Guidelines for communication, promotion and user monitoring.",
        buttonLabel: "Put your brand up!"
    },
    {
      btnDot: 4,
      animationData: marketingAnimation,
      title: "Marketing",
      description:
        "Use our services and build a solid digital presence across digital marketing, creative web design...",

        buttonLabel: "Grow up now"
    },
  ];
  export default options;