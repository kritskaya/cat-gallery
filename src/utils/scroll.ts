export const enableScroll = () => {
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
  document.body.style.overflowY = 'scroll';
};

export const disableScroll = () => {
  document.body.style.position = 'static';
  document.body.style.overflowY = 'auto';
};
