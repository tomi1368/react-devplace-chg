import React from 'react'
import tailspin from "./tail-spin.svg"
import "./Loader.scss"
const Loader = () => {
    return (
        <div className='loader'>
            <img src={tailspin} alt="tail-spin" />
        </div>
    )
}

export default Loader
