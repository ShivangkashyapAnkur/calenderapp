// src/components/Calendar.jsx
import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import EventForm from './EventForm';
import EventFilters from './EventFilters';
import styles from '../styles/App.module.css';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const { events } = useContext(EventContext);

  return (
    <div className={styles.calendar}>
      <h1>Calendar</h1>
      <EventFilters />
      <EventForm />
      <div className={styles.events}>
        {events.map((event) => (
          <Link key={event.id} to={`/event/${event.id}`} className={styles.eventLink}>
            <div className={styles.event}>
              <h4>{event.name}</h4>
              <p>{event.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
