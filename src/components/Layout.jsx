import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';

 const Layout = () => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 16px' }}>

       <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Layout;



