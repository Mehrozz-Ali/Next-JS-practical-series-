import React from 'react';
import { ImageSlider } from '@/components/ImageSlider';
import { serverSideFunction } from '@/utils/server.utils';



export default function serverRoute() {
    const result = serverSideFunction();
    return (
        <>
            <h1>Server Route {result}</h1>
            < ImageSlider />

        </>
    )

}