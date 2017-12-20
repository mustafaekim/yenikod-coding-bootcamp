/*
    The intent of the Façade is to provide a high-level interface (properties and methods)
        that makes a subsystem or toolkit easy to use for the client.

    Although an implementation may support methods with a wide range of behaviors, 
        only a "facade" or limited abstraction of these methods is presented to the public for use
*/

/* Complex parts */

function CPU() {
    this.freeze = function freeze() { console.log("Freezing CPU") }
    this.jump = function jump(position) { console.log("Jumping CPU ", position) }
    this.execute = function execute() { console.log("Executing... ") }
}

function Memory() {
    this.load = function load(position, data) { console.log("Loading memory") }
}

function HardDrive() {
    this.read = function read(lba, size) { console.log("Reading hard drive") }
}

/* Facade */

function ComputerFacade() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hd = new HardDrive();

    this.start = function start() {
        this.processor.freeze();
        this.ram.load(this.BOOT_ADDRESS, this.hd.read(this.BOOT_SECTOR, this.SECTOR_SIZE));
        this.processor.jump(this.BOOT_ADDRESS);
        this.processor.execute();
    }
}

/* Client */

let computer = new ComputerFacade();
computer.start();
