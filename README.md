# Project Overview
The Admin Dashboard is designed to provide a seamless and functional interface for managing RBAC operations. The project focuses on creating an intuitive and aesthetically pleasing admin dashboard that includes features like user management, role management, and permission handling.

## Features
### Login with Role Selection:

Upon accessing the application, users are prompted to log in by selecting a role from the available options:
Admin: Redirects to the Admin Dashboard.
Other roles (e.g., Editor, Author, Visitor) redirect to their respective placeholder dashboards (in progress).
Authentication is not yet implemented; any valid email/password combination is accepted.
###Admin Dashboard:

The primary view for administrators, featuring navigation to various RBAC-related pages:
#### Manage Users: Add, edit, delete users, and assign roles or manage their status (e.g., Active/Inactive).
#### Manage Roles: Define, edit, and delete roles, and associate them with specific permissions.
#### Manage Permissions: Assign, modify, and display permissions for roles in a clear and understandable way.
#### Activities: View logs or records of user and role-related activities (mock data for now).
#### Profile Icon:Clicking on the profile icon opens a Profile Details page (currently showing dummy data).
Includes a Logout Button for signing out of the session.
#### Dynamic and Modular UI:

The design is responsive and adapts seamlessly to various devices and screen sizes.
Modular components ensure clarity and easy extensibility.
### Setup Instructions
#### Clone the Repository

git clone https://github.com/NidhiBhaskar22/ContentManagementSystem-AdminDashboard.git
cd ContentManagementSystem-AdminDashboard

Install Dependencies

npm install
Run the Application

npm start

#### Access the Application

Open your browser and navigate to http://localhost:3000.


## User Flow
### Login:

Enter any valid email ID and password.
Select a role (e.g., Admin) to proceed.
### Admin Dashboard:

### Navigate to Manage Users, Manage Roles, Manage Permissions, or Activities using the side navigation menu.
Explore features to view or modify user and role data.
### Profile and Logout:

### Click on the Profile Icon to view profile details (dummy data).
### Use the Logout Button to exit the application.

## Technologies Used
Frontend Framework: React
CSS Styling: Custom CSS for responsiveness and visual enhancements
Icons: React Icons for intuitive navigation
Routing: React Router for role-based navigation and modular page access
Mock Data/Logic: Simulated API calls and CRUD operations for users, roles, and permissions


## Future Enhancements

Authentication Implementation:

Add secure login and session management.
Validate email IDs and passwords against a backend service.
Dynamic API Integration:

Replace mock data with real-time API endpoints.
Fetch and update data from a secure backend.
Enhanced Features:

Add sorting, filtering, and search capabilities for users and roles.
Implement detailed activity logs.
Role-Specific Dashboards:

Build out complete dashboards for non-admin roles (Editor, Author, Visitor).
