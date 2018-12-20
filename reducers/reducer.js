const INITIAL_STATE = {
    plClubs: []
}
var clubList = [];
const reducer = (state = INITIAL_STATE, action) => {
    if (action.type === 'GET_CLUB_DETAILS') {
        fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json')
            .then((response) => response.json())
            .then(responseJson => {
                alert(JSON.stringify(responseJson.clubs[1]));
                // this.setState(previousState => ({ text: preText + ' ' + responseJson.clubs[1].name }));
                clubList = responseJson.clubs;
                alert(JSON.stringify(clubList));
                // alert(JSON.stringify(clubNames));
            })
            .catch(error => {
                alert(error);
            })

        return {
            ...state,
            plClubs: clubList
        }
    }

    return state;
}

export default reducer;