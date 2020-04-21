import React from 'react';

import '../styles/index.scss';

import bg1 from '../assets/images/bg-1.jpg';
import avatar from '../assets/images/photo.png';

export default () => (
  <div>
    <div className="flex flex-wrap">

      <img className="landing-bg absolute" src={bg1} alt="bg-1"/>
      <div className="landing-left bg-colored col-6 flex justify-center items-center z1">

        <div className="keywords absolute font-secondary">
          <h2 className="absolute top left">singer</h2>
          <h2 className="absolute top right">songwriter</h2>
          <h2 className="absolute bottom left">gamer</h2>
          <h2 className="absolute bottom right">graphic artist</h2>
        </div>

        <div className="info flex flex-column items-center">
          <img src={avatar} alt="alys"/>
          <h1 className="color-secondary mt2">alys</h1>
          <p className="center">a filipino singer-songwriter born and raised in a sandbox</p>
          <div className="links flex mt1">
            <a href="https://www.instagram.com/lysvndr/"
              target="_blank" rel="noopener noreferrer">
              <i class="lni lni-instagram-original"></i>
            </a>
            <a href="https://twitter.com/alysmsc"
              target="_blank" rel="noopener noreferrer">
              <i class="lni lni-twitter-original"></i>
            </a>
            <a href="https://open.spotify.com/artist/4cS8r9JlwhqLafUWAXkzHx"
              target="_blank" rel="noopener noreferrer">
              <i class="lni lni-spotify"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCzCGHaVgPRH0y3K_kWNfGCA"
              target="_blank" rel="noopener noreferrer">
              <i class="lni lni-youtube"></i>
            </a>
            <a href="https://soundcloud.com/alysmsc"
              target="_blank" rel="noopener noreferrer">
              <i class="lni lni-soundcloud"></i>
            </a>
          </div>
        </div>

      </div>
      <div className="col-6 relative">

        <div className="spotify-right flex flex-column justify-center items-center">
          <iframe className="spotify-follow"
            src="https://open.spotify.com/follow/1/?uri=spotify:artist:4cS8r9JlwhqLafUWAXkzHx&size=detail&theme=dark"
            width="300" height="56" scrolling="no" frameBorder="0"
            allowtransparency="true"></iframe>

          <iframe src="https://open.spotify.com/embed/artist/4cS8r9JlwhqLafUWAXkzHx"
            title="alys-spotify" width="300" height="380" allowtransparency="true"
            frameBorder="0" allow="encrypted-media"></iframe>
        </div>
        
      </div>

    </div>

    <div className="spotify-highlights flex relative z1">
      <img className="col-3" src="https://i.scdn.co/image/ab67616d00001e02949ddc075773024941e57816"/>
      <img className="col-3" src="https://i.scdn.co/image/ab67616d00001e021c1a46f9aa23c85257d63c07"/>
      <img className="col-3" src="https://i.scdn.co/image/ab67616d0000b273d1bf9677de5523845d3de7f1"/>
      <img className="col-3" src="https://i.scdn.co/image/ab67616d00001e025cae1b08c065ed8ad2567367"/>
    </div>

    <div className="section-2-RENAME-THIS flex">
      <img className="absolute z1" src="https://www.jakpost.travel/wimages/large/21-212462_sona-images-sona-wallpaper-hd-wallpaper-and-background.jpg" alt="bg-1"/>
      <div className="right col-6 bg-colored flex justify-center items-center z1">
        <h1>put some stuff here maybe tomorrow</h1>
      </div>

    </div>

    <div className="fixed wala-pa z4">
      wala pa di pa tapos hehe excited? <span role="img">🌭</span>
    </div>

  </div>
);
