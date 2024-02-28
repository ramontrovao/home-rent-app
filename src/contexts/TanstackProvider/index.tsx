import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { TanstackProviderProps } from './types';

const queryClient = new QueryClient();

export const TanstackProvider = ({ children }: TanstackProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
