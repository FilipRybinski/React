import React from 'react'
import git from '../Images/git.png'
import tw from '../Images/twitter.png'
import fb from '../Images/facebook.png'
import insta from '../Images/insta.png'
export default function Footer() {
    return (
        <div className='footer'>
            <img src={tw} alt='tw'></img>
            <img src={fb} alt='fb'></img>
            <img src={insta} alt='ista'></img>
            <img src={git} alt='git'></img>
        </div>
    )
}