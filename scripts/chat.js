//adding new chat documents



//setting  up real time listerner to get new chats



//updating the username

//updating the room






class Chatroom{

	constructor(room, username){

		this.room = room;
		this.username = username;
		this.chats = db.collection('chats');

	}
}

