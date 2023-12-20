import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {queryClient} from "./lib/react-query.js";
import {QueryClientProvider} from "react-query";
import {UserPage} from "./features/user/page/UserPage.jsx";

function App() {

  return (
      <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
    <Route path={'/'} element={<UserPage/>} />


    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
