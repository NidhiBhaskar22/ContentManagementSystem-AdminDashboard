import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ManageUsers from './pages/ManageUsers';
import ManageRoles from './pages/ManageRoles';
import ManagePermissions from './pages/ManagePermissions';
import Activities from './pages/Activities';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage'; // Import the Login Page
import './App.css';

const fetchRoles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Admin", count: 5 },
        { name: "Editor", count: 10 },
        { name: "Viewer", count: 20 },
      ]);
    }, 1000);
  });
};

const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "John Doe", role: "Admin", status: "Active" },
        { name: "Jane Smith", role: "Editor", status: "Inactive" },
      ]);
    }, 1000);
  });
};

function App() {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login

  // Fetch roles and users when the component mounts
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const rolesData = await fetchRoles();
        const usersData = await fetchUsers();
        setRoles(rolesData);
        setUsers(usersData);
        setRecentActivity([
          "User 'John Doe' added as Admin",
          "Content 'How to Manage Users' published",
          "Role 'Editor' updated by Admin",
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Handler functions for CRUD operations - unchanged
  const handleAddUser = async (user) => { /* unchanged */ };
  const handleUpdateUser = async (userId, updatedUser) => { /* unchanged */ };
  const handleDeleteUser = async (userId) => { /* unchanged */ };
  const handleAddRole = async (role) => { /* unchanged */ };
  const handleUpdateRole = async (roleId, updatedRole) => { /* unchanged */ };
  const handleDeleteRole = async (roleId) => { /* unchanged */ };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);  // Set the login state to true after a successful login
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Login page route */}
          <Route
            path="/"
            element={<LoginPage onLoginSuccess={handleLoginSuccess} />} // Pass the login handler to LoginPage
          />
          {/* Protected routes (Main App content) */}
          <Route
            path="/*"
            element={
              isLoggedIn ? (
                <>
                  <Navbar />
                  <Sidebar />
                  <div className="main-content">
                    <Routes>
                      <Route
                        path="/admin-dashboard"
                        element={<AdminDashboard recentActivity={recentActivity} />}
                      />
                      <Route
                        path="/manage-users"
                        element={<ManageUsers users={users} onAddUser={handleAddUser} onUpdateUser={handleUpdateUser} onDeleteUser={handleDeleteUser} />}
                      />
                      <Route
                        path="/manage-roles"
                        element={<ManageRoles roles={roles} onAddRole={handleAddRole} onUpdateRole={handleUpdateRole} onDeleteRole={handleDeleteRole} />}
                      />
                      <Route path="/manage-permissions" element={<ManagePermissions />} />
                      <Route path="/activities" element={<Activities recentActivity={recentActivity} />} />
                      <Route path="/profile" element={<Profile />} /> {/* Profile Page Route */}
                    </Routes>
                  </div>
                </>
              ) : (
                <p>Please log in to access the application.</p> // Simple message if not logged in
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
