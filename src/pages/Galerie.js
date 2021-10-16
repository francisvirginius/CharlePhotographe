import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mariage from '../photo/Mariage1.jpg'
import Baptême from '../photo/baptême.jpg'
import Bebe from '../photo/bébé.jpg'
import Couple from '../photo/couple.jpg'
import Famille from '../photo/famille.jpg'
import Grossesse from '../photo/grossesse.jpg'
import Baptême1 from'../photo/Baptême1.jpg'
import Baptême2 from'../photo/Baptême2.jpg'
import Baptême3 from'../photo/Baptême3.jpg'

import Bebe1 from '../photo/Bebe1.jpg'
import Bebe2 from'../photo/Bebe2.jpg'
import Bebe3 from'../photo/Bebe3.jpg'

import Couple1 from '../photo/Couple1.jpg'
import Couple2 from'../photo/Couple2.jpg'
import Couple3 from'../photo/Couple3.jpg'

import Famille1 from'../photo/Famille1.jpg'
import Famille2 from'../photo/Famille2.jpg'
import Famille3 from'../photo/Famille3.jpg'

import Grossesse1 from'../photo/Grossesse1.jpg'
import Grossesse2 from'../photo/Grossesse2.jpg'
import Grossesse3 from'../photo/Grossesse3.jpg'

import Mariage1 from'../photo/Mariage1.jpg'
import Mariage2 from'../photo/Mariage2.jpg'
import Mariage3 from'../photo/Mariage3.jpg'

// change the image with the filter 
function removeClassNameByfiltre() {
    const check = document.getElementById('dropdownMenuLink').ariaexpanded ;
    switch(check){
        case 'false':
            document.getElementById('dropdownMenuLink').ariaexpanded = "true";
            document.getElementById('show').className = "dropdown-menu show";
            document.getElementById('showme').className = "dropdown show ";
           break;
        case 'true':
            document.getElementById('dropdownMenuLink').ariaexpanded = "false";
        document.getElementById('show').className = "dropdown-menu ";
        document.getElementById('showme').className = "dropdown ";
         break;
        default:
            document.getElementById('dropdownMenuLink').ariaexpanded = "false";
            document.getElementById('show').className = "dropdown-menu show";
            document.getElementById('showme').className = "dropdown show ";
    }
    
  }
// Btn Mariage
  function switchpicturesMariage () {
    var element = document.getElementById("Galerie");
    while (element.firstChild) {
  element.removeChild(element.lastChild);
    }
    var img = document.createElement("img");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");

        img.src = Mariage1;
        element.appendChild(img);

        img1.src = Mariage2;
        element.appendChild(img1);
        
        img2.src = Mariage3;
        element.appendChild(img2);
        img.style.marginTop = "28%"; 
        img1.style.marginTop = "28%"; 
        img2.style.marginTop = "28%"; 


}
    
    
// Btn Grossesse
  function switchpicturesGrossesse () {
    var element = document.getElementById("Galerie");
    while (element.firstChild) {
  element.removeChild(element.lastChild);
    }
    var img = document.createElement("img");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");

        img.src = Grossesse1;
        element.appendChild(img);

        img1.src = Grossesse2;
        element.appendChild(img1);
        
        img2.src = Grossesse3;
        element.appendChild(img2);

        img.style.marginTop = "28%"; 
        img1.style.marginTop = "28%"; 
        img2.style.marginTop = "28%"; 


  }

  // Btn Bebe
  function switchpicturesBebe () {
    var element = document.getElementById("Galerie");
    while (element.firstChild) {
  element.removeChild(element.lastChild);
    }
    var img = document.createElement("img");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");

        img.src = Bebe1;
        element.appendChild(img);

        img1.src = Bebe2;
        element.appendChild(img1);
        
        img2.src = Bebe3;
        element.appendChild(img2);

        img.style.marginTop = "28%"; 
        img1.style.marginTop = "28%"; 
        img2.style.marginTop = "28%"; 


  }
  // Btn Famille
  function switchpicturesFamille () {
    var element = document.getElementById("Galerie");
    while (element.firstChild) {
  element.removeChild(element.lastChild);
    }
    var img = document.createElement("img");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");

        img.src = Famille1;
        element.appendChild(img);

        img1.src = Famille2;
        element.appendChild(img1);
        
        img2.src = Famille3;
        element.appendChild(img2);

        img.style.marginTop = "28%"; 
        img1.style.marginTop = "28%"; 
        img2.style.marginTop = "28%"; 

  }
  // Btn Baptême
  function switchpicturesBaptême () {
    var element = document.getElementById("Galerie");
    while (element.firstChild) {
  element.removeChild(element.lastChild);
    }
    var img = document.createElement("img");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");

        img.src = Baptême1;
        element.appendChild(img);

        img1.src = Baptême2;
        element.appendChild(img1);
        
        img2.src = Baptême3;
        element.appendChild(img2);

        img.style.marginTop = "28%"; 
        img1.style.marginTop = "28%"; 
        img2.style.marginTop = "28%"; 


  }
  // Btn Couple
  function switchpicturesCouple () {
    var element = document.getElementById("Galerie");
    while (element.firstChild) {
  element.removeChild(element.lastChild);
    }
    var img = document.createElement("img");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");

        img.src = Couple1;
        element.appendChild(img);

        img1.src = Couple2;
        element.appendChild(img1);
        
        img2.src = Couple3;
        element.appendChild(img2);

        img.style.marginTop = "28%"; 
        img1.style.marginTop = "28%"; 
        img2.style.marginTop = "28%"; 


  }




export default function Galerie() {
    return (
        <div className="background">
            {
                // Filtre
            }
             <div id="showme"class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={removeClassNameByfiltre}>
                        trier par</a>
                    <div id="show"class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link class="dropdown-item" to="#" onClick={switchpicturesMariage} >Mariage</Link>
                        <Link class="dropdown-item" to="#" onClick={switchpicturesGrossesse}>Grossesse</Link>
                        <Link class="dropdown-item" to="#" onClick={switchpicturesBebe}>Bébé</Link>
                        <Link class="dropdown-item" to="#"onClick={switchpicturesFamille}>Famille</Link>
                        <Link class="dropdown-item" to="#" onClick={switchpicturesBaptême}>Baptême</Link>
                        <Link class="dropdown-item" to="#"onClick={switchpicturesCouple}>Couple</Link>
                    </div>
            </div>
            {
                // Galerie
            }
            <div id="Galerie"className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
               // Mariage  
            }
           <div id="Mariage" className="shadow-sm" >
                    <img id="Mariagepicture"src={Mariage} className="card-img-top card_image" alt="..."/>
                    <div className="card-body shadow-sm text-center">
                        <h5 className="card-title charlesgalerie">Mariage</h5>
                        <Link to="#" className="btn btn-secondary " onClick={switchpicturesMariage}>Voir plus</Link>
                    </div>
            </div>
            {
                //Grossesse
            }
            <div id ="Grossesse" className="shadow-sm" >
                    <img id="Grossessepicture" src={Grossesse} className="card-img-top card_image" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title charlesgalerie">Grossesse</h5>
                        <Link to="#" className="btn btn-secondary" onClick={switchpicturesGrossesse}>Voir plus</Link>
                    </div>
            </div>
            {
                //Bébé
            }
            <div id="bebe" className="shadow-sm" >
                    <img id="Bebepicture"src={Bebe} className="card-img-top card_image" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title charlesgalerie">Bébé</h5>
                        <Link to="#" className="btn btn-secondary" onClick={switchpicturesBebe}>Voir plus</Link>
                    </div>
            </div>
            {
                // Famille
            }
              <div id="Famille" className="shadow-sm" >
                    <img  id="Famillepicture"src={Famille} className="card-img-top card_image" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title charlesgalerie">Famille</h5>
                        <Link to="#" className="btn btn-secondary" onClick={switchpicturesFamille}>Voir plus</Link>
                    </div>
            </div>
            {
                //Baptême
            }
             <div id="Baptême" className="shadow-sm" >
                    <img id="Baptêmepicture" src={Baptême} className="card-img-top card_image" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title charlesgalerie">Baptême</h5>
                        <Link to="#" className="btn btn-secondary" onClick={switchpicturesBaptême}>Voir plus</Link>
                    </div>
            </div>
            {
                //couple
            }
             <div id="couple" className="shadow-sm" >
                    <img id="Couplepicture"src={Couple} className="card-img-top card_image" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title charlesgalerie">couple</h5>
                        <Link to="#" className="btn btn-secondary" onClick={switchpicturesCouple}>Voir plus</Link>
                    </div>
            </div>
        </div>
            
    </div>
    )
}
