import React from 'react';
import {  FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ToyEvents = () => {
  const events = [
    {
      id: 1,
      title: "Action Figure Convention",
      date: "July 24, 2023",
      location: "New York City",
    },
    {
      id: 2,
      title: "Battle Bots Tournament",
      date: "August 12, 2023",
      location: "Los Angeles",
    },
  ];

  return (
    <section data-aos="fade-up" className="py-16 bg-black/10 backdrop-blur-md my-5">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-down">Toy Events</h2>
        </div>
        <div className="divider"></div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 px-5" data-aos="fade-up">
          {events.map((event) => (
            <div key={event.id} className="bg-black/10 rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-bold text-primary">{event.title}</h4>
              <p className="mt-2 flex gap-2 items-center"><FaCalendarAlt/> Date: {event.date}</p>
              <p className="mt-2 flex gap-2 items-center"><FaMapMarkerAlt/> Location: {event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToyEvents;
