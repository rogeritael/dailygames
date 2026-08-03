'use client';

import { useEffect, useState } from "react";

export function Timer(){
    const [timer, setTimer] = useState<String>(`${getHour()}:${getMinutes()}`);

    function getHour(){
        return new Date().getHours();
    }

    function getMinutes(){
        const minutes = new Date().getMinutes();

        return minutes <= 9 ?  `0${minutes}` : minutes;
    }

    useEffect(() => {
        setInterval(() => {
            setTimer(`${getHour()}:${getMinutes()}`);
        }, 1000);
    }, [])

    return (
        <div className="flex">
            <p className='font-bold'>
                {timer}
            </p>
            <span className='text-gray-600'>GMT</span>
        </div>
    )
}