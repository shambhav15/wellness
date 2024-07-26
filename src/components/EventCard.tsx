import React from 'react';
import { Event } from '@/lib/EventType';

interface EventCardProps {
  event: Event;
  formatEventDate: (timestamp: number, duration: number) => string;
}

const EventCard: React.FC<EventCardProps> = ({ event, formatEventDate }) => {
  return (
    <div className="bg-[#E4D7C3] dark:bg-[#342e24] cursor-pointer rounded-xl shadow-lg overflow-hidden">
      <img
        src={event.image}
        width={400}
        height={300}
        alt={event.title}
        className="w-full p-2 h-[300px] object-cover rounded-xl hover:scale-110 duration-500 transition-all"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold">{event.title}</h3>
        <p className="text-gray-700 dark:text-gray-400 tracking-tighter mt-2">{event.description}</p>
        <div className="mt-4">
          <p className="text-gray-500 dark:text-gray-200">
            Date: {formatEventDate(event.date, event.duration)}
          </p>
          <p>
            Price: <span className="font-semibold">${event.price}</span>
          </p>
          <p>
            Location: <span className="font-semibold">{event.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
