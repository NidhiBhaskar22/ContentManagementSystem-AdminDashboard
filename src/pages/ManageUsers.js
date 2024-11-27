import React, { useState } from "react";
import "./ManageUsers.css";

const ManageUsers = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", contact: "123-456-7890", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Editor", contact: "987-654-3210", status: "Inactive" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com", role: "Viewer", contact: "555-123-4567", status: "Active" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Viewer",
    contact: "",
    status: "Active",
  });

  // Group users by role and status
  const getUsersCountByRole = (role) => {
    return users.filter(user => user.role === role).length;
  };

  const getUsersCountByStatus = (status) => {
    return users.filter(user => user.status === status).length;
  };

  // Open the modal with selected user details
  const handleEdit = (user) => {
    setCurrentUser({ ...user }); // Clone the user object
    setIsModalOpen(true); // Open modal
  };

  // Handle saving the updated user details
  const handleSave = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === currentUser.id ? currentUser : user
      )
    );
    setIsModalOpen(false); // Close modal
  };

  // Handle input change in the edit modal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  // Handle delete functionality
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Open the add user modal
  const handleAddUser = () => {
    setIsAddModalOpen(true);
  };

  // Handle saving a new user
  const handleSaveNewUser = () => {
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setIsAddModalOpen(false);
    setNewUser({ name: "", email: "", role: "Viewer", contact: "", status: "Active" });
  };

  // Handle input change in the add user modal
  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="manage-users">
      <h1>Manage Users</h1>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.contact}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-user-btn" onClick={handleAddUser}>
          Add User
        </button>
      </div>

      {/* User Statistics Section */}
      <div className="user-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>
        <div className="stat-card">
          <h3>Active Users</h3>
          <p>{getUsersCountByStatus('Active')}</p>
        </div>
        <div className="stat-card">
          <h3>Inactive Users</h3>
          <p>{getUsersCountByStatus('Inactive')}</p>
        </div>
        <div className="stat-card">
          <h3>Admin Users</h3>
          <p>{getUsersCountByRole('Admin')}</p>
        </div>
        <div className="stat-card">
          <h3>Editor Users</h3>
          <p>{getUsersCountByRole('Editor')}</p>
        </div>
        <div className="stat-card">
          <h3>Viewer Users</h3>
          <p>{getUsersCountByRole('Viewer')}</p>
        </div>
      </div>

      {/* Modal for editing user details */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit User</h2>
            <form className="edit-form">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={currentUser.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={currentUser.email}
                  onChange={handleChange}
                />
              </label>
              <label>
                Role:
                <select
                  name="role"
                  value={currentUser.role}
                  onChange={handleChange}
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </label>
              <label>
                Contact:
                <input
                  type="text"
                  name="contact"
                  value={currentUser.contact}
                  onChange={handleChange}
                />
              </label>
              <label>
                Status:
                <select
                  name="status"
                  value={currentUser.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
            </form>
            <div className="modal-buttons">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button
                className="cancel-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for adding a new user */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New User</h2>
            <form className="edit-form">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleNewUserChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleNewUserChange}
                />
              </label>
              <label>
                Role:
                <select
                  name="role"
                  value={newUser.role}
                  onChange={handleNewUserChange}
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </label>
              <label>
                Contact:
                <input
                  type="text"
                  name="contact"
                  value={newUser.contact}
                  onChange={handleNewUserChange}
                />
              </label>
              <label>
                Status:
                <select
                  name="status"
                  value={newUser.status}
                  onChange={handleNewUserChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
            </form>
            <div className="modal-buttons">
              <button className="save-btn" onClick={handleSaveNewUser}>
                Add User
              </button>
              <button
                className="cancel-btn"
                onClick={() => setIsAddModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
