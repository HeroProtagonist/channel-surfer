export const handleListClick = (display) => ({
  type: 'UPDATE_MAIN_PLAYER',
  display,
});

export const removeMainVideo = (index) => ({
  type: 'REMOVE_MAIN_VIDEO',
  index,
});
