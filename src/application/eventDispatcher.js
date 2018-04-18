export default class EventDispatcher {

    static notify = (event) => {
        this.events
            ? this.events.push(event)
            : this.events = [event]
    }

    static getEvents = () => {
        return this.events;
    }
}