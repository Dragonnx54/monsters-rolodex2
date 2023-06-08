import { ChangeEvent, ChangeEventHandler } from 'react';
import './search-box.styles.css'

type SearchBoxProps = {
    className: string,
    placeholder?: string,
    onSearchHandler: ChangeEventHandler<HTMLInputElement>;
    //onSearchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({placeholder, onSearchHandler, className}: SearchBoxProps) =>
(
    <input 
        type="search" 
        className={`search-box ${className}`} 
        placeholder={placeholder} onChange={onSearchHandler}
    />
)

export default SearchBox;