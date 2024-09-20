// Ambil elemen-elemen dari form dan tabel
const form = document.getElementById('pendaftaranForm');
const inputNama = document.getElementById('nama');
const inputNIM = document.getElementById('NIM');
const inputKelas = document.getElementById('Kelas');
const inputAlamat = document.getElementById('Alamat');

// Ambil elemen radio button untuk jenis kelamin
const radioLakiLaki = document.getElementById('lakiLaki');
const radioPerempuan = document.getElementById('perempuan');

// Ambil elemen-elemen di tabel untuk menampilkan data
const tulisNama = document.getElementById('tulisNAMA');
const tulisNIM = document.getElementById('tulisNIM');
const tulisKelas = document.getElementById('tulisKELAS');
const tulisJenisKelamin = document.getElementById('tulisJENISKELAMIN');
const tulisAlamat = document.getElementById('tulisALAMAT');

// Tambahkan event listener untuk form submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman saat form dikirim

    // Ambil nilai dari input
    const nama = inputNama.value;
    const nim = inputNIM.value;
    const kelas = inputKelas.value;
    const alamat = inputAlamat.value;

    // Cek jenis kelamin yang dipilih
    let jenisKelamin = '';
    if (radioLakiLaki.checked) {
        jenisKelamin = radioLakiLaki.value;
    } else if (radioPerempuan.checked) {
        jenisKelamin = radioPerempuan.value;
    }

    // Tampilkan nilai-nilai di tabel
    tulisNama.textContent = nama;
    tulisNIM.textContent = nim;
    tulisKelas.textContent = kelas;
    tulisJenisKelamin.textContent = jenisKelamin;
    tulisAlamat.textContent = alamat;

    // Reset form setelah submit (opsional)
    form.reset();
});
