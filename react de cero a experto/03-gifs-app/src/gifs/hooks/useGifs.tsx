import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";
import type { Gif } from "../interface/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});




    const handleTermClickked = async (term: string) => {

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term])

            return;
        }

        console.log({ term });
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim();
        query = query.toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        // const currentTerms=previousTerms.slice(0,6);
        // currentTerms.unshift(query);
        // setPreviousTerms(currentTerms);

        setPreviousTerms([query, ...previousTerms].slice(0, 7));

        const gifs = await getGifsByQuery(query);
        console.log(gifs);

        setGifs(gifs);

        gifsCache.current[query] = gifs;


    };

    return {
        // properties
        gifs,

        // methods
        handleSearch,
        handleTermClickked,
        previousTerms,


    }
}
