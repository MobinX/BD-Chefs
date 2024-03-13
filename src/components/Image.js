"use client"
import Image  from 'next/image'

export const Imagex = (props) => {
    return (
        <Image
        onError={e=> {
            (e) => console.error(e.target.id)}}
         {...props}       />
    );
    }