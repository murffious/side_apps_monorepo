import { Outlet, createRootRoute, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { MainLayout } from '@/components/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: '/welcome' });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <MainLayout />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
