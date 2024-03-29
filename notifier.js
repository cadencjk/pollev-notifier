var alertAudio = new Audio(chrome.runtime.getURL("audio/alert_sound.mp3"));

var alert = function(details) {
alertAudio.play();
notification = chrome.notifications.create({
  title: 'PollEV',
  message: 'A new poll is created!',
  iconUrl: '/images/icon128.png',
  type: 'basic'
});
chrome.notifications.onClicked.addListener(function(event){
  chrome.tabs.update(details.tabId, {active:true,highlighted:true,selected:true});
});
}

var filter = {urls: ["https://pollev.com/proxy/api/participant/*visual_settings"]};

chrome.webRequest.onBeforeSendHeaders.addListener(
  alert, filter
);