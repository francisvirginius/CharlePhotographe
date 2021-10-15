import {Link} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function removeClassName() {
    const check = document.getElementById('dropdownMenuLink').ariaexpanded ;
    switch(check){
        case 'false':
            document.getElementById('dropdownMenuLink').ariaexpanded = "true";
            document.getElementById('show').className = "dropdown-menu show";
            document.getElementById('showme').className = "dropdown show position-absolute top-50 end-0 translate-middle-y";
           break;
        case 'true':
            document.getElementById('dropdownMenuLink').ariaexpanded = "false";
        document.getElementById('show').className = "dropdown-menu position-absolute top-50 end-0 translate-middle-y";
        document.getElementById('showme').className = "dropdown position-absolute top-50 end-0 translate-middle-y ";
         break;
        default:
            document.getElementById('dropdownMenuLink').ariaexpanded = "false";
            document.getElementById('show').className = "dropdown-menu show";
            document.getElementById('showme').className = "dropdown show position-absolute top-50 end-0 translate-middle-y";
    }
    
  }

export default function Filtre() {
    return (
        <div>
            <div id="showme"class="dropdown position-absolute top-50 end-0 translate-middle-y">
                    <a class="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={removeClassName}>
                        trier par</a>
                    <div id="show"class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link class="dropdown-item" to="/Mariage" >Mariage</Link>
                        <Link class="dropdown-item" to="/">Another action</Link>
                        <Link class="dropdown-item" to="/">Something else here</Link>
                        <Link class="dropdown-item" to="/">Something else here</Link>
                        <Link class="dropdown-item" to="/">Something else here</Link>
                        <Link class="dropdown-item" to="/">Something else here</Link>

                    </div>
            </div>
            
        </div>
    )
}
