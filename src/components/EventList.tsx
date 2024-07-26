import React from 'react';
import { Event } from '@/lib/EventType';
import EventCard from './EventCard';

interface EventListProps {
  events: Event[];
  formatEventDate: (timestamp: number, duration: number) => string;
}

const EventList: React.FC<EventListProps> = ({ events, formatEventDate }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} formatEventDate={formatEventDate} />
      ))}
    </div>
  );
};

export default EventList;
