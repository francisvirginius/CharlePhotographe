import React from 'react'
import PhotoImg from '../fond.jpg'

const Photo = () => <img class="fond" src={PhotoImg}></img>


export default function Fond() {
    return (
        <div>
            <Photo/>
        </div>
    )
}
