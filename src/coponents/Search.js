import React from 'react'
import {Link} from 'react'

function barsearch(){
    var input = document.getElementById('input').value;
    switch(input){
        case 'numero de telephone':
            return 'mon numero de telephen est 0102030494';
        case 'contact':
            return <Link to='/Contact'></Link>;
        
        case 'tarifs':
            return <Link  to="/Tarifs_Prestations"></Link>;
        
        case 'prestations':
            return <Link to="/Tarifs_Prestations"></Link>;
        case 'galerie':
            alert(`Désole, la page ${input} n'existe pas.`);
            
        default:
            alert(`Désole, la page ${input} n'existe pas.`);
            
    }
}

export default function search() {
    return (
        <div>
            <nav className="navbar navbar-light position-absolute top-0 end-0">
                    <div className="container-fluid">
                        <form className="d-flex">
                        <input id ="input"className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-secondary" type="submit" onClick={barsearch}>Search</button>
                        </form>
                    </div>
            </nav>
        </div>
    )
}
