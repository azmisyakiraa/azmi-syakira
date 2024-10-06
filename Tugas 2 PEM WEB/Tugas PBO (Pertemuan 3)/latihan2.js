console.log; 
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


let kapalPenumpang = new KapalPenumpang("Budiono", "Ferry", 500, 200, 100, 15);


console.log(kapalPenumpang.infoKapal());
console.log(kapalPenumpang.cekKondisiKapal());
console.log(kapalPenumpang.cekMuatan(450));
console.log(kapalPenumpang.cekKelayakan());
console.log(kapalPenumpang.infoTiket());


document.getElementById("objek").innerHTML = kapalPenumpang.infoKapal();
