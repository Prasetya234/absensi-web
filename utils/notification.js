export function notificateAudioPlay() {
    new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3').play();
}

export function notificatePopUpPlay({message}) {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    const notification = new Notification('Web Absensi', {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIdDE42rKH2M-QPAjzpD6jfdW09EKQsfgTg&usqp=CAU',
      body: message,
    });
    notification.onclick = function () {
      window.open(window.location.origin + "/student/chat");      
    };
  }

}
