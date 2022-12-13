import React from 'react';
import Avatar from '../Images/logo.jpg'
import postimg from '../Images/post.png'
import linkedin from '../Images/linked.png'

export default function Info() {
    return (
        <div className='Info'>
            <img src={Avatar} alt='logo' width='317px'></img>
            <h1>Filip Rybiński</h1>
            <h3>Frontend Developer</h3>
            <p>rybciaw77@gmail.com</p>
            <div className='buttons'>
                <button id='email'>
                    <img src={postimg} alt="post"></img>
                    Email</button>
                <button id='linked'>
                    <img src={linkedin} alt="post"></img>
                    LinkedIn</button>
            </div>
        </div >
    )
}