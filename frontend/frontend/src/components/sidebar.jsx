import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

  <h3>Admin Panel</h3>

  <a href="/dashboard">Dashboard</a>
  <a href="/users">Users</a>
  <a href="/admins">Admins</a>
  <a href="/roles">Roles</a>
  <a href="/settings">Settings</a>

</div>
  );
}

export default Sidebar;