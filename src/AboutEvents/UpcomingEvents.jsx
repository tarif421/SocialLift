import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaMapMarkerAlt, FaCalendarAlt, FaTag } from "react-icons/fa";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/socialLift")
      .then((res) => res.json())
      .then((data) => {
        const today = new Date();
        const upcoming = data.filter((event) => new Date(event.date) >= today);
        setEvents(upcoming);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-10px)] flex items-center justify-center bg-gray-100">
        <span className="loading  loading-spinner text-warning"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl text-[#a1490f] font-bold  text-center mb-8">
        Upcoming Events
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming events found.</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {events.map((event) => (
            <div key={event._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-[#f96a11]">{event.title}</h2>

                <p className="flex items-center gap-2 text-sm">
                  <FaMapMarkerAlt /> {event.location}
                </p>

                <p className="flex items-center gap-2 text-sm">
                  <FaTag /> {event.type}
                </p>

                <p className="flex items-center gap-2 text-sm">
                  <FaCalendarAlt />
                  {new Date(event.date).toDateString()}
                </p>

                <div className="card-actions justify-end">
                  <Link
                    to={`/events/${event._id}`}
                    className="btn bg-[#FCBC45] btn-sm"
                  >
                    View Event
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
