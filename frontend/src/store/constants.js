export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";


function createRequestTypes(base){
    return [REQUEST,SUCCESS,FAILURE].reduce(
        (acc,type)=>{
            acc[type] = `${base}_${type}`;
            return acc;
        },{}
    )
}

export const POST_LOGIN = createRequestTypes("POST_LOGIN");
export const POST_LOGOUT = createRequestTypes("POST_LOGOUT");
export const POST_REGISTER = createRequestTypes("POST_REGISTER");

export const POST_PLACE = createRequestTypes("POST_PLACE");

