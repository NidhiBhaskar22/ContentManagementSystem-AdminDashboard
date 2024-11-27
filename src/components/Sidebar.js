// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/manage-users">Manage Users</Link></li>
        <li><Link to="/manage-roles">Manage Roles</Link></li>
        <li><Link to="/manage-permissions">Manage Permissions</Link></li>
        <li><Link to="/activities">Activities</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
