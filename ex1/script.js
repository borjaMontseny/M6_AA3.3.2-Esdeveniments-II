var escut = document.getElementById("escut");

escut.addEventListener("click", eventManager);
escut.addEventListener("dblclick", eventManager);
escut.addEventListener("mouseenter", eventManager);
escut.addEventListener("mouseout", eventManager);
document.body.addEventListener("keydown", eventManager);
document.body.addEventListener("wheel", eventManager);

let contadors = {
  vermell: 0,
  blau: 0,
  verd: 0,
  taronja: 0,
};

function eventManager(event) {
  console.log(event.type);
  switch (event.type) {
    case "click":
      contadors.vermell++;
      if (contadors.vermell >= 0 && contadors.vermell <= 99) {
        const casellaVermella = document.getElementById("un");
        casellaVermella.innerHTML = contadors.vermell;
      }
      const casellaLila = document.getElementById("sis");
      casellaLila.innerHTML = event.clientX;
      break;

    case "dblclick":
      contadors.blau++;
      if (contadors.blau >= 0 && contadors.blau <= 99) {
        const casellaBlava = document.getElementById("dos");
        casellaBlava.innerHTML = contadors.blau;
      }
      break;

    case "mouseenter":
      contadors.verd++;
      if (contadors.verd >= 0 && contadors.verd <= 99) {
        const casellaVerda = document.getElementById("tres");
        casellaVerda.innerHTML = contadors.verd;
      }
      break;

    case "mouseout":
      contadors.taronja++;
      if (contadors.taronja >= 0 && contadors.taronja <= 99) {
        const casellaTaronja = document.getElementById("quatre");
        casellaTaronja.innerHTML = contadors.taronja;
      }
      break;

    case "keydown":
      if (isNaN(event.key) && !event.key.startsWith("F") && !event.key.startsWith("C") && !event.key.startsWith("A")) {
        const casellaGroga = document.getElementById("cinc");
        casellaGroga.innerHTML = event.key.toUpperCase();
      }
      break;

    case "wheel":
      if (event.deltaY > 0) {
        contadors.vermell--;
        const casellaVermella = document.getElementById("un");
        casellaVermella.innerHTML = contadors.vermell;
        if (contadors.vermell < 0) {
          contadors.vermell = 0;
          casellaVermella.innerHTML = contadors.vermell;
        }
      }
      break;

    default:
      break;
  }
}
