
import "./Page.css";


import CallToAction from "../components/callToActions/CallToAction";
import Footer from "../components/Footer";
import Section1 from "../components/section1/Section1";
import Header from "../components/Header";
import Section2 from "../components/section2/Section2";
import CallToAction2 from "../components/callToActions/CallToAction2";

const App = () => { 

  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <CallToAction />
      <CallToAction2 />
      <Footer /> 
    </>
  );
};

export default App; 

