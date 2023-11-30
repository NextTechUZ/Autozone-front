import AppLayout from "./layouts/AppLayout";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
 <AppLayout />
    </QueryClientProvider>
  );
}

export default App;
