var notificationContainer = document.getElementById("notificationContainer");

function mostrarNotificacao() {
  var notify = document.createElement("div");
  notify.className = "container__notify";
  
  var content = `
    <div class="loading-c"></div>
    <ion-icon class="icon" name="checkmark-outline"></ion-icon>
    <p class="text-notify">Sucesso!</p>
    <p class="content-notify">Você Recebeu  4x <strong> Ak-47!</p>
    <div class="time-bar"></div>
  `;

  notify.innerHTML = content;
  notificationContainer.appendChild(notify);

  setTimeout(function() {
    notificationContainer.removeChild(notify);
  }, 3000);
}