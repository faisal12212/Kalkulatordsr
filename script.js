function hitungBeli() {
  var harga = parseFloat(document.getElementById("beli-harga").value);
  var lot = parseInt(document.getElementById("beli-lot").value);
  var konversi = parseFloat(document.getElementById("beli-konversi").value);
  var pajak = parseFloat(document.getElementById("beli-pajak").value);

  var totalHarga = harga * lot * konversi;
  var totalPajak = (totalHarga * pajak) / 100;
  var totalBeli = totalHarga + totalPajak;

  document.getElementById("hasil").innerHTML = "Total beli saham: Rp" + totalBeli.toFixed(2);
}

function hitungJual() {
  var harga = parseFloat(document.getElementById("jual-harga").value);
  var lot = parseInt(document.getElementById("jual-lot").value);
  var konversi = parseFloat(document.getElementById("jual-konversi").value);
  var pajak = parseFloat(document.getElementById("jual-pajak").value);
  var biayaTambahan = parseFloat(document.getElementById("biaya-tambahan").value);

  var totalHarga = harga * lot * konversi;
  var totalPajak = (totalHarga * pajak) / 100;
  var totalJual = totalHarga - totalPajak - biayaTambahan;

  document.getElementById("hasil").innerHTML = "Total jual saham: Rp" + totalJual.toFixed(2);
}
