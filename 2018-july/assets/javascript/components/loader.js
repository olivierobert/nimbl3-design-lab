(function(popmotion) {
  const { easing, timeline, styler } = popmotion;

  const loader = document.querySelector('.loader');

  const dotStyler = styler(loader.querySelector('#dot'));
  const calendarStyler = styler(loader.querySelector('#iconCalendar'));
  const cameraStyler = styler(loader.querySelector('#iconCamera'));
  const imageStyler = styler(loader.querySelector('#iconImage'));

  // Set initial position
  cameraStyler.set({x: 200});
  imageStyler.set({x: 200});

  timeline([
    { track: 'calendar', from: { opacity: 0, x: 0 }, to: { opacity: 1, x: 0 }, duration: 300, ease: easing.backIn },
    { track: 'dot', from: { opacity: 0, scale: 0, x: 54, y: 83 }, to: { opacity: 1, scale: 1, x: 66, y: 95 }, duration: 300, ease: easing.backIn },
    { track: 'calendar', from: { opacity: 1 }, to: { opacity: 1 }, duration: 500 },
    { track: 'calendar', from: { x: 0 }, to: { x: -200 }, duration: 100, ease: easing.easeOut },
    [
      { track: 'camera', from: { x: 200 }, to: { x: 0 }, duration: 200 },
      { track: 'dot', from: { x: 66, y: 95 }, to: { x: 87.5, y: 94 }, duration: 200, ease: easing.linear },
    ],
    { track: 'camera', from: { opacity: 1 }, to: { opacity: 1 }, duration: 500 },
    { track: 'camera', from: { x: 0 }, to: { x: -200 }, duration: 100, ease: easing.easeOut },
    [
      { track: 'image', from: { x: 200 }, to: { x: 0 }, duration: 200 },
      { track: 'dot', from: { x: 87.5, y: 94 }, to: { x: 50, y: 55 }, duration: 200, ease: easing.linear },
    ],
    { track: 'image', from: { opacity: 1 }, to: { opacity: 1 }, duration: 500 },
    [
      { track: 'image', from: { opacity: 1 }, to: { opacity: 0 }, duration: 200, ease: easing.easeOut },
      { track: 'dot', from: { opacity: 1, scale: 1, x: 50, y: 55 }, to: { opacity: 0, scale: 0, x: 38, y: 43 }, duration: 300, ease: easing.easeOut },
    ]
  ],{
    loop: Infinity
  }).start(function(v) {
    dotStyler.set(v.dot);
    calendarStyler.set(v.calendar);
    cameraStyler.set(v.camera);
    imageStyler.set(v.image);
  });
})(window.popmotion);
