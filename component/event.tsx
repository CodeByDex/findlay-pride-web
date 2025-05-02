import React from 'react';
import { Event } from '@data/type/Event'


export function EventComponent({eventProps}: {eventProps: Event}) {

    return (
        <div className="event">
            <h2>{eventProps.name}</h2>
            <p>{eventProps.description}</p>
            <p><strong>Start Date:</strong> {eventProps.startDate.toLocaleString(undefined, {dateStyle: "medium", timeStyle: "short"})}</p>
            <p><strong>End Date:</strong> {eventProps.endDate.toLocaleString(undefined, {dateStyle: "medium", timeStyle: "short"})}</p>
            <p><strong>Location:</strong> {eventProps.location}</p>
            {eventProps.organizer && (
                <p><strong>Organizer:</strong> {eventProps.organizer} (<a href={eventProps.organizerURI}>{eventProps.organizerURI}</a>)</p>
            )}
            {eventProps.eventURI && (
                <p><strong>Event URI:</strong> <a href={eventProps.eventURI}>{eventProps.eventURI}</a></p>
            )}
            {eventProps.tags && eventProps.tags.length > 0 && (
                <p><strong>Tags:</strong> {eventProps.tags.join(', ')}</p>
            )}
        </div>
    );
}