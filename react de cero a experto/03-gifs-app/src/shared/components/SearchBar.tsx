import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {

    const [query, setQuery] = useState('');

    useEffect(() => {
        // console.log('Hola desde el efecto');
        // onQuery(query);
        // query=query.toLocaleLowerCase();
        // query.replace(' ','');


        const timeoutId = setTimeout(() => {
            // if (query !== '')
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [query, onQuery]);


    const handleSearch = () => {
        onQuery(query);
        setQuery('');
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }


    return (
        <div className='search-container'>
            {/* <h1>{query}</h1> */}
            <input
                type='text'
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}

                onKeyDown={handleKeyDown}
            ></input>
            <button
                onClick={handleSearch}
            >buscar</button>
        </div>
    )
}
