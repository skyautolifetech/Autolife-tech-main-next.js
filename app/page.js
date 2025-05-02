import Image from "next/image";
import Header from "./component/Header";
import About from "./component/About";
import Automation from "./component/Automation";
import Floorplan from "./component/Floorplan";
import DashBoard from "./component/DashBoard";
import WhyAutomate from "./component/WhyAutomate";
import AutomationLifestyle from "./component/AutomationLifestyle";
import Services from "./component/Services";
import Brands from "./component/Brands";
import ProblemsSolutions from "./component/ProblemsSolutions";
import YourHome from "./component/YourHome";
import OtherProblem from "./component/OtherProblem";
import Footer from "./component/Footer";
import WhatsAppButton from "./component/WhatsAppButton";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden scroll-smooth">

        <Header />
        {/* <About /> */}
        <Automation />
        <Floorplan />
        <DashBoard />
        {/* <WhyAutomate /> */}
        <AutomationLifestyle />
        {/* <Services /> */}

        {/* <ProblemsSolutions /> */}
        {/* <YourHome /> */}
        <OtherProblem />
        <Brands />
        {/* <ContactForm /> */}
        <Footer />
        <WhatsAppButton />

      </div>
    </>
  );
}

