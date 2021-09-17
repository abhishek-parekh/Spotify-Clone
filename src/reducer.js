export const initialState = {
    user:null,
    playlists : [],
    playing:false,
    item: null,
    discover_weekly:null,
    // token:null,
    // token:"BQDtQLF8kAwm89I-3NID2UPIHiv5XvqeByxjX3waTHgWNQOr8J6a9SHVbT64aTickupmLbGYrsPxtRmsfgM2h-t6GrYJ9nI4Bkz2CPUn69UQqkFLYW9SGkybh0ucfzuyTWIAx1S2csUjXUaAhnCMR-xX-vQmcfVQFInQQXhsek2ZyuAZ"
};

const reducer = (state,action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }

        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
        
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            }

        default:
            return state;
    }
}

export default reducer;