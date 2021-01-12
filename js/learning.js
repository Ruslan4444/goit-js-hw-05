class Guest {
  // Аналог функции-конструктора
  constructor(name, roomNumber) {
    this.name = name;
    this.roomNumber = roomNumber;
  }

  // Аналог Guest.prototype.getFullInfo
  getFullInfo() {
    console.log(`
      Guest ${this.name}
      Room number ${this.roomNumber}
    `);
  }
}

const mango = new Guest('Mango', 26);

mango.getFullInfo();
// Guest Mango
// Room number 26