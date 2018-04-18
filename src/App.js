import React, { Component } from 'react'
import './App.css'
import Car from './domain/car.js'
import EventDispatcher from './application/eventDispatcher';

class App extends Component {

    state = {
        plates: [],
        currentPlate: ''
    }

    addCar = () => {
        const car = new Car(this.state.currentPlate)
        this.setState({
            plates: EventDispatcher.getEvents()
        })
    }

    udpateCurrentPlate = (event) => {
        this.setState({
            currentPlate: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <button className="btnAddCar" onClick={this.addCar}>Create car</button>
                <input type="text" onBlur={this.udpateCurrentPlate} />
                
                {
                    this.state.plates.map((plate) => 
                        <p key={plate.state.plate}>{plate.state.plate}</p>)
                }
            </div>
        )
    }
}

export default App
