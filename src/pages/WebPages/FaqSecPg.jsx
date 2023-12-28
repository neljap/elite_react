import {useEffect, useState} from "react";
import FaqHeroSection from "../../components/HeroSections/FaqHeroSection";
import FaqSection from "../../components/WebSections/FaqSection";
import FooterS from "../../components/WebSections/FooterS";
import SubFooter from "../../components/WebSections/SubFooter";
import SpinnerLoad from "../SpinnerLoad";
const FaqSecPg = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <SpinnerLoad />
      ) : (
        <div>
          <FaqHeroSection />
          <FaqSection />
          <SubFooter />
          <FooterS />
        </div>
      )}
    </div>
  );
};

export default FaqSecPg;
