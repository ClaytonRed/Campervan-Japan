const userInputElement = document.getElementById('user-input');
const roomDescriptionElement = document.getElementById("room-description");
const roomNameElement = document.getElementById("room-name")
const actionInformationElement = document.getElementById('action-information');

class Room {
	constructor(name) {
		this._name = name;
		this._description = "";
		this._linkedRooms = {};
		this._character = "";
		// this._item = "";
		this._inventory = [];
    }
  
    get name() {
      	return this._name;
    }
  
    get description() {
      	return this._description;
    }
  
    get character() {
      	return this._character
    }
  
    set name(value) {
      	this._name = value;
    }
  
    set description(value) {
      	this._description = value;
    }
  
    set character(value) {
     	 this._character = value;
    }

    set item(value) {
      	this._item = value;
    }

	addItemToInventory() {

	}

	getItemFromInventory() {

	}

	removeItemFromInventory() {

	}
  




	// const item = currentRoom.getItemFromInventory(itemName);
	// 		 * 
	// 		 * playerInventory.push(item);
	// 		 * 
	// 		 * currentRoom.removeItemFromInventory(item);

	/**
	 * This method takes a direction string and an instance of a Room and assigns
	 * the room to that direction.
	 * 
	 * @param {string} direction
	 * @param {Room} roomToLink
	 */
    linkRoom(direction, roomToLink) {
      	this._linkedRooms[direction] = roomToLink;
    }
  
    getDetails() {
		const entries = Object.entries(this._linkedRooms);
		let details = []
		for (const [direction, room] of entries) {
			let text = room._name + " is to the " + direction;
			details.push(text);
		}
		return details;
    }

	/**
	 * This method returns a linked room for the direction passed in
	 * 
	 * @param {string} direction
	 */
    move(direction) {
		if (this._linkedRooms[direction]) {
			return this._linkedRooms[direction];
		} else {
			alert("You can't go that way");
			return this;
		}
    }
}
  
class Item {
	constructor(name) {
		this._name = name,
		this._description = ""
	}
  
    set name(value) {
      	this._name = value;
    }
  
    set description(value) {
      	this._description = value;
    }
  
    get name() {
     	 return this._name;
    }
  
    get description() {
     	 return this._description;
    }
}	
  
class Character {
	constructor(name) {
		this._name = name
		this._description = ""
		this._conversation = ""
    }

	set name(value) {
		this._name = value;
    }
  
    set description(value) {
      	this._description = value;
    }
  
    set conversation(value) {
      	this._conversation = value;
    }
    get name() {
      	return this._name;
    }
  
    get description() {
      	return this._description;
    }
  
    get conversation() {
      	return this._conversation;
    }

    describe() {
      	return "You have met " + this._name + ", " + this._name + " is " + this._description;
    }
  
    converse() {
      	return this._name + " says " + "'" + this._conversation + "'";
    }
}
  
// Creating Rooms
const Kagoshima = new Room("Kagoshima");
Kagoshima.description = "a seaside city on Japan's Kyushu Island. You're staying at a campsite here, in your Campervan.";

const NorthRouteOne = new Room("North Route 1");
NorthRouteOne.description = "This road stretches out North. Follow it to reach Kirishima Kinkowan National Park";

const KirishimaKinkowanNationalPark = new Room("Kirishima Kinkowan National Park");
KirishimaKinkowanNationalPark.description = "You're in a scenic setting featuring volcanic mountains, long hiking trails and natural hot springs";

const WestRouteOne = new Room("West Route One");
WestRouteOne.description = "National Route 268 stretches far to the west coast. This is the road to Sogino Falls";

const SoginoFalls = new Room("Sogino Falls");
SoginoFalls.description = "a 210m wide waterfall in the Sendai River";

// Creating Items
const SoginoStamp = new Item("Sogino Stamp");
SoginoStamp.description = "a stamp from Sogino Falls";

const Stick = new Item("Stick");
Stick.description = "long and sticky"

// Creating Characters
const Hiroshi = new Character("Hiroshi");
Hiroshi.description = "A happy man with a friendly face. He is sitting on a rock, enjoying the view and the quiet";
Hiroshi.conversation = "ey up duck. want sum Hendos for that pie or summut?";

// Allocating items to rooms
	// SoginoFalls.item = SoginoStamp;
	// Kagoshima.item = Stick;
SoginoFalls.addItemToInventory(SoginoStamp);

//linking rooms together
Kagoshima.linkRoom("north", NorthRouteOne);

NorthRouteOne.linkRoom("north", KirishimaKinkowanNationalPark);
NorthRouteOne.linkRoom("south", Kagoshima);

// KirishimaKinkowanNationalPark.linkRoom("north", NorthRouteTwo)
// KirishimaKinkowanNationalPark.linkRoom("east", EastRouteOne)
KirishimaKinkowanNationalPark.linkRoom("south", NorthRouteOne)
KirishimaKinkowanNationalPark.linkRoom("west", WestRouteOne)

WestRouteOne.linkRoom("east", KirishimaKinkowanNationalPark)
WestRouteOne.linkRoom("west", SoginoFalls)

SoginoFalls.linkRoom("east", WestRouteOne)

/**
 * currentroom
 * get room description
 * put room name into room name element
 * put room description into room name description
 * when user inputs, handle it
 * rerun game loop
 */

let currentRoom = Kagoshima;

// player stuff
const playerInventory = [];

/**
 * @param {Item} item
 */
function addItemToInventory(item) {
	playerInventory.push(item);
}

/**
 * @param {Item} item
 */
function removeItemFromInventory(item) {
	playerInventory = playerInventory.filter(inventoryItem => inventoryItem !== item);
}

/**
 * This item gets an item from the inventory
 * 
 * @param {string} itemName
 */
function getItemFromInventory(itemName) {
	return playerInventory.find(item => item.name.toLowerCase() === itemName);
}

playerInventory.push(Stick);

/**
 * update the html elements with current room name and description
 */
function displayRoomInfo() {
	const roomName = currentRoom.name;
	const roomDescription = currentRoom.description;
	
	roomNameElement.innerText = roomName;
	roomDescriptionElement.innerText = roomDescription;
}

function gameLoop() {
	userInputElement.value = '';
	userInputElement.focus();

	actionInformationElement.innerText = '';
	displayRoomInfo();

	// Check win condition
	// Check the player has 3 stamps in their inventory
}

/**
 * This method handles input given by the user.
 * It has a switch statement https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
 * And that determines how to handle the user's command
 * 
 * @param {string} command
 * @param {string[]} args
 * 
 * command: east
 * args: examine wall
 * args: get cup
 */
function handleInput(command, args) {
	switch (command) {
		case 'north':
		case 'east':
		case 'south':
		case 'west':
			currentRoom = currentRoom.move(command);

			break;

		case 'get':
			const [ itemName ] = args;
			console.log(getItemFromInventory(itemName));

			// This would be getting the item from the room inventory and then .push into the player inventory
			/**
			 * const item = currentRoom.getItemFromInventory(itemName);
			 * 
			 * playerInventory.push(item);
			 * 
			 * currentRoom.removeItemFromInventory(item);
			 */
			break;

		default:
			actionInformationElement.innerText = `Command ${ command } not found`;

			break;
	}

	gameLoop();
}

function startGame() {
	document.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			const userInput = userInputElement.value.toLowerCase(); // examine wall
			const [command, ...args] = userInput.split(' '); // ['examine', 'wall']

			handleInput(command, args);
		}
	});

	gameLoop();
}

startGame();