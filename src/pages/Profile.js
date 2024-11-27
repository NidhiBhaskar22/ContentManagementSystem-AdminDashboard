import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Profile.css';

const Profile = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle logout confirmation
  const handleLogout = () => {
    // Clear any authentication state if needed (e.g., clear session, tokens)
    // For now, we simply navigate to the login page after logout.
    
    // Example of clearing localStorage (if you're using localStorage to store session info):
    // localStorage.removeItem('userSession'); // Uncomment if using localStorage for sessions

    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Your Profile</h1>
      </div>
      <div className="profile-details">
        <div className="profile-info">
          <h3>Personal Information</h3>
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <p>Role: Admin</p>
        </div>

        <div className="profile-settings">
          <h3>Account Settings</h3>
          <button>Edit Profile</button>
          <button>Change Password</button>
        </div>

        {/* Logout Button */}
        <div className="logout-section">
          <button
            className="logout-btn"
            onClick={() => setShowLogoutModal(true)} // Show logout confirmation modal
          >
            Logout
          </button>
        </div>

        {/* Logout Confirmation Modal */}
        {showLogoutModal && (
          <div className="logout-modal">
            <h3>Are you sure you want to log out?</h3>
            <button className="confirm-logout" onClick={handleLogout}>
              Yes, Logout
            </button>
            <button
              className="cancel-logout"
              onClick={() => setShowLogoutModal(false)} // Close the modal without logging out
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
