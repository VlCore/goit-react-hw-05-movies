import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { LayoutWrapper } from './Layout.styled'
import { WrapperOutlet } from './Layout.styled'

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <WrapperOutlet>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
    </LayoutWrapper>
  );
};