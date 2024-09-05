// src/components/EventFilters.jsx
import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import styles from '../styles/App.module.css';

const EventFilters = () => {
  const { events } = useContext(EventContext);
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredEvents = categoryFilter
    ? events.filter((event) => event.category === categoryFilter)
    : events;

  return (
    <div className={styles.filters}>
      <select value={categoryFilter} onChange={handleFilterChange}>
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
};

export default EventFilters;
