// src/components/EventDetails.jsx
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import styles from '../styles/App.module.css';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, deleteEvent } = useContext(EventContext);
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <p>Event not found</p>;
  }

  const handleDelete = () => {
    deleteEvent(event.id);
    navigate('/');
  };

  return (
    <div className={styles.eventDetails}>
      <h2>{event.name}</h2>
      <p>{event.date}</p>
      <p>{event.category}</p>
      <button onClick={handleDelete}>Delete Event</button>
    </div>
  );
};

export default EventDetails;
