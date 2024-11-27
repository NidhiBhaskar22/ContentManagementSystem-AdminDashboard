import React, { useState, useEffect } from "react";
import { FaUsers, FaTools, FaRegComment, FaFileAlt, FaChartLine, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import the hook
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  // Simulating data fetching for roles, users, and activities
  useEffect(() => {
    setRoles([
      { name: "Admin", count: 5 },
      { name: "Editor", count: 10 },
      { name: "Viewer", count: 20 }
    ]);
    
    setUsers([
      { name: "John Doe", role: "Admin", status: "Active" },
      { name: "Jane Smith", role: "Editor", status: "Inactive" }
    ]);
    
    setRecentActivity([
      "User 'John Doe' added as Admin",
      "Content 'How to Manage Users' published",
      "Role 'Editor' updated by Admin"
    ]);
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="header">
        <h1>Welcome back, Admin!</h1>
        <p>Last login: 2024-11-27</p>
      </header>

      <div className="dashboard-overview">
        <div className="card role-summary">
          <h3><FaUsers /> Role Summary</h3>
          {roles.map((role) => (
            <div key={role.name} className="role-card">
              <p>{role.name}: <strong>{role.count}</strong> users</p>
            </div>
          ))}
        </div>
        
        <div className="card permissions-overview">
          <h3><FaTools /> Permissions Overview</h3>
          <p>Total Permissions Assigned: <strong>25</strong></p>
          <button onClick={() => navigate("/manage-permissions")}>View Permissions</button>
        </div>

        <div className="card recent-activity">
          <h3><FaChartLine /> Recent Activity</h3>
          <ul>
            {recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          <button onClick={() => navigate("/activities")}>View Logs</button>
        </div>
      </div>

      <div className="dashboard-stats">
        <div className="card user-stats">
          <h3><FaUsers /> User Statistics</h3>
          <p>Active Users: <strong>{users.filter(user => user.status === "Active").length}</strong></p>
          <p>Inactive Users: <strong>{users.filter(user => user.status === "Inactive").length}</strong></p>
          <button onClick={() => navigate("/manage-users")}>Manage Users</button>
        </div>

        <div className="card content-stats">
          <h3><FaFileAlt /> Content Management</h3>
          <p>Content Published: <strong>50</strong></p>
          <p>Pending Approval: <strong>10</strong></p>
          <button>View Content</button>
        </div>

        <div className="card media-stats">
          <h3><FaRegComment /> Media Stats</h3>
          <p>Media Files Uploaded: <strong>200</strong></p>
          <p>Pending Approval: <strong>5</strong></p>
          <button>Manage Media</button>
        </div>
      </div>

      <div className="dashboard-footer">
        <div className="notifications">
          <h3><FaCog /> System Notifications</h3>
          <ul>
            <li>System Update Scheduled for 12/01/2024</li>
            <li>5 users need role updates</li>
          </ul>
        </div>

        <div className="system-announcements">
          <h3><FaTools /> System Announcements</h3>
          <p>Version 2.0 update coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
