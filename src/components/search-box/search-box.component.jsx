import './search-box.styles.css'

const SearchBox = ({placeholder, onSearchHandler, className}) =>
(
    <input 
        type="search" 
        className={`search-box ${className}`} 
        placeholder={placeholder} onChange={onSearchHandler}
    />
)

export default SearchBox;