class SensorPasut {
    // Private field for status
    #status;

    constructor(nama, lokasi) {
        this.nama = nama;
        this.lokasi = lokasi;
        this.#status = "mati"; // Default status is "mati"
    }

    // Method to activate the sensor
    aktifkan() {
        this.#status = "aktif";
        return `Sensor ${this.nama} di ${this.lokasi} telah diaktifkan.`;
    }

    // Method to deactivate the sensor
    nonaktifkan() {
        this.#status = "mati";
        return `Sensor ${this.nama} di ${this.lokasi} telah dimatikan / dinonaktifkan.`;
    }

    // Method to get the current status of the sensor
    getStatus() {
        return `Status sensor ${this.nama} di ${this.lokasi}: ${this.#status}.`;
    }
}

// Example usage:
let sensor1 = new SensorPasut("Pasut A", "Pantai Barat");
console.log(sensor1.getStatus()); // Output: Status sensor Pasut A di Pantai Barat: mati.
console.log(sensor1.aktifkan());  // Output: Sensor Pasut A di Pantai Barat telah diaktifkan.
console.log(sensor1.getStatus()); // Output: Status sensor Pasut A di Pantai Barat: aktif.
console.log(sensor1.nonaktifkan()); // Output: Sensor Pasut A di Pantai Barat telah dimatikan / dinonaktifkan.
console.log(sensor1.getStatus()); // Output: Status sensor Pasut A di Pantai Barat: mati.

// Class for tracking sensor age
class UsiaSensor extends SensorPasut {
    constructor(nama, lokasi, usia) {
        super(nama, lokasi); // Call the parent constructor
        this.usia = usia; // Age of the sensor
    }

    // Method to get the age of the sensor
    getUsia() {
        return `Usia sensor ${this.nama} di ${this.lokasi}: ${this.usia} tahun.`;
    }
}

// Example usage:
let sensor2 = new UsiaSensor("Pasut B", "Pantai Timur", 5);
console.log(sensor2.getUsia()); // Output: Usia sensor Pasut B di Pantai Timur: 5 tahun.
console.log(sensor2.getStatus()); // Output: Status sensor Pasut B di Pantai Timur: mati.
console.log(sensor2.aktifkan()); // Output: Sensor Pasut B di Pantai Timur telah diaktifkan.
console.log(sensor2.getStatus()); // Output: Status sensor Pasut B di Pantai Timur: aktif.
