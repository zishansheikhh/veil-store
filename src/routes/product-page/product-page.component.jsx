import FooterSection from "../../component/footer/footer.component";
import ProductPageComponent from "../../component/product-page/product-slider.component";
import Topbar from "../../component/topbar/topbar.component";

const ProducPage = () => {
    return (
        <div>
            <Topbar />
            <div className="container-fluid m-auto">
                <ProductPageComponent />
            </div>
            <FooterSection />
        </div>
    )
}
    
export default ProducPage;