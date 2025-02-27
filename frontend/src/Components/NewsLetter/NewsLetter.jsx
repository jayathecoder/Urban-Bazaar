import React, {useState} from 'react'
import './NewsLetter.css'

const NewsLetter =() => {
    return(
        <div className='newsletter'>
            <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Id' />
                <button>Subcribe</button>
            </div>
        </div>
    )
}

export default NewsLetter