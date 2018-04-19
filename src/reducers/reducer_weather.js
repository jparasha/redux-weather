import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    console.log('action recieved: ', action);
    console.log(action.type, FETCH_WEATHER, (action.type == FETCH_WEATHER));
    switch (action.type){
        case FETCH_WEATHER: {
            console.log('state', state);
            return [action.payload.data, ...state];
        }
    }
    return state;
}