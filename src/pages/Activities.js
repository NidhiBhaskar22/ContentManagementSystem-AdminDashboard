// src/pages/Activities.js
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';
import './Activities.css';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 10;

  useEffect(() => {
    // Simulate fetching activities
    const fetchedActivities = [
      { id: 1, user: 'John Doe', action: 'Updated Role', timestamp: '2024-11-27', type: 'update', details: 'User updated to Admin' },
      { id: 2, user: 'Jane Smith', action: 'Deleted Post', timestamp: '2024-11-26', type: 'delete', details: 'Post ID 56 deleted' },
      { id: 3, user: 'John Doe', action: 'Created Post', timestamp: '2024-11-25', type: 'create', details: 'Created a new blog post' },
      // Add more activities as needed
    ];
    setActivities(fetchedActivities);
  }, []);

  // Filter and search activities
  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || activity.type === filter;
    return matchesSearch && matchesFilter;
  });

  // Paginate activities
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = filteredActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="activities-page">
      <div className="activities-header">
        <h1>Activity Log</h1>

        {/* Search and Filter */}
        <div className="activities-search-filter">
          <input
            type="text"
            placeholder="Search Activities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filter-dropdown">
            <FaFilter />
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
              <option value="all">All</option>
              <option value="create">Created</option>
              <option value="update">Updated</option>
              <option value="delete">Deleted</option>
            </select>
          </div>
        </div>
      </div>

      {/* Activity List */}
      <div className="activity-list">
        {currentActivities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <div className="activity-header">
              <strong>{activity.user}</strong> - <span>{activity.action}</span>
              <span className="activity-timestamp">{activity.timestamp}</span>
            </div>
            <p>{activity.details}</p>
            <div className="activity-actions">
              <button className="edit-btn">
                <FaEdit /> Edit
              </button>
              <button className="delete-btn">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="page-number">{currentPage} of {totalPages}</span>
        <button
          className="page-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Activities;
