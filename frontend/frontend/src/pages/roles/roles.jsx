import { useEffect, useState } from "react";
import "./roles.css"; // 1. Fixed: Un-commented and imported the styles

function Roles() {
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState("");

  // Helper function to fetch roles from the backend
  const fetchRoles = () => {
    fetch("http://localhost:3001/api/auth/roles", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setRoles(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        setRoles([]);
      });
  };

  // Fetch data on initial component mount
  useEffect(() => {
    fetchRoles();
  }, []);

  const addRole = async () => {
    if (!roleName.trim()) {
      alert("Please enter a role name");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/auth/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ role_name: roleName }),
      });

      if (res.ok) {
        setRoleName(""); // Clear input box after adding
        fetchRoles();    // 2. Fixed: Refresh the list from the server immediately
      }
    } catch (err) {
      console.error("Failed to add role:", err);
    }
  };

  return (
    // 3. Fixed: Applied all matching CSS class names here
    <div className="roles-container">
      <h2>Roles Management</h2>

      <div className="role-form">
        <input
          placeholder="Role Name"
          value={roleName} // Bound value to state so it clears properly
          onChange={(e) => setRoleName(e.target.value)}
        />
        <button onClick={addRole}>Add Role</button>
      </div>

      <div className="role-list">
        {roles.map((role) => (
          <div className="role-card" key={role.id || role.role_name}>
            {role.role_name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roles;