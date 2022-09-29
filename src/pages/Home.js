import React from "react";
import VideoJS from '../VideoJS';
import video from '../Clip.mp4';

const Home = () => {
  const videoJsOptions = {
    controls: true,
    sources: [{
      src: video,
      type: 'video/mp4'
    }]
  }

  return (
    <section className="content">
      <h3>Welcome to the NeverLand , we’ve got fun and games…
      plus coffee, food, and wifi!</h3>
      <div className="home">
      <VideoJS options={videoJsOptions} />
      </div>
      <br></br>
           <p className="relax">Let the kids explore our Kids Paradise<br></br> while you work, relax or catch up with friends<br></br> in our cozy Kids cafe</p>
      <footer> 
        <div className="icons">
    
       <a className="icon" href="https://www.facebook.com/profile.php?id=100084950748607&sk=about"
            class="bi bi-facebook"
          ></a>
            <a className="icon" href="https://www.instagram.com/neverland3155/"
            class="bi bi-instagram"
          ></a>
           <a className="icon" class="bi bi-twitter"
          ></a>
             <a className="icon" class="bi bi-linkedin"
          ></a>
          </div>
        <p className="welcome">You are WELCOME everyday 9:00 AM - 8:00 PM</p>
          </footer>
        </section>

     );
}

export default Home;