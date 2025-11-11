import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUserInfo } from '../../utils/localStorage';
import { clearToken } from '../../store/authSlice';
import { removeToken as removeTokenLS } from '../../utils/localStorage';
import { getUserInfo } from '../../utils/localStorage';
import { useEffect, useState } from 'react';
export const AdminHeader = () => {
    const [isToggle, setIsToggle] = useState(false);
    const userInfo = getUserInfo();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        removeTokenLS();
        removeUserInfo();
        dispatch(clearToken());
        navigate('/login');
    };

    const handleToggle = () => {
        setIsToggle(!isToggle);
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `./js/dashboard.js`; // Use PUBLIC_URL for correct path
      script.id = 'my-custom-script'; // Assign an ID for easy reference
      document.body.appendChild(script);
    };

    useEffect(() => {
      loadScript();
    }, []);

    return <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <button type="button" className="text-lg text-gray-900 font-semibold sidebar-toggle">
                <i className="ri-menu-line"></i>
            </button>

            <ul className="ml-auto flex items-center">
                <li className="dropdown ml-3">
                    <button type="button" className="dropdown-toggle flex items-center" onClick={handleToggle}>
                        <div className="flex-shrink-0 w-10 h-10 relative">
                            <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                                <img className="w-8 h-8 rounded-full" src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg" alt=""/>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-2 md:block text-left">
                            <h2 className="text-sm font-semibold text-gray-800">{userInfo?.firstName} {userInfo?.lastName}</h2>
                            <p className="text-xs text-gray-500">{userInfo?.userRole}</p>
                        </div>                
                    </button>
                    <ul className={`dropdown-menu absolute shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[200px] ${isToggle ? '' : 'hidden'}`}>
                        <li>
                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Profile</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Settings</a>
                        </li>
                        <li>
                            <form method="POST" action="">
                                <a role="menuitem" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                                    onClick={(evt)=> {
                                        evt.preventDefault();
                                        handleLogout();
                                    }}>
                                    Log Out
                                </a>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>;
};