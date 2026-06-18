import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
import Roles from "./pages/roles/roles";

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

    <Route 
    path="/roles" 
    element={<Roles />} 
    
    />

   </Routes>

  </BrowserRouter>

 );

}

export default App;
