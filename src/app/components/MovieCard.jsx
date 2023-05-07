"use client"
import React, { useState } from 'react';
import useTVShows from "../hooks/useTVShows";
import Link from 'next/link';

const MovieCard = () => {
    const { shows, isLoading, error } = useTVShows();
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {shows?.map((movie) => (
                        <div key={movie.id} className="p-4 md:w-1/3">
                            <Link href={`/shows/${movie.name}`}>
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img
                                    className="lg:h-64 md:h-36 w-full object-cover object-center"
                                    src={movie.image.original}
                                    alt={movie.name}
                                />
                                <div className="p-6">
                                    <div className="flex flex-wrap mt-2">
                                        {movie.genres?.map(genre => (
                                            <span key={genre} className="mr-2 mb-2 px-3 py-1 bg-gray-200 rounded-full text-xs uppercase">
                                                {genre}
                                            </span>
                                        ))}
                                    </div>

                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        {movie.name}
                                    </h1>
                                    {!showDetails ? (
                                        <div dangerouslySetInnerHTML={{ __html: movie?.summary?.slice(0, 100) }} className="leading-relaxed mb-3" />
                                    ) : (
                                        <div dangerouslySetInnerHTML={{ __html: movie?.summary }} className="leading-relaxed mb-3" />
                                    )}

                                    <div className="flex items-center flex-wrap ">
                                        <button
                                            onClick={toggleDetails}
                                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                        >
                                            {!showDetails ? "Learn More" : "Less Info"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default MovieCard;

