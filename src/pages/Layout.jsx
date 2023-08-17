import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <div>
            <div style={{ backgroundImage: `linear-gradient(to top, #30cfd0 0%, #330867 100%)`, height: `25vh` }}>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};
export default Layout;
