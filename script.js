function zilgunLojcub(uhaeu) {
  var reverse = uhaeu.toString().split("").reverse().join("");
  var evohna = reverse.match(/\d{1,3}/g);
  evohna = evohna.join(".").split("").reverse().join("");
  return "Rp. " + evohna; }
function rbgnyacndoriu() {
  var cmetnOpyu = parseFloat(document.getElementById("abcdUnetn").value);
  var jbgOryv = parseFloat(document.getElementById("bryvYbg").value);
  var mnwnxOryv = parseFloat(document.getElementById("mnwnxOryv").value);
  var enetnXina = parseFloat(document.getElementById("fznbQnetn").value);
  var kbgDhja = parseFloat(document.getElementById("ghnyYbg").value);
  var lnwnxKhny = parseFloat(document.getElementById("lnwnxKhny").value);
  var hbairefvOryv = cmetnOpyu * jbgOryv * 100;
  document.getElementById("hbairefvOryv").textContent = zilgunLojcub(hbairefvOryv.toFixed(0));
  var ibairefvBzna = enetnXina * kbgDhja * 100;
  document.getElementById("ibairefvBzna").textContent = zilgunLojcub(ibairefvBzna.toFixed(0));
  var nbgnyCnwnxOcau = (hbairefvOryv * mnwnxOryv) / 100;
  document.getElementById("nbgnyCnwnxOcau").textContent = zilgunLojcub(nbgnyCnwnxOcau.toFixed(0));
  var pbgntCnwnxWhny = (ibairefvBzna * lnwnxKhny) / 100;
  document.getElementById("pbgntCnwnxWhny").textContent = zilgunLojcub(pbgntCnwnxWhny.toFixed(0));
  var obgnyOryv = hbairefvOryv + nbgnyCnwnxOcau;
  document.getElementById("obgnyOryv").textContent = zilgunLojcub(obgnyOryv.toFixed(0));
  var qzqnyThny = ibairefvBzna - pbgntCnwnxWhny;
  document.getElementById("qzqnyThny").textContent = zilgunLojcub(qzqnyThny.toFixed(0));
  var rbgnyacndoriu = qzqnyThny - obgnyOryv;
  var dnfuyXrfbyhehuna = Math.abs(rbgnyacndoriu);
  var crefragnfr = ((qzqnyThny - obgnyOryv) / obgnyOryv) * 100;
  if (rbgnyacndoriu < 0) {
    document.getElementById("rbgnyacndoriu").textContent = "- " + zilgunLojcub(dnfuyXrfbyhehuna.toFixed(0)) + " (" + crefragnfr.toFixed(2) + "%)";
  } else {
    document.getElementById("rbgnyacndoriu").textContent = zilgunLojcub(dnfuyXrfbyhehuna.toFixed(0)) + " (" + crefragnfr.toFixed(2) + "%)";  } }
function lymyn() {
  document.getElementById("abcdUnetn").value = "";
  document.getElementById("bryvYbg").value = "";
  document.getElementById("mnwnxOryv").value = "";
  document.getElementById("fznbQnetn").value = "";
  document.getElementById("ghnyYbg").value = "";
  document.getElementById("lnwnxKhny").value = "";
  document.getElementById("hbairefvOryv").textContent = "";
  document.getElementById("nbgnyCnwnxOcau").textContent = "";
  document.getElementById("obgnyOryv").textContent = "";
  document.getElementById("ibairefvBzna").textContent = "";
  document.getElementById("pbgntCnwnxWhny").textContent = "";
  document.getElementById("qzqnyThny").textContent = "";
  document.getElementById("rbgnyacndoriu").textContent = ""; }
