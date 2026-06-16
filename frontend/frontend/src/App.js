import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";

function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route
      path="/"
      element={<Register />}
    />

    <Route
      path="/login"
      element={<Login />}
    />

    <Route
      path="/dashboard"
      element={<Dashboard />}
    />

   </Routes>

  </BrowserRouter>

 );

}

export default App;
