import { Fragment } from "react";
import { AdminSideNav } from "../../../components/admin/SideNav";
import { AdminHeader } from "../../../components/admin/Header";
import { Dashboard } from "../../../components/dashboard/dashboard";

export const OwnerDashboard = () => {
    return <Fragment>
        <AdminSideNav />
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
        {/* end sidenav */}
    
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
            {/* navbar */}
            <AdminHeader />
            {/* end navbar */}
    
          {/* Content */}
            <Dashboard />
        </main>
        </Fragment>;
};