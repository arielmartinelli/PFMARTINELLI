import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <form action="" className='d-flex search '>
            <input type="text" id="SearchInput" placeholder="Buscar..."/>
            <button className="btn btn-danger" id='SearchButton'>
            <FontAwesomeIcon icon={faSearch} />
        </button>
        </form>
        
    );
}

export default Search;