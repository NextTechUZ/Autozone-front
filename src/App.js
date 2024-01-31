import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "./layouts/AppLayout";
import { store } from './store'
import { Provider } from 'react-redux';

const queryClient = new QueryClient()
function App() {
  return (
           <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                  <AppLayout />
              </QueryClientProvider>
            </Provider>
  );
}

export default App;
