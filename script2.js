/**
 * Created by h205p2 on 1/10/17.
 */
//objects

//opponents
var enemy1 = new Opponent("enemy 1","there is an ememy",10,4,"item1");
var enemy2 = new Opponent("enemy 2","there is an enemy",10,2,"item2");
var enemy3 = new Opponent("enemy 3","there is an enemy",10,2,"item3");
// must make more opponents or HP doesn't work with multiple of the same type

//rooms
var room0 = new Room("outside","you are in room0","",[2,false,false,false]); // exits array is N,E,S,W

var room1 = new Room("first room","you are in room 1",enemy1,[4,2,false,false]);
var room2 = new Room("second room","you are in room 2",enemy1,[5,3,0,1]);
var room3 = new Room("third room","you are in room 3",enemy1,[6,false,false,2]);

var room4 = new Room("fourth room","you are in room 4",enemy2,[7,5,1,false]);
var room5 = new Room("fifth room","you are in room 5",enemy2,[8,6,2,4]);
var room6 = new Room("sixth room","you are in room 6",enemy2,[9,false,3,5]);

var room7 = new Room("seventh room","you are in room 7",enemy3,[false,8,4,false]);
var room8 = new Room("eighth room","you are in room 8",enemy3,[10,9,5,7]);
var room9 = new Room("ninth room","you are in room 9",enemy3,[false,false,6,8]);

var room10 = new Room("tenth room","you are in room 10","",[false,false,8,false]);

var rooms = [room0,room1,room2,room3,room4,room5,room6,room7,room8,room9,room10];

//you
var you = new Character(room0,20,5,"you lose! try again.");

