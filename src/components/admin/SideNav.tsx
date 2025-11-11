import { useNavigate } from "react-router-dom";
import { Routes_Names } from "../../common/constants";
import { isAdmin, isCustomer, isOwner } from "../../utils/localStorage";

export const AdminSideNav = () => {
    const navigate = useNavigate();

    const dashboardRoute = () => {
        let route = Routes_Names.Admin_Dashboard;
        if (isAdmin()) {
            route = Routes_Names.Admin_Dashboard;
        } else if (isOwner()) {
            route = Routes_Names.Owner_Dashboard;
        } else if (isCustomer()) {
            route = Routes_Names.Customer_Dashboard;
        }
        return route;
    };

    const onRouteClick = (route: string) => {
        navigate(route);
    };

    return <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
        <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
            <h2 className="font-bold text-2xl">Billing <span className="bg-[#f84525] text-white px-2 rounded-md">APP</span></h2>
        </a>
        <ul className="mt-4">
            <span className="text-gray-400 font-bold">ADMIN</span>
            <li className="mb-1 group">
                <a href="javascript:void(0);" onClick={() => {
                    onRouteClick(dashboardRoute());
                }} className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                    <i className="ri-home-2-line mr-3 text-lg"></i>
                    <span className="text-sm">Dashboard</span>
                </a>
            </li>
            <li className="mb-1 group">
                <a href="javascript:void(0);" onClick={() => {
                    onRouteClick(Routes_Names.Customers);
                }} className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                    <i className='bx bx-user mr-3 text-lg'></i>                
                    <span className="text-sm">Users</span>
                </a>
            </li>
            <li className="mb-1 group">
                <a href="javascript:void(0);" onClick={() => {
                    onRouteClick(Routes_Names.Business);
                }} className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                    <i className='bx bx-user mr-3 text-lg'></i>                
                    <span className="text-sm">Business</span>
                </a>
            </li>
            <li className="mb-1 group">
                <a href="javascript:void(0);" onClick={() => {
                    onRouteClick(Routes_Names.Order);
                }} className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                    <i className='bx bx-list-ul mr-3 text-lg'></i>                
                    <span className="text-sm">Orders</span>
                </a>
            </li>
        </ul>
    </div>;
};