import axios from 'axios';

axios.defaults.baseURL = 'https://api.vimeo.com/channels';
axios.defaults.headers.common.Authorization = `Bearer ${process.env.ACCESS_TOKEN}`;

const handleClick = (click) => {
  return dispatch => {
      axios.get('/staffpicksinspanish/videos', {
        page: 1,
        per_page: 10,
        query: 'staff',
      })
      .then((resp) => {
        console.dir(resp);
        return resp;

      })
      .then((resp) => {
        console.log(resp)
        return dispatch({
          type: 'SET_AUTH',
          isAuth: click,
        });
      }
      )
      .catch(err => {
        console.log(err);
      });

    // });
  };
};

export default handleClick;
