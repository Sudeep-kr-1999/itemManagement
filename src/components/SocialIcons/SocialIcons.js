import React from "react";
import facebook from "./assets/fb.png";
import twitter from "./assets/twitter.png";
import youtube from "./assets/youtube.png";
import instagram from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";
function SocialIcons({ title }) {
  let img = "";
  if (title === "YouTube") {
      img=<img src={youtube} alt="youtube logo" className="relative h-10 w-10"/>;
  } else if (title === "Facebook") {
    img=<img src={facebook} alt="facebook logo" className="relative h-10 w-10"/>;
  } else if (title === "Twitter") {
    img=<img src={twitter} alt="twitter logo" className="relative h-10 w-10"/>;
  } else if (title === "Linkedin") {
    img=<img src={linkedin} alt="linkedin logo" className="relative h-10 w-10"/>;
  } else if (title === "Instagram") {
    img=<img src={instagram} alt="instagram logo" className="relative h-10 w-10"/>;
  }
  return <div className="socialicons relative block bg-white shadow-lg rounded-full m-4">{img}</div>;
}

export default React.memo(SocialIcons);
