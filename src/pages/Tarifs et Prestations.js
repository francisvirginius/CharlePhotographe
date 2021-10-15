import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            height:2,borderwidth:0,color:color,backgroundcolor:color
        }}
    />
);

export default function Tarifs_Prestations() {
    return (
        <div className="background text-center ">
            <div>
                <h1 className="margin ">Juste moi</h1>
                <p className="charlesgalerie">Séance pour une personne, en extérieur ou en studio</p>
                <p><b>130 euros</b></p>
            </div>
            <ColoredLine color="grey" />
            <div >
                <h2>Pour deux</h2>
                <p className="charlesgalerie">Pour deux personnes, en extérieur ou en studio</p>
                <p><b>195 euros</b></p>
            </div>
            <ColoredLine color="grey" />
            <div >
                <h3>Famille</h3>
                <p className="charlesgalerie">Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)</p>
                <p><b>220 euro</b></p>
            </div>
            <ColoredLine color="grey" />
            <div> 
                <h4> Il était une fois</h4>
                <p className="charlesgalerie">Photo de grossesse À votre domicile, en extérieur ou en studio</p>
                <p><b>160 euros</b></p>
                </div>
            <ColoredLine color="grey" />
            <div>
                <h5>Mon bébé</h5>
                <p className="charlesgalerie">Photo d’enfant jusqu’à 3 ans (photo à domicile)</p>
                <p><b>100 euros</b></p>
            </div>
            <ColoredLine color="grey" />
            <div>
                <h6 >J’immortalise l’événement</h6>
                <p className="charlesgalerie">Prestation de mariage ou baptême sur devis</p>
                <p><b>Sur mesure</b></p>
            </div>
            </div>

    )
}
