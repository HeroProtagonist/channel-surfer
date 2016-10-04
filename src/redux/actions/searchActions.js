import axios from 'axios';

axios.defaults.baseURL = 'https://api.vimeo.com';
axios.defaults.headers.common.Authorization = `Bearer ${process.env.ACCESS_TOKEN}`;

const searchClick = query => {
  console.log(query)

  return dispatch => {
      axios.get('/channels', {
        params: {
        page: 1,
        per_page: 10,
        query,
        filter: 'featured',
        }
      })
      .then((resp) => {
        console.log(resp)
        if (resp.data && resp.data.data[0]) {
          return resp.data.data[0].uri;
        }
        throw 'Error no results!';
      })
      .then(channel => {
        console.log(channel)
        return axios.get(`${channel}/videos`, {
          page: 1,
          per_page: 10,
        });
      }
      )
      .then((resp) => {
        console.log(resp)
        return dispatch({
          type: 'SET_AUTH',
          isAuth: true,
        });
      }
      )
      .catch(err => {
        console.log(err);
      });

    // });
  };
};

export default searchClick;
