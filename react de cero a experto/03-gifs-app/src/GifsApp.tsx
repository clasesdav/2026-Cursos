// import React, { useState } from 'react';
// import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader';

import { PreviousSearches } from './gifs/components/PreviousSearches';
import { GifList } from './gifs/components/GifList';
import { SearchBar } from './shared/components/SearchBar';
// import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
// import type { Gif } from './gifs/interface/gif.interface';
import { useGifs } from './gifs/hooks/useGifs';


export const GifsApp = () => {

    const {
        // properties
        gifs,

        // methods
        handleSearch,
        handleTermClickked,
        previousTerms,
    } = useGifs();


    return (
        <>
            {/* header */}
            <CustomHeader title='Buscador de gifs' description='Descubre y comparte el Gif perfecto' />

            {/* Search */}
            <SearchBar
                placeholder='buscar gifs'
                onQuery={handleSearch}
            // handleSearch={(query:string)=>handleSearch(query)}
            />

            {/* Busquedas previsa */}
            {/* PreviousSearches */}
            <PreviousSearches
                searches={previousTerms}
                // onLabelClicked={(term: string) => handleTermClickked(term)}
                onLabelClicked={handleTermClickked}
            />

            {/* Gifs */}
            <GifList gifs={gifs} />


        </>
    )
}
