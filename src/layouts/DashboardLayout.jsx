import { Outlet } from "react-router-dom";

import AdminNavber from '../components/admin/AdminNavber';

const DashboardLayout = () => {
    return (
        <div>
            <AdminNavber/>
            <Outlet/>
        </div>
    );
};

export default DashboardLayout;