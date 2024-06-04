import FooterSection from "../../component/footer/footer.component";
import Loginregister from '../../component/account-component/login.component';
import Topbar from '../../component/topbar/topbar.component';

const LoginPage = () => {
    return (
        <div>
            <Topbar />
            <Loginregister />
            <FooterSection />
        </div>
    )
}

export default LoginPage;