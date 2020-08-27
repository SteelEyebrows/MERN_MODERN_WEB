const proxy = "https://cors-anywhere.herokuapp.com/";
const apikey = "AIzaSyC_3EPS3YBlLPAU0_1_kAAEQitLR6aUexk";

export const postPlace = async (payload) =>{
    const lat = payload.lat.toFixed(6);
    const lng = payload.lng.toFixed(6);
    return await fetch(`${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&language=ko&type=restaurant&key=${apikey}`,{
        method: "GET",
        headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
        console.error(error);
    });
}


export default{
    postPlace
}   