export const Login = () => {

    return <div className="flex items-center justify-center">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 w-full">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
                
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

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                    type="password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="••••••••"
                    required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="/forgot_password" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-black font-medium rounded-lg">
                    Sign In
                </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?&nbsp;
                <a href="/register" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
                </div>
            </div>
        </div>
</div>;
};
