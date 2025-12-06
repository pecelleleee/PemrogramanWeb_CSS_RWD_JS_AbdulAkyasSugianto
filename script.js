// =====================
// INTERAKSI KLIK JUDUL
// =====================
const judul = document.querySelectorAll('.judul');

judul.forEach((item) => {
  item.addEventListener('click', () => {
    const paragraf = item.nextElementSibling; // paragraf setelah judul

    // Jika paragraf masih tampil atau belum diatur
    if (!paragraf.style.display || paragraf.style.display === 'block') {
      const tanya = confirm("Apakah Anda ingin menyembunyikan penjelasan ini?");
      if (tanya) {
        paragraf.style.display = "none";
      }
    }
    // Jika paragraf sedang disembunyikan
    else {
      const tanya2 = confirm("Apakah Anda ingin menampilkan penjelasan ini?");
      if (tanya2) {
        paragraf.style.display = "block";
      }
    }

    
  });
});

// =====================
// LOGIKA MODE TAMPILAN
// =====================
const modeBtn = document.getElementById('modeBtn');
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle("berantakan");
});
