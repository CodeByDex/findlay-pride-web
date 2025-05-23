import React from 'react';
import { Partner } from "@data/type/Partner";
import Image from 'next/image';
import Link from 'next/link';

import fbLogo from "@public/icons8-facebook.svg";
import bsLogo from "@public/icons8-bluesky.svg"

export function PartnerComponent({ partnerProps }: { partnerProps: Partner }) {
    return (
        <div>
            {partnerProps.imageURI && partnerProps.imageAlt && (
                <div><Image src={partnerProps.imageURI} width={200} height={200} className='rounded-sm' alt={partnerProps.imageAlt} /></div>
            )}
            <div>{partnerProps.name}</div>
            {partnerProps.organizerURI && (
                <div><Link href={partnerProps.organizerURI} target="_blank" className="underline">{partnerProps.organizerURI}</Link></div>
            )}
            <div className="flex items-center gap-5">
                {partnerProps.socials.facebook && (
                <div className="">
                    <Link href={partnerProps.socials.facebook} target="_blank">
                        <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                    </Link>
                </div>)}
                {partnerProps.socials.bluesky && (
                <div className="">
                    <Link href={partnerProps.socials.bluesky} target="_blank">
                        <Image src={bsLogo} alt="bluesky" width={30} height={30} className="rounded-full" />
                    </Link>
                </div>)}
            </div>
        </div>
    )
}