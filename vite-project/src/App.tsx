
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import Calendar from './components/Calendar';
import EventDetails from './components/EventDetails';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <EventProvider>
      <Router>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Calendar />} />
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
        </div>
      </Router>
    </EventProvider>
  );
};

export default App;

