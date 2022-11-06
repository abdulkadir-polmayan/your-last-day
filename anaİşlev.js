import dayjs from "dayjs";

export function geriSayımİşlevi(hedefTarih) {
  const hedefTarihDayjs = dayjs(hedefTarih);
  const bugünDayjs = dayjs();

  return {
    saniye: kalanSaniye(bugünDayjs, hedefTarihDayjs),
    dakika: kalanDakika(bugünDayjs, hedefTarihDayjs),
    saat: kalanSaat(bugünDayjs, hedefTarihDayjs),
    gün: kalanGün(bugünDayjs, hedefTarihDayjs),
  };
}

function kalanSaniye(bugünDayjs, hedefTarihDayjs) {
  const saniye = hedefTarihDayjs.diff(bugünDayjs, "seconds") % 60;
  return başınaSıfırEkle(saniye, 2);
}
function kalanDakika(bugünDayjs, hedefTarihDayjs) {
  const dakika = hedefTarihDayjs.diff(bugünDayjs, "minutes") % 60;
  return başınaSıfırEkle(dakika, 2);
}
function kalanSaat(bugünDayjs, hedefTarihDayjs) {
  const saat = hedefTarihDayjs.diff(bugünDayjs, "days") % 24;
  return başınaSıfırEkle(saat, 2);
}
function kalanGün(bugünDayjs, hedefTarihDayjs) {
  const gün = hedefTarihDayjs.diff(bugünDayjs, "days") % 60;
  return gün.toString();
}

function başınaSıfırEkle(sayı, uzunluk) {
  const sayıString = sayı.toString();
  if (sayıString.length >= uzunluk) return sayıString;
  return "0".repeat(uzunluk - sayıString.length) + sayıString;
}
