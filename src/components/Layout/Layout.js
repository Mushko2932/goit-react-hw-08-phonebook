import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </AppBar>
    </>
  );
};

export default Layout;
