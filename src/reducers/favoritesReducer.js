import {ADD_FAVORITE,DELETE_FAVORITE,TOGGLE_FAVORITE} from "../actions/favoriteActions"

const initialState={
    list:[],
    displayFavorites:true
    }

const favoritesReducer=(state = initialState,action)=>{
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                list:[...state.list, action.payload]}
                case DELETE_FAVORITE:
                    return{
                        ...state,
                        list:state.list.filter((item)=>{ ;return action.payload!==item.id})
                    }
                    case TOGGLE_FAVORITE:
                        return{
                            ...state,
                            displayFavorites: action.payload
                        }
        default:
            return state;
    }
}
export default favoritesReducer
