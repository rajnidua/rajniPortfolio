var animatedFrontNames = document.getElementById("animatedFrontNames");
var i = 0;
var txt = "Browser Based Technologies : HTML CSS JAVASCRIPT JQUERY";
var speed = 70;

typeWriter();

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("animatedFrontNames").innerHTML += txt.charAt(i);

    i++;
    setTimeout(typeWriter, speed);
  } else {
    i = 0;
    txt = "SERVER SIDE DEVELOPMENT : Node JS Express JS MYSQL2";

    typeWriterBackend();
  }
}

function typeWriterBackend() {
  if (i < txt.length) {
    document.getElementById("animatedBackNames").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriterBackend, speed);
  } else {
    i = 0;
    txt = "API INTERACTION : API JSON AJAX";

    typeWriterApi();
  }
}

function typeWriterApi() {
  if (i < txt.length) {
    document.getElementById("animatedApiNames").innerHTML += txt.charAt(i);

    i++;
    setTimeout(typeWriterApi, speed);
  }
}
