import {START_APP} from "../type/app";
import {getToken} from '../utils/api'

export const startApp = () => {
    return async (dispatch) => {
        try{
            const token = getToken()
            dispatch({
              type: 'START_APP'
            })
        } catch (e){
            //ignore
        }
    }
}
