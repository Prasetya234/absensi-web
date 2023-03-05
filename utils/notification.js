export function notificateAudioPlay() {
  new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-back-2575.mp3').play();
}
export function notificatePopUpPlay({ message, sender, profile }) {
    const notification = new Notification(sender, {
      icon: profile ? profile : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIdDE42rKH2M-QPAjzpD6jfdW09EKQsfgTg&usqp=CAU',
      body: message,
    });
    notification.onclick = function () {
      window.open(window.location.origin + "/student/chat");
    };
}
