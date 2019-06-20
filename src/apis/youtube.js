import axios from 'axios';

const KEY = 'AIzaSyBFUHV3vBOcPsExbyb2Utw4V0GFIrtG5q0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3' ,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});


