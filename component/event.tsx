import React from 'react';
import { Event } from '@data/type/Event'
import Image from 'next/image';
import Link from 'next/link';


export function EventComponent({ eventProps }: { eventProps: Event }) {

    return (
        <div className="shadow-box flex flex-col">
            <div className='text-2xl'>
                <h2>{eventProps.organizer}: {eventProps.name}</h2>
                {eventProps.organizerURI && (<Link href={"https://"+eventProps.organizerURI} className='underline text-sm' target='_blank'>{eventProps.organizerURI}</Link>)}
            </div>
            <div className="flex flex-row flex-wrap">
                <div className='md:w-1/4 w-full p-4'>
                    {eventProps.imageURI && (
                        <div className='justify-items-center mb-2'>
                            <Image src={eventProps.imageURI} alt={eventProps.imageAlt} width={100} height={100} className='rounded-sm'/>
                        </div>
                    )}
                    <div className="">{eventProps.startDate.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })} -</div>
                    <div className='text-right'>{eventProps.endDate.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}</div>
                    <div className='text-center'>{eventProps.location}</div>
                </div>
                <div className=' md:w-3/5 w-full'>
                    <p>{eventProps.description}</p>
                    {eventProps.eventURI && (
                        <p><strong>Link:</strong> <Link href={"https://"+eventProps.eventURI} className='underline' target='_blank'>{eventProps.eventURI}</Link></p>
                    )}
                    {eventProps.tags && eventProps.tags.length > 0 && (
                        <p><strong>Tags:</strong> {eventProps.tags.join(', ')}</p>
                    )}
                </div>
            </div>
        </div>
    );
}