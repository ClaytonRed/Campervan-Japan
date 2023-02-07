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
Kagoshima.description = "You're on the outskirts of a seaside city on Japan's Kyushu Island.<br>You're staying at a campsite here, in your Campervan.<br><br>Take the road North to get to Kirishima Kinkowan National Park...";

const NorthRouteOne = new Room("North Route 1");
NorthRouteOne.description = "This road stretches out far to the North.<br>Follow it to reach Kirishima Kinkowan National Park.<br><br>The road South returns you to Kagoshima...";

const KirishimaKinkowanNationalPark = new Room("Kirishima Kinkowan National Park");
KirishimaKinkowanNationalPark.description = "You're in a scenic setting, surrounded by sleepy volcanic mountains, long hiking trails and natural hot springs.<br><br>It is also a crossroads...<br><br>North takes you to Kumamoto, East to Miyazaki and West to Sogino Falls.<br>The road South returns you to Kagoshima...";

const WestRouteOne = new Room("West Route One");
WestRouteOne.description = "National Route 268 stretches far to the west coast, you're driving alongside the Sendai River.<br><br>This is the road to Sogino Falls...";

const SoginoFalls = new Room("Sogino Falls");
SoginoFalls.description = "Surrounded by deep red leaves, there is a wide waterfall crashing into the Sendai River.<br><br>The road East will retun you to Kirishima Kinkowan National Park...";

const EastRouteOne = new Room("East Route 1");
EastRouteOne.description = "National Route 268 stretches from West coast to the East coast.<br><br>Out of your left window you can see forest covered hills, though the geography is much calmer out of your right window.<br><br>There is a small town or a 7/11 every few miles.<br><br>This is the road to Miyazaki..."

const Miyazaki = new Room("Miyazaki");
Miyazaki.description = "You're in the capital city of Miyazaki Prefecture.<br><br>This prefecture is known for its beautiful mountain and coastal scenery,<br>of which you are already familiar.<br><br>Maybe you should go for a coastal drive?<br><br>Kirishima Kinkowan National Park is a short drive to the West..."

const NorthRouteTwo = new Room("North Route 2");
NorthRouteTwo.description = "This road stretches further to the North still, and will get you to Kumamoto.<br><br>You can come off the main road here and turn East, towards Takachiho.<br>This is where you can find Takachiho Gorge and Amano Iwato Shrine..."

const Takachiho = new Room("Takachiho Region");
Takachiho.description = "Takachiho Region is the home of Takachiho Gorge, this ancient gorge is full of flowing crystal-clear mountain water.<br><br>Up a steep climb, and sheltered in a cave is the Amano Iwato Shrine.<br>This shrine commemorates the legend of the Shinto sun goddess Amaterasu, who hid in the cave when angered, plunging the world into darkness...<br><br>Turning back onto the road and driving North will take you to Kumamoto... "

const Kumamoto = new Room("Kumamoto");
Kumamoto.description = "Kumamoto is a city renowned for it's grand castle,<br>authentic foods and restorative hot-spring baths.<br><br>You've had a long journey...<br><br>Maybe stay a while?"

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
	// SoginoFalls.addItemToInventory(SoginoStamp);

//linking rooms together
Kagoshima.linkRoom("north", NorthRouteOne);

NorthRouteOne.linkRoom("north", KirishimaKinkowanNationalPark);
NorthRouteOne.linkRoom("south", Kagoshima);

KirishimaKinkowanNationalPark.linkRoom("north", NorthRouteTwo)
KirishimaKinkowanNationalPark.linkRoom("east", EastRouteOne)
KirishimaKinkowanNationalPark.linkRoom("south", NorthRouteOne)
KirishimaKinkowanNationalPark.linkRoom("west", WestRouteOne)

WestRouteOne.linkRoom("east", KirishimaKinkowanNationalPark)
WestRouteOne.linkRoom("west", SoginoFalls)

SoginoFalls.linkRoom("east", WestRouteOne)

EastRouteOne.linkRoom("west", KirishimaKinkowanNationalPark)
EastRouteOne.linkRoom("east", Miyazaki)

Miyazaki.linkRoom("west", EastRouteOne)

NorthRouteTwo.linkRoom("south", KirishimaKinkowanNationalPark)
NorthRouteTwo.linkRoom("north", Kumamoto)
NorthRouteTwo.linkRoom("east", Takachiho)

Takachiho.linkRoom("west", NorthRouteTwo)

Kumamoto.linkRoom("south", NorthRouteTwo)

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
	roomDescriptionElement.innerHTML = roomDescription;
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