import axios from 'axios';

axios.defaults.baseURL = 'https://api.vimeo.com';
axios.defaults.headers.common.Authorization = `Bearer ${process.env.ACCESS_TOKEN}`;

export const appendVideoList = (video) => ({
  type: 'APPEND_VIDEO_LIST',
  video,
});

export const handleSearchClick = query => {
  return dispatch => {
    axios.get('/channels', {
      params: {
        page: 1,
        per_page: 10,
        query,
        filter: 'featured',
      },
    })
    .then((resp) => {
      if (resp.data && resp.data.data) {
        return resp.data.data[0].uri;
      }
      throw 'Error no results!';
    })
    .then(channel => {
      return axios.get(`${channel}/videos`, {
        params: {
          page: 1,
          per_page: 10,
        },
      });
    }
    )
    .then((resp) => {
      return dispatch({
        type: 'UPDATE_VIDEO_LIST',
        videoList: resp.data.data,
      });
    }
    )
    .catch(err => {
      console.log(err);
    });

  };
};
