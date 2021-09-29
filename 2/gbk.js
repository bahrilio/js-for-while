var tanya = true;
while (tanya) {
  var hasil = "";
  const MENANG = "MENANG !";
  const KALAH = "KALAH !";
  const SERI = "SERI";

  const BATU = "batu";
  const GUNTING = "gunting";
  const KERTAS = "kertas";

  // menangkap pilihan player
  var user = prompt("Pilihan : batu, kertas, gunting");
  user = user.toLowerCase();

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = BATU;
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = KERTAS;
  } else {
    comp = GUNTING;
  }
  console.log(comp);

  // menentukan rules
  if (user == comp) {
    hasil = SERI;
  } else if (user == BATU) {
    if (comp == GUNTING) {
      hasil = MENANG;
    } else {
      hasil = KALAH;
    }
  } else if (user == GUNTING) {
    if (comp == BATU) {
      hasil = KALAH;
    } else {
      hasil = MENANG;
    }
  } else if (user == KERTAS) {
    if (comp == GUNTING) {
      hasil = KALAH;
    } else {
      hasil = MENANG;
    }
  } else {
    hasil = "Memasukan pilihan yang salah !!!";
  }

  // tampilkan hasilnya
  user = user.toUpperCase();
  comp = comp.toUpperCase();
  alert("Kamu memilih : " + user + "\nComputer memilih : " + comp + "\nMaka Hasilnya : Kamu " + hasil);

  tanya = confirm("lagi ?");
}

alert("terimakasih sudah bermain dengan saya :v ");
