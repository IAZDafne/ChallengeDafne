export const  GET_POST ='GET_POST'


 

export const API = 'http://localhost:3001'



export function getpost() {
  return function (dispatch) {
    try {
      fetch(`${API}/dafne/post/all`)
        .then(response => response.json())
        .then(json => {
          dispatch({ 
              type: GET_POST, 
              payload: json });
        });
    } catch (error) {
      console.log(error)
    }
  };
}