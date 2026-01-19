interface Props {
    placeholder?: string;
}

export const SearchContainer = ({ placeholder = 'Buscar' }: Props) => {
    return (
        <div className='search-container'>
            <input type='text' placeholder={placeholder}></input>
            <button>buscar</button>
        </div>
    )
}
