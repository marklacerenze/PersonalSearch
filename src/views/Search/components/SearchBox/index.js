import React, {useState} from 'react';
import './style.css'

const SearchBox = ({onSearch, onClose, isSearching}) => {
    const [searchText, setSearchText] = useState("");
    
    // Clean screen
    const handleSearchClick = () => {
        setSearchText('');
        onClose();
    }

    return(
        <div className= "search-box">
            <h2 className= "search-box-title">Buscador de Personal</h2>
            <div className="search-box-bottons">
                <label>
                    <input 
                        className= "search-box-input" 
                        value= {searchText} 
                        onChange= {({target: {value}}) => 
                        setSearchText(value)} />
                    </label>
                    <button onClick= {() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button> {/* Me manda lo que el usuario busca   */}
                    {isSearching && <button onClick= {handleSearchClick} disabled={!searchText.length}>Cerrar</button>}
            </div>
        </div>
    );
}

export default SearchBox;
