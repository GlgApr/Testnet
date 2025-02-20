(function autoClickImprovisasi() {
  const targetSelector = '.relative.w-24.h-16.rounded-full.cursor-pointer';
  const checkInterval = 2500; // Periksa setiap 2.5 detik
  const maxClicks = 5; // Batasi jumlah klik untuk menghindari loop tak terbatas
  let clickCount = 0;

  function isDisconnected(imgElement) {
    // Fungsi terpisah untuk memeriksa status terputus
    return imgElement &&
           imgElement.classList.contains("brightness-0") &&
           imgElement.classList.contains("invert");
  }

  function clickTarget(targetElement) {
    // Fungsi terpisah untuk melakukan klik dan menangani kesalahan
    try {
      targetElement.click();
      console.log("Target diklik!");
      clickCount++;
    } catch (clickError) {
      console.error("Gagal mengklik target:", clickError);
    }
  }

  function checkAndClick() {
    if (clickCount >= maxClicks) {
      console.log("Batas klik tercapai. Menghentikan skrip.");
      clearInterval(intervalId); // Hentikan interval
      return;
    }

    try {
      const target = document.querySelector(targetSelector);

      if (!target) {
        console.log("Target tidak ditemukan.");
        return;
      }

      console.log("Target ditemukan!");
      const img = target.querySelector('img[alt="Circle Image"]');

      if (isDisconnected(img)) {
        console.log("Tidak terhubung! Mengklik...");
        clickTarget(target);
      } else {
        console.log("Sudah terhubung.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  }

  // Jalankan pemeriksaan awal segera
  checkAndClick();

  // Kemudian atur interval dan simpan ID-nya
  const intervalId = setInterval(checkAndClick, checkInterval);

  // Opsi: Hentikan skrip setelah waktu tertentu (misalnya, 10 menit)
  // setTimeout(() => {
  //   console.log("Waktu habis. Menghentikan skrip.");
  //   clearInterval(intervalId);
  // }, 600000);
})();
