import axios from 'axios';

const KEY = 'AIzaSyDqWkwRSBITKtQldAXV6MGhUDuRywN9uV0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
        /* we do not preconfigure the query, just this */
    }
});