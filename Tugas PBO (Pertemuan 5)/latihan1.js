const sik = {
    kelas: "B",
    angkatan: "23",
    walidosen: "Wildan",
};

console.log(sik.kelas);
console.log(sik.angkatan);
console.log(sik.walidosen);

let ondragend = {
    nama: "Andi", // Added this object for reference in the next part
    pekerjaan: "developer",
};

let tampil = "nama saya " + ondragend.nama + ", saya bekerja sebagai " + ondragend.pekerjaan + ". Sehari-hari saya kebiasaan naik pesawat";

// Added missing dot operator before innerHTML
document.getElementById("objek").innerHTML = tampil;

// Corrected syntax for the mahasiswa object
let mahasiswa = {
    namaDepan: "Bintang",
    namaBelakang: "Hikmal",
    namaLengkap: function() { // Fixed function syntax
        return this.namaDepan + " " + this.namaBelakang;
    }
};

let tampilMhsd = "nama saya " + mahasiswa.namaDepan + ", nama lengkap saya adalah " + mahasiswa.namaLengkap();

// Again, added missing dot operator before innerHTML
document.getElementById("objek").innerHTML = tampilMhsd;

// Constructor function fixed by adding proper function declaration
function mahasiswaSIK(nama, kelas, angkatan) {
    this.nama = nama;
    this.kelas = kelas;
    this.angkatan = angkatan;
}

const mhs1 = new mahasiswaSIK("Bintang", "B", "2023");
const mhs2 = new mahasiswaSIK("Habibi", "B", "2023");
const mhs3 = new mahasiswaSIK("Keizha", "B", "2023");

console.log("nama mahasiswa pertama adalah " + mhs1.nama);
console.log("nama mahasiswa kedua adalah " + mhs2.nama); // Fixed log message
console.log("nama mahasiswa ketiga adalah " + mhs3.nama); // Fixed log message
