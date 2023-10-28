import { QueryClient, QueryClientProvider } from "react-query";
import AppLayout from "./layouts/AppLayout";

let queryClient=new QueryClient()
function App() {
  console.log(process.env.REACT_APP_API_URL)
  return(
    <QueryClientProvider client={queryClient}>
      <AppLayout />
    </QueryClientProvider>
  ) 
}

export default App;
