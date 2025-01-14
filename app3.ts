class Car {
    private make: string;
    private model: string;
    private year: number;
    protected mileage: number;

    constructor(make: string, model: string, year: number, mileage: number = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(miles: number): void {
        this.mileage += miles;
    }

    getCarDetails(): string {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Mile: ${this.mileage}`;
    }
}

class ElectricCar extends Car {
    batteryLevel: number;
    charge: number;


    constructor(make: string, model: string, year: number, mileage: number = 0, batteryLevel: number = 100, charge: number=100) {
        super(make, model, year, mileage);
        this.batteryLevel = batteryLevel;
        this.charge=charge;
    }

    drive(miles: number): void {
        const miletodrive = Math.min(miles, this.batteryLevel);
        this.mileage += miletodrive
        this.batteryLevel -= miletodrive;
        this.charge -= miletodrive * 0.346;
    }
    getCarDetails(): string {
        return `${super.getCarDetails()} Charge: ${this.charge}`}

}
