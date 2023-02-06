class Character {
    constructor(name, description, pronoun, conversation) {
        this._name = name;
        this._description = description;
        this._pronoun = pronoun;
        this._conversation = conversation;
    }

    decribe() {
        return `${this._name} is ${this._description}`;
    }

    talk() {
        return `${this._name} says ${this.conversation}`;
    }
}

class Room {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {}
    }

    describe() {
        return this._description;
    }

    linkRooms(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink
    }
}

const Shrek = new Character("Shrek", "big, fat, and green.", "it", "Get out of my swamp!");
const Donkey = new Character("Donkey", "a talking Donkey", "he", "I'm a Donkey!");

const Kitchen = new Room("Kitchen", "There is green stuff everywhere, it reeks and overall it is pretty disgusting")
const LivingRoom = new Room("Living room", "It is very messy and nothing is organised")

LivingRoom.linkRooms("north", Kitchen)
Kitchen.linkRooms("south", LivingRoom)



document.getElementById("textcontent").innerHTML = Kitchen.describe();
