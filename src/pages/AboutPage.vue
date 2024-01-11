<template>
  <div style="padding: 20px">
    <img
      src="../assets/doa/p01.png"
      style="border-radius: 16px"
      class="responsive cover"
    />
  </div>
  <h5 style="text-align: center">Halaman Tentang</h5>
  <div class="q-pa-md">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="info"
        label="Tentang Aplikasi"
        caption="Doa Anak"
      >
        <q-card>
          <q-card-section>
            <article style="text-align: justify">
              <p>
                App "Doa Untuk Anak" ini dibuat dan dibiayai oleh
                pelayananotomatis.com berdasarkan ebook dan ijin dari
                <a href="www.bisa.id">www.bisa.id</a>. Kami bisa dihubungi
                melalui:
                <a href="mailto:pelayanan.otomatis+cs@gmail.com"
                  >pelayanan.otomatis+cs@gmail.com</a
                >.
              </p>
              <p>
                Buku "Doa-doa Untuk Anak-anak” ini merupakan buku yang berisi 40
                doa harian yang perlu dihafal oleh anak-anak sedari kecil. Buku
                ini disusun dengan urutan aktifitas dari bangun tidur sampai
                tidur. kembali. Buku ini merupakan pegangan utama di BISA
                Learning Centre (BLC), pusat belajar: Bahasa Arab, Al Qur'an,
                dan ilmu Islam untuk anak-anak dan dewasa
              </p>
            </article>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item expand-separator icon="person" label="Credits">
        <q-card>
          <q-card-section>
            <span>Fayola Hayra Nareswari : Pengisi Suara Do'a</span>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item icon="assessment" label="Versi 2.1" disable>
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  padding: 12px;
}
h5 {
  font-weight: 500;
  padding: 0;
  margin: 0;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
