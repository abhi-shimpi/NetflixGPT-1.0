export const app_logo = require("../assets/images/Netflix_Logo_PMS.png");

export const login_bg_image = require('../assets/images/background_image.jpg');

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

  export const languagesArray = [
    {
      identifier : "en",
      name : "English",
    },
    {
      identifier : "hindi",
      name : "Hindi",
    },
    {
      identifier : "marathi",
      name : "Marathi",
    }
  ];
