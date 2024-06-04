import Banner from "../../component/banner/banner.component";
import ProducList from "../../component/product-list/product-list.component";
import USP from "../../component/usp/usp.component";
import Topbar from "../../component/topbar/topbar.component";
import FooterSection from "../../component/footer/footer.component";

const LandingPage = () => {
  return (
    <div>
      <meta name="keywords" content="custom tshirt, custom fit shirt, bespoke fashion, cotton tshirt" />
      <Topbar/>
      <Banner />
      <USP />
      {/* <CategoriesSlider /> */}
      <ProducList />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
