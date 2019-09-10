import {START_APP} from "../type/app";
import {getToken} from '../utils/api'

function getAppToken() {
    return async (dispatch) => {
        try{
            const res = await getToken()
            await dispatch({
                type: START_APP,
                payload: {
                  token: res.data.access_token
                }
            })
        } catch (e){
            //ignore
        }
    }
}

export default getAppToken
