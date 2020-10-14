import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const key = 'IIA6wnqmBCxcRoRAUdqXXu3bdAUw81ZL';

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=${key}`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url
            }
        })
        setImages(gifs);
    }

    return (
        <>
            <h3> {category} </h3>
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid