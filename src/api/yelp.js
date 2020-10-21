import axios from 'axios';

export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {
    Authorization:'Bearer 0jQrGcvWxpu19GbCST-EUjQtuqcaR_i0BXj0E2f0xBuVF9H8ajQK445HkVizGTIAippwwb4NQhr_GAO04by3qj9k7klcm0J0KSpu1yN7yQlTi2Z-cvOVR0eWprRpX3Yx'
}

});
    