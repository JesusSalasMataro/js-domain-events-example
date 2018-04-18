import EventDispatcher from '../application/eventDispatcher.js'
import CarCreatedEvent from '../application/events/carCreatedEvent.js'

export default class Car {

    constructor(plate) {
        this.state = {
            plate: plate
        }

        EventDispatcher.notify(new CarCreatedEvent(plate))
    }

    setColor(color) {
        this.state = {
            plate: this.state.plate,
            color: color,
            fuelType: this.state.fuelType
        }
    }

    setFuelType(fuelType) {
        this.state = {
            plate: this.state.plate,
            color: this.state.color,
            fuelType: fuelType
        }
    }
}