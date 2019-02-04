import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub,faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
    return (
        <section className='section-contact'>
            <h1>Contact me at:</h1>
            <ul>
                <li><FontAwesomeIcon icon={faEnvelope}/> rgrabowski.biz@gmail.com</li>
                <li><FontAwesomeIcon icon={faPhone}/> +48 691044199</li>
                <li><a href='https://github.com/Radzieoon' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub}/></a></li>
                <li><a href='https://twitter.com/Radzieoon' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faTwitter}/></a></li>
            </ul>
        </section>
    );
};