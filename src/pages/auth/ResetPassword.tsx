export const ResetPassword = () => {

    return <div className="flex items-center justify-center">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 w-full">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reset Password</h2>
                <form className="space-y-4 text-left">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                    type="password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="••••••••"
                    required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input 
                    type="confirm_password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="••••••••"
                    required
                    />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-black font-medium rounded-lg">
                    Save Password
                </button>
                </form>
            </div>
        </div>
</div>;
};
