import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [language, setLanguage] = useState('');
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (!query ) {
            alert('Please enter text and select a language');
            return;
        }
    
        try {
            const API_KEY = 'AIzaSyC51FB4aVm4ADU3FgqKjXLQZiO-knv3xv0';
            const SEARCH_ENGINE_ID = '41bdf7037b6d44a41';
            const searchQuery = `${query} traffic rules`;
    
            // Map language to 'lr' parameter values
            const languageCodes = {
                hi: "lang_hi",
                ta: "lang_ta",
                mr: "lang_mr",
                pa: "lang_pa",
                ml: "lang_ml",
                en: "lang_en"
            };
            const lrParam = languageCodes[language] || "lang_en";
    
            const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(searchQuery)}&lr=${lrParam}`;
            
            const response = await axios.get(url);
            
            if (response.data.items) {
                setSearchResults(response.data.items);  // Set results in the state to display on the page
            }
        } catch (error) {
            console.error('Search error:', error);
            alert('Search failed. Please try again.');
        }
    };
    

    const handleTranslate = () => {
        if (!query || !language) {
            alert('Please enter text and select a language');
            return;
        }
        navigate('/translate', {
            state: {
                text: query,
                targetLang: language
            }
        });
    };

    return (
        <div  style={{ border: '1px solid gray', padding: '10px', width: '700px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Search traffic rules..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ flex: 1, padding: '5px' }}
                />
                <FaSearch style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={handleSearch} />
                <FaMicrophone style={{ marginLeft: '5px', cursor: 'pointer' }} />
            </div>
         
            <button onClick={handleSearch} style={{ width: '100%', padding: '5px' }}>
             Search...
            </button>
            
            {searchResults.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                    <h4>Search Results:</h4>
                    <ul style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {searchResults.map((result, index) => (
                            <li key={index}>
                                <a href={result.link} target="_blank" rel="noopener noreferrer">
                                    {result.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SearchBar
