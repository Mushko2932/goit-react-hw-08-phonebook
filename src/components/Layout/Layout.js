import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { LayoutMain } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <LayoutMain>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutMain>
    </>
  );
};

export default Layout;
