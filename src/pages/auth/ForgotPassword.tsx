import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
    const navigate = useNavigate();
    const submitResetPassword = () => {
        navigate("/reset_password");
    };

    return <div className="flex items-center justify-center">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 w-full">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Forgot Password</h2>
                
                <form className="space-y-4 text-left">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="your@email.com"
                    required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 hidden"/>
                        <span className="ml-2 text-sm text-gray-600">&nbsp;</span>
                    </label>
                    <a href="/login" className="text-sm text-indigo-600 hover:text-indigo-500">Sign In?</a>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-black font-medium rounded-lg" onClick={submitResetPassword}>
                    Reset Password
                </button>
                </form>
            </div>
        </div>
</div>;
};
