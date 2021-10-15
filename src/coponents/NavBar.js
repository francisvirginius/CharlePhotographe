import { Link } from 'react-router-dom';  


function btNavMobile(){
var nav = document.getElementById('btn').ariaexpanded ;
switch (nav){
    case 'false':
        document.getElementById('btn').className = 'navbar-toggler collapsed';
        document.getElementById('btn').ariaexpanded='true' ;
        document.getElementById('navbarNav').className='navbar-collapse collapse show' ;
        document.getElementById('navbarNav').style='height: 180px' ;
    break;
    case 'true':
        document.getElementById('btn').className = 'navbar-toggler';
        var nav = document.getElementById('btn').ariaexpanded='false' ;
        document.getElementById('navbarNav').className='collapse navbar-collapse' ;
        break;
        default:
            document.getElementById('btn').className = 'navbar-toggler collapsed';
            document.getElementById('btn').ariaexpanded='true' ;
            document.getElementById('navbarNav').className='navbar-collapse collapse show' ;
            document.getElementById('navbarNav').style='height: 180px' ;
}


}




export default function NavBar() {
    return (
        <div> 
            <nav id ="navbar"class="navbar navbar-dark navbar-expand-sm ">
                    <div class="container-fluid">
                        <Link className="navbar-brand" to="/"><h1 className="fs-2">Accueil</h1></Link>
                        <button id="btn"class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"onClick={btNavMobile}>
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/Galerie"><h2 className="fs-3">Galerie</h2></Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/Tarifs_Prestations"><h3 className="fs-3">Tarifs et Prestations</h3></Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/Contact"><h4 className="fs-3">Contact</h4></Link>
                            </li>
                        </ul>
                        </div>
                    </div>
            </nav>



</div>
    )
}
