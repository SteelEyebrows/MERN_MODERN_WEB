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

// export const ADD_CART = createRequestTypes("ADD_CART");

// {REQUEST: "GET_DEPARTMENTS_REQUEST", SUCCESS: "GET_DEPARTMENTS_SUCCESS", FAILURE: "GET_DEPARTMENTS_FAILURE"}