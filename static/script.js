// Fungsi untuk toggle (menampilkan/menyembunyikan) menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Function to toggle the navigation menu when the hamburger is clicked
function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
}

// Fungsi untuk mencari video di YouTube menggunakan YouTube Data API
function searchVideo() {
    const searchQuery = document.getElementById('search').value.trim(); // Ambil kata kunci pencarian
    const videoFrame = document.getElementById('video-frame');
    
    if (searchQuery.length > 0) {
        // URL API YouTube Data untuk pencarian video berdasarkan kata kunci
        const apiKey = 'AIzaSyC9U-wWlxOrYpAgrdb8Ek6U2axrgPqUoTk'; // Ganti dengan API Key Anda
        const apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=1&type=video&key=${apiKey}`;

        // Melakukan fetch data dari YouTube API
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Terjadi masalah dengan permintaan API');
                }
                return response.json();
            })
            .then(data => {
                if (data.items && data.items.length > 0) {
                    // Mendapatkan ID video dari hasil pencarian
                    const videoId = data.items[0].id.videoId;
                    // Menampilkan video pertama dari hasil pencarian di iframe
                    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
                } else {
                    alert('Tidak ditemukan video dengan kata kunci tersebut.');
                }
            })
            .catch(error => {
                console.error('Error fetching data from YouTube API:', error);
                alert('Terjadi kesalahan saat memuat video.');
            });
    } else {
        alert('Silakan masukkan kata kunci pencarian.');
    }
}
// Array teks untuk About Me yang akan berubah-ubah
const aboutTexts = [
    "Saya terlalu sibuk dengan kode sampai lupa makan... untung masih bisa hidup!",
    "Kadang hidup itu penuh misteri kayak kenapa komputer bisa tiba-tiba hang",
    "Pernah nyalain komputer 3 kali baru sadar kalau monitornya mati.",
    "Cinta itu seperti bug, kita coba perbaiki, tapi malah tambah banyak.",
    "Lagi debugging tapi malah ikut mikirin hidup.",
    "Kalau hidupmu error coba clear cache perasaanmu dulu",
    "Cinta itu kayak kode kalau nggak valid ya nggak jalan.",
    "Jangan tanya kenapa aku masih single,coba inspect element hidupku dulu.",
    "Hidup tanpa password itu kayak pacaran tanpa status, rawan ditembus orang.",
    "Dia pergi? Biasa, user kadang disconnect tanpa alasan.",
    "Jangan salahkan aku nge-hack, salahin aja firewal kamu yang terlalu lemah.",
    "Aku nggak suka basa-basi, aku lebih suka langsung bypass",
    "Hati-hati sama aku, sekali 'inject' perasaan, langsung nempel selamanya.",
    "Hati kamu terenkripsi? Gampang, tinggal brute force pakai cinta.",
    "Aku bukan jomblo, cuma lagi nge-hack hati yang tepat."
];

// Fungsi untuk memilih teks acak
function getRandomAboutText() {
    const randomIndex = Math.floor(Math.random() * aboutTexts.length);
    return aboutTexts[randomIndex];
}

// Menampilkan teks acak pada elemen About Me saat halaman di-refresh
document.addEventListener("DOMContentLoaded", () => {
    const aboutElement = document.getElementById("about-text");
    aboutElement.textContent = getRandomAboutText();
});
