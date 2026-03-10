class Car{
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails){
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo(){
        const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk state: ${trunkStatus}`);
    }

    go(){
        if(this.isTrunkOpen){
            console.log('You can`t move while trunk is open')
        } else{
            if(this.speed < 200){
                this.speed+=5;
        }   else {console.log('Go slower')}}
    }
    break(){
        if(this.speed > 0){
            this.speed-=5;
        } else {console.log('Go faster')}
    }
    openTrunk(){
        if(this.speed!==0){
            console.log('Stop first')
        }
        else {this.isTrunkOpen=true};
    }
    closeTrunk(){
        this.isTrunkOpen=false;
    }
}

const car1 = new Car({
    brand: 'Toyota', model: 'Corolla'
})
const car2 = new Car({
    brand: 'Tesla', model: 'Model 3'
})

car1.go();
car1.go();
car1.go();
car1.break();

car2.go();
car2.go();
car2.go();
car2.break();

car1.displayInfo();
car2.displayInfo();

class RaceCar extends Car{
    acceleration = 0;
    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }
    go(){
        if(this.speed < 300){
            this.speed += this.acceleration;
        }
    }
    openTrunk() {
        console.log('Race cars do not have a trunk.');
    }

    closeTrunk() {
        console.log('Race cars do not have a trunk.');
    }
}

const raceCar = new RaceCar({brand: 'McLaren', model: 'F1', acceleration: 50})
raceCar.go();
raceCar.go();
raceCar.go();
raceCar.go();
raceCar.openTrunk();
raceCar.break();
raceCar.displayInfo();