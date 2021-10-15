import React from 'react'
import Icone from '../Icone.png'

const Logo = () => <img className="logo" src={Icone}></img>

export default function LogoCharle() {
    return (
        <div>
            <Logo/>
        </div>
    )
}
