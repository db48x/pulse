const listener = document.addEventListener('pulse-send-pagemonitor', evt => {
  self.port.emit('timer-first-interaction', evt.detail.timerFirstInteraction);
  document.removeEventListener('pulse-send-pagemonitor', listener);
});

var sendEvent = document.createEvent('CustomEvent');
sendEvent.initCustomEvent('pulse-get-pagemonitor', true, true, {});
document.documentElement.dispatchEvent(sendEvent);
