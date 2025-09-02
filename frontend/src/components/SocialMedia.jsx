import React from 'react'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/Bishaljay" target='blank'>
            <BsGithub />
          </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/bishal-7bj/" target='blank'>
            <BsLinkedin />
          </a>
        </div>
        <div>
        <a href="https://www.instagram.com/_jbishal7/" target='blank'>
            <BsInstagram />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia