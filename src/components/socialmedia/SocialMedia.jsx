import React from 'react';
import "./socialmedia.css";

const SocialMedia = () => {

    return (
        <div className='social-media'>
            <ul className='social-media-list'>
                <li className='social-media-item'>
                    <a href="mailto:reginaliew9@gmail.com"><i class='bx bxs-envelope'></i></a>
                </li>
                <li className='social-media-item'>
                    <a href="https://linkedin.com/in/mhliew-regina"><i class='bx bxl-linkedin' ></i></a>
                </li>
                <li className='social-media-item'>
                    <a href="https://github.com/l-reginamh"><i class='bx bxl-github'></i></a>
                </li>
            </ul>
        </div>
    );
}

export default SocialMedia;