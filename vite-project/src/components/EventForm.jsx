// src/components/EventForm.jsx
import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import styles from '../styles/App.module.css';

const EventForm = () => {
  const { addEvent } = useContext(EventContext);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: Date.now(), name, date, category };
    addEvent(newEvent);
    setName('');
    setDate('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.eventForm}>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
