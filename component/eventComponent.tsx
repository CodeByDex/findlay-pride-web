import React from 'react';
import { Event } from '@data/type/Event'
import Image from 'next/image';
import Link from 'next/link';

import dangerouslySetInnerHTML from 'react'

function renderDescription({ desc }: { desc: string }) {
    return <div dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "<br>") }} />;
}

export function EventComponent({ eventProps }: { eventProps: Event }) {

    return (
        <div className="shadow-box flex flex-col">
            <div className='text-2xl'>
                <h2>{eventProps.organizer && (<>{eventProps.organizer}: </>)}{eventProps.name}</h2>
                {eventProps.organizerURI && (<Link href={eventProps.organizerURI} className='underline text-sm' target='_blank'>{eventProps.organizerURI}</Link>)}
            </div>
            <div className="flex flex-row flex-wrap">
                <div className='md:w-1/4 w-full p-4'>
                    {eventProps.imageURI && (
                        <div className='justify-items-center mb-2'>
                            <Image src={eventProps.imageURI} alt={eventProps.imageAlt} width={200} height={200} className='rounded-sm'/>
                        </div>
                    )}
                    <div className="">{eventProps.startDate.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })} -</div>
                    <div className='text-right'>{eventProps.endDate.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}</div>
                    <div className='text-center'><address>{eventProps.location}</address></div>
                </div>
                <div className=' md:w-3/5 w-full'>
                    {renderDescription({desc: eventProps.description})}
                    {eventProps.eventURI && (
                        <div><br/><p><strong>Event Link:</strong> <Link href={eventProps.eventURI} className='underline' target='_blank'>{eventProps.eventURI}</Link></p></div>
                    )}
                    {eventProps.tags && eventProps.tags.length > 0 && (
                        <div><br/><p><strong>Tags:</strong> {eventProps.tags.join(', ')}</p></div>
                    )}
                </div>
            </div>
        </div>
    );
}