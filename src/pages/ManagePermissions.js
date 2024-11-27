import React, { useState } from "react";
import "./ManagePermissions.css";

// Sample permissions
const permissionsList = [
  { id: 1, category: "Content Management", permissions: ["Create Content", "Edit Content", "Delete Content", "Publish Content", "View Content"] },
  { id: 2, category: "User Management", permissions: ["Create User", "Edit User", "Delete User", "Assign Roles", "Ban User"] },
  { id: 3, category: "Media Management", permissions: ["Upload Media", "Edit Media", "Delete Media", "View Media"] },
  { id: 4, category: "Settings", permissions: ["Manage Settings", "Manage Plugins", "Manage Themes"] },
  { id: 5, category: "Comment Management", permissions: ["Manage Comments", "View Comments"] },
  { id: 6, category: "Logs", permissions: ["View Logs"] },
];

const ManagePermissions = () => {
  const [permissions, setPermissions] = useState(permissionsList);
  const [isExpanded, setIsExpanded] = useState(null); // To manage the open/close state of accordion sections
  const [newPermission, setNewPermission] = useState(""); // Input for adding new permission

  // Toggle accordion section
  const toggleAccordion = (id) => {
    setIsExpanded(isExpanded === id ? null : id);
  };

  // Add new permission
  const handleAddPermission = (categoryId) => {
    if (newPermission.trim()) {
      const updatedPermissions = permissions.map((category) =>
        category.id === categoryId
          ? { ...category, permissions: [...category.permissions, newPermission] }
          : category
      );
      setPermissions(updatedPermissions);
      setNewPermission(""); // Reset the input field
    }
  };

  // Delete permission
  const handleDeletePermission = (categoryId, permissionToDelete) => {
    const updatedPermissions = permissions.map((category) =>
      category.id === categoryId
        ? {
            ...category,
            permissions: category.permissions.filter(
              (permission) => permission !== permissionToDelete
            ),
          }
        : category
    );
    setPermissions(updatedPermissions);
  };

  return (
    <div className="permissions-management">
      <h1>Manage Permissions</h1>
      
      {/* Permissions Accordion */}
      <div className="accordion">
        {permissions.map((category) => (
          <div key={category.id} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleAccordion(category.id)}>
              <h3>{category.category}</h3>
              <span>{isExpanded === category.id ? "-" : "+"}</span>
            </div>
            {isExpanded === category.id && (
              <div className="accordion-body">
                <ul>
                  {category.permissions.map((permission) => (
                    <li key={permission} className="permission-item">
                      <span>{permission}</span>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeletePermission(category.id, permission)}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="add-permission">
                  <input
                    type="text"
                    placeholder="New Permission"
                    value={newPermission}
                    onChange={(e) => setNewPermission(e.target.value)}
                  />
                  <button
                    className="add-btn"
                    onClick={() => handleAddPermission(category.id)}
                  >
                    Add Permission
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePermissions;
