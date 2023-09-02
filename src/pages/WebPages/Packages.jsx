import {useEffect, useState} from "react";
import PackHeroSec from "../../components/HeroSections/PackHeroSec";
import PricingSec from "../../components/WebSections/PricingSec";
import FooterS from "../../components/WebSections/FooterS";
import SubFooter from "../../components/WebSections/SubFooter";
import SpinnerLoad from "../SpinnerLoad";

const Packages = () => {
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
          <PackHeroSec />
          <PricingSec />
          <SubFooter />
          <FooterS />
        </div>
      )}
    </div>
  );
};

export default Packages;
