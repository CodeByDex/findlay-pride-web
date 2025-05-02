import React from 'react';
import { Event } from '@data/type/Event'


export function EventComponent({ eventProps }: { eventProps: Event }) {

    return (
        <div className="shadow-box flex flex-col">
            <div className='mb-4 mr-4'><h2>{eventProps.name}</h2></div>
            <div className="flex flex-row flex-wrap">
                <div className='mb-4 mr-4 min-w-1/4'>
                    <div>{eventProps.startDate.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })} -</div>
                    <div className='text-right'>{eventProps.endDate.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}</div>
                    <div className='text-center'>{eventProps.location}</div>
                </div>
                <div className='mb-4 mr-4 min-w-2/4'>
                    <p>{eventProps.description}</p>
                    {eventProps.organizer && (
                        <p><strong>Organizer:</strong> {eventProps.organizer} <a href={eventProps.organizerURI} className='underline'>{eventProps.organizerURI}</a></p>
                    )}
                    {eventProps.eventURI && (
                        <p><strong>Link:</strong> <a href={eventProps.eventURI} className='underline'>{eventProps.eventURI}</a></p>
                    )}
                    {eventProps.tags && eventProps.tags.length > 0 && (
                        <p><strong>Tags:</strong> {eventProps.tags.join(', ')}</p>
                    )}
                </div>
            </div>
        </div>
    );
}