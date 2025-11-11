import { Routes, Route } from 'react-router-dom';
import PWABadge from './PWABadge.tsx'
import './App.css'
import { PageNotFound } from './pages/common/PageNotFound.tsx';
import { Login } from './pages/auth/Login.tsx';
import { Register } from './pages/auth/Register.tsx';
import { ForgotPassword } from './pages/auth/ForgotPassword.tsx';
import { ResetPassword } from './pages/auth/ResetPassword.tsx';

import { AdminDashboard } from './pages/dashboard/admin_dashboard/index.tsx';
import { DasboardCopy } from './pages/dashboard/admin_dashboard/dashboard-copy.tsx';
import { OwnerDashboard } from './pages/dashboard/owner_dashboard/index.tsx';
import { CustomerDashboard } from './pages/dashboard/customer_dashboard/index.tsx';
import ProtectedRoute from './components/ProtectedRoute';
import { Routes_Names } from './common/constants.ts';
import { BillingListPage } from './pages/users/index.tsx';
import { BusinessShopsPage } from './pages/business_shops/index.tsx';
import { OrdersListPage } from './pages/orders/index.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin_dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/owner_dashboard" element={<ProtectedRoute><OwnerDashboard /></ProtectedRoute>} />
        <Route path="/customer_dashboard" element={<ProtectedRoute><CustomerDashboard /></ProtectedRoute>} />
        <Route path={Routes_Names.Customers} element={<ProtectedRoute><BillingListPage /></ProtectedRoute>} />
        <Route path={Routes_Names.Business} element={<ProtectedRoute><BusinessShopsPage /></ProtectedRoute>} />
        <Route path={Routes_Names.Order} element={<ProtectedRoute><OrdersListPage /></ProtectedRoute>} />
        <Route path="/dashboard_copy" element={<ProtectedRoute><DasboardCopy /></ProtectedRoute>} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <PWABadge />
    </>
  )
}

export default App
