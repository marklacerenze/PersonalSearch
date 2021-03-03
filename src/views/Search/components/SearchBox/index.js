import React, {useState} from 'react';
import './style.css'

const SearchBox = ({onSearch, onClose}) => {
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
                    <button onClick= {() => onSearch(searchText)}>Buscar</button> {/* Me manda lo que el usuario busca   */}
                    <button onClick= {handleSearchClick}>Cerrar</button>
            </div>
        </div>
    );
}

export default SearchBox;
