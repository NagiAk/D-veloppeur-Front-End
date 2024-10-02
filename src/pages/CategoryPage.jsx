import React, { useRef, useState } from 'react';
import './CategoryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons';

function CategoryPage({ onLogin , logout}) {
    const [cat, setCat] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [categories, setCategories] = useState([
        { name: 'Copieurs, imprimantes & multifonctions' },
        { name: 'Smartphone, Tablette, PC, Laptop, PDA' },
    ]);
    const cherche = useRef();

    const handleAdd = (e) => {
        e.preventDefault();
        setCategories([...categories, { name: cat }]);
        setCat('');
    };

    const handleDelete = (index) => {
        const newCategories = [...categories];
        newCategories.splice(index, 1);
        setCategories(newCategories);
    };





    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(searchInput.toLowerCase());
    };

    const handleCancelSearch = () => {
        setSearchInput('');
        setSearchTerm('');
    };

    const filteredCat = categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm)
    );
    return (
        <div className="category-container">
            <h2 className="category-title">Gestion des Catégories</h2>

            <div className="logout-container">
                <button className="logout-button" onClick={logout}>Retour</button>
            </div>

            <div className='category-form' onSubmit={handleSearch}>
                <div>
                    <form className='search-form'>
                        <div className="form-groupC">
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Rechercher catégorie"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                        </div>
                        <div className="button-group">
                            <button type="submit" className="action-button">Rechercher</button>
                            <button type="button" className="action-button cancel-button" onClick={handleCancelSearch}>Annuler</button>
                        </div>
                    </form>
                </div>
                <div>
                    <form onSubmit={handleAdd} className='search-form' >
                        <div className="form-groupC">
                            <input
                                type="text"
                                className="search-input"
                                value={cat}
                                onChange={(e) => setCat(e.target.value)}
                                required
                            />
                        </div>
                        <div className="button-group">
                            <button type="submit" className="action-button">Enregistrer</button>
                            <button type="button" className="action-button cancel-button">Annuler</button>
                        </div>
                    </form>
                </div>

            </div>

            <table className="category-table">
                <thead>
                    <tr>
                        <th>Catégories produits</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCat.length > 0 ? (
                        filteredCat.map((c, i) => (
                            <tr key={i}>
                                <td>{c.name}</td>
                                <td>
                                    <button className="edit-button"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className="delete-button" onClick={() => handleDelete(i)}><FontAwesomeIcon icon={faX} /></button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">Aucune catégorie trouvée</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CategoryPage;
