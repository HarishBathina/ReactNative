const INITIAL_STATE = {
    plClubs: [],
    bestClub: '',
}
var clubList = [];
var clubName = '';
const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'CLUB_NAMES') {
        return {
            ...state,
            plClubs: action.payload,
            bestClub: action.payload[1].name,
        }
    }

    return state;
}

export default reducer;