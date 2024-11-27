import React, { useState } from "react";
import "./ManageRoles.css";

const ManageRoles = () => {
  // List of permission categories
  const permissionCategories = [
    "Content Management",
    "User Management",
    "Media Management",
    "Settings",
    "Comment Management",
    "Logs",
  ];

  // Sample roles with permissions
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", description: "Full access to the system", permissions: ["Content Management", "User Management", "Media Management", "Settings", "Comment Management", "Logs"] },
    { id: 2, name: "Editor", description: "Can edit content", permissions: ["Content Management", "Media Management"] },
    { id: 3, name: "Viewer", description: "Can only view content", permissions: ["Content Management"] },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRole, setCurrentRole] = useState({ name: "", description: "", permissions: [] });

  // Add or edit role modal handling
  const handleAddRole = () => {
    setCurrentRole({ name: "", description: "", permissions: [] });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleEditRole = (role) => {
    setCurrentRole(role);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleSaveRole = () => {
    const selectedPermissions = currentRole.permissions;

    if (isEditing) {
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role.id === currentRole.id ? { ...currentRole, permissions: selectedPermissions } : role
        )
      );
    } else {
      const newId = roles.length ? roles[roles.length - 1].id + 1 : 1;
      setRoles([ ...roles, { ...currentRole, id: newId, permissions: selectedPermissions } ]);
    }

    setIsModalOpen(false);
  };

  const handlePermissionChange = (permission) => {
    const updatedPermissions = currentRole.permissions.includes(permission)
      ? currentRole.permissions.filter((perm) => perm !== permission)
      : [...currentRole.permissions, permission];

    setCurrentRole({ ...currentRole, permissions: updatedPermissions });
  };

  // Helper function to display permissions based on category
  const displayPermissions = (permissions) => {
    return permissionCategories.map((category) => {
      return permissions.includes(category) ? category : null;
    }).filter(Boolean).join(", ");
  };

  return (
    <div className="role-management">
      <h1>Manage Roles</h1>

      <div className="roles-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>{role.description}</td>
                <td>{displayPermissions(role.permissions)}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEditRole(role)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDeleteRole(role.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-role-btn" onClick={handleAddRole}>Add Role</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{isEditing ? "Edit Role" : "Add New Role"}</h2>
            <form className="role-form">
              <label>
                Role Name:
                <input
                  type="text"
                  value={currentRole.name}
                  onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
                />
              </label>
              <label>
                Description:
                <textarea
                  value={currentRole.description}
                  onChange={(e) => setCurrentRole({ ...currentRole, description: e.target.value })}
                />
              </label>
              <label>Permissions:</label>
              <div className="permissions">
                {permissionCategories.map((permission) => (
                  <div key={permission} className="permission-checkbox">
                    <input
                      type="checkbox"
                      id={permission}
                      checked={currentRole.permissions.includes(permission)}
                      onChange={() => handlePermissionChange(permission)}
                    />
                    <label htmlFor={permission}>{permission}</label>
                  </div>
                ))}
              </div>
            </form>
            <div className="modal-buttons">
              <button className="save-btn" onClick={handleSaveRole}>Save</button>
              <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageRoles;
