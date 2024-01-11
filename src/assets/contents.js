const contents = [];
const daftarIsi = [
  "tidur", // 1
  "pakaian", // 2
  "wc", // 3
  "wc", // 4
  "adzan", // 5
  "adzan", // 6
  "pakaian", // 7
  "rumah", // 8
  "masjid", // 9
  "masjid", // 10
  "masjid",
  "rumah", // 11
  "makan", // 12
  "makan", // 13
  "bepergian", // 14
  "kendaraan", // 15
  "keberkahan", // 16
  "pasar", // 17
  "angin", // 18
  "halilintar", // 19
  "hujan", // 20
  "hujan", // 21
  "bersin", // 22
  "sakit", // 23
  "sakit", // 24
  "musibah", // 25
  "musibah", // 26
  "setan", // 27
  "syirik", // 28
  "ilmu", // 29
  "baik", // 30
  "kesulitan", // 31
  "marah", // 32
  "akhlak", // 33
  "ketika kondisi di luar harapan", // 34
  "puasa", // 35
  "kebaikan", // 36
  "orang tua", // 37
  "penutup majelis", // 38
  "tidur", // 39
];

const bgColor = [
  "#68c1d1",
  "#16a4be",
  "#ac7040",
  "#6b8a2f",
  "#2b8989",
  "#551e21",
  "#1d3a57",
  "#268b8f",
  "#43c1d9",
  "#435d51",
  "#937443",
  "#1d1c1b",
  "#82a3a6",
  "#897941",
  "#659256",
  "#313b38",
  "#9e8550",
  "#4cb6d0",
  "#6c3d27",
  "#2990a7",
  "#6c7696",
  "#55a3b7",
  "#356853",
  "#65584a",
  "#853f44",
  "#214766",
  "#4ca7b8",
  "#9d7a47",
  "#4b4144",
  "#20454d",
  "#795847",
  "#a19a57",
  "#54a2bb",
  "#a86842",
  "#996879",
  "#639dac",
  "#554d4a",
  "#388ea8",
  "#55a6bd",
  "#3d7f84",
  "#1c4e5c",
];

for (let i = 1; i <= 40; i++) {
  const d = `d${i.toString().padStart(2, "0")}`;
  const dSrc = require(`../assets/doa/${d.toString()}.png`);
  const soundSrc = require(`../assets/doa/audio/${d.toString()}.ogg`);

  contents.push({
    id: d,
    title: daftarIsi[i - 1],
    src: dSrc,
    backgroundColor: bgColor[i],
    voice: soundSrc,
    searchQuery: daftarIsi[i],
  });
}

export { contents, daftarIsi, bgColor };

export const options = [];

for (let i = 0; i <= 50; i++) {
  options.push({
    label: i,
    value: `h${i}`,
  });
}
