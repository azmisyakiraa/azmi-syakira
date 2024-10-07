class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
        this.muatan = 0;
        this.siapBerlayar = false;
    }

    infoKapal() {
        return `Kapal ini bernama ${this.nama} yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} orang, memiliki dimensi ${this.panjang} meter x ${this.lebar} meter.`;
    }

    cekKondisiKapal() {
        return this.siapBerlayar
            ? `${this.nama} siap berlayar.`
            : `${this.nama} belum siap berlayar.`;
    }

    cekMuatan(muatan) {
        this.muatan = muatan;
        return muatan <= this.kapasitas
            ? `Muatan sebesar ${muatan} orang sesuai kapasitas.`
            : `Muatan ${muatan} orang melebihi kapasitas!`;
    }

    _statusKelayakan(usia) {
        return usia < 20 ? "layak" : "tidak layak";
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, usia) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.usia = usia;
        this.tiketTersedia = false;
    }

    cekKelayakan() {
        return `Kapal ${this.nama} berusia ${this.usia} tahun dan status kelayakan: ${this._statusKelayakan(this.usia)}.`;
    }

    infoTiket() {
        return this.tiketTersedia
            ? "Tiket tersedia untuk perjalanan ini."
            : "Tiket belum tersedia.";
    }
}

class KapalBarang extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, bebanMaks) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.bebanMaks = bebanMaks;
    }

    cekMuatan(muatan, beban) {
        return muatan <= this.kapasitas && beban <= this.bebanMaks
            ? `Muatan dan beban sesuai untuk kapal ${this.nama}.`
            : `Muatan ${muatan} orang atau beban ${beban} ton melebihi batas kapal ${this.nama}!`;
    }
}

class KapalIkan extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, jangkaWaktuLaut) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.jangkaWaktuLaut = jangkaWaktuLaut;
    }

    infoKapal() {
        return `Kapal ${this.nama} adalah kapal ikan yang dapat beroperasi selama ${this.jangkaWaktuLaut} hari di laut.`;
    }
}

class KapalPesiar extends KapalPenumpang {
    constructor(nama, kapasitas, panjang, lebar, usia, fasilitas) {
        super(nama, "Pesiar", kapasitas, panjang, lebar, usia);
        this.fasilitas = fasilitas;
    }

    infoKapal() {
        return `Kapal pesiar ${this.nama} berusia ${this.usia} tahun dengan kapasitas ${this.kapasitas} orang dan dilengkapi fasilitas: ${this.fasilitas.join(", ")}.`;
    }
}

class KapalSelam extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, kedalamanMaks) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.kedalamanMaks = kedalamanMaks;
    }

    infoKapal() {
        return `Kapal selam ${this.nama} dapat menyelam hingga kedalaman ${this.kedalamanMaks} meter.`;
    }

    cekKondisiKapal() {
        return this.siapBerlayar
            ? `Kapal selam ${this.nama} siap menyelam.`
            : `Kapal selam ${this.nama} belum siap menyelam.`;
    }
}

// Membuat instance dari beberapa kelas
let kapalPenumpang = new KapalPenumpang("Budiono", "Ferry", 500, 200, 100, 15);
let kapalBarang = new KapalBarang("Logistik", "Kargo", 50, 300, 50, 1000);
let kapalIkan = new KapalIkan("Nusantara", "Ikan", 15, 30, 10, 10);
let kapalPesiar = new KapalPesiar("Majestic", 3000, 350, 40, 10, ["kolam renang", "restoran", "bioskop"]);
let kapalSelam = new KapalSelam("Poseidon", "Selam", 100, 80, 15, 500);


console.log(kapalPenumpang.infoKapal());
console.log(kapalPenumpang.cekKondisiKapal());
console.log(kapalPenumpang.cekMuatan(450));
console.log(kapalPenumpang.cekKelayakan());
console.log(kapalPenumpang.infoTiket());

console.log(kapalBarang.cekMuatan(40, 900)); 
console.log(kapalIkan.infoKapal()); 
console.log(kapalPesiar.infoKapal()); 
console.log(kapalSelam.cekKondisiKapal()); 

document.getElementById("objek").innerHTML = kapalPenumpang.infoKapal();
