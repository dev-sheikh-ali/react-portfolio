import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <AiFillGithub />
    </div>
    <div>
      <BsTwitter />
    </div>
  </div>
);

export default SocialMedia;
