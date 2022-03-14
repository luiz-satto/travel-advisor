import axios from 'axios';
import { ICoordinates } from '../interfaces/ICoordinates';

const REACT_APP_RAPID_API_KEY = 'b541b11a1emsha613715af60ed01p11cbd4jsn3c18bf953b79';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw: ICoordinates, ne: ICoordinates) => {
    try {
        const { data } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': REACT_APP_RAPID_API_KEY!
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}