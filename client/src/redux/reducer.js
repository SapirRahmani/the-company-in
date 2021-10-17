import { ADD_NEW_DOMAIN } from './actionTypes';

const initState = { domains: new Map() };
export default (state = initState, action) => {
    switch (action.type) {
        case ADD_NEW_DOMAIN: {
            console.log(action.payload);
            return {
                domains: new Map(state.domains).set(action.payload.id, { ...action.payload })
            };
        }
        default:
            return state;
    }
};