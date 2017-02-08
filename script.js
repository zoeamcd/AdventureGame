/**
 * Created by h205p2 on 11/30/16.
 */
//object constructors

function Room(name,description,contents,exits){
    this.name = name;
    this.description = description;
    this.contents = contents;
    this.exits =exits;
}

function Character(location,hitPoints,attack,message){
    this.location = location;
    this.hitPoints = hitPoints;
    this.attack = attack;
    this.message = message;
    this.isDead = false;
    this.inventory = [];
    this.addItem = function(item){
        this.inventory.push(item);
    }
}

function Opponent(name,description,hitPoints,attack,item){
    this.name = name;
    this.description = description;
    this.hitPoints = hitPoints;
    this.attack = attack;
    this.message = "you tamed "+this.name + ". it gave you " + item + "!";
    this.item = item;
    this.fight = function(){
        $(document).ready(function() {
            $('#text4').hide();
        });
        $(document).ready(function() {
            $('#text5').hide();
        });
        if(Math.floor(Math.random()*2)){
            you.hitPoints -= this.attack;
            document.getElementById("text5").innerHTML = "the " + this.name + " hit you!";
            document.getElementById("hitPoints").innerHTML = "HP: " + you.hitPoints;
        }
        else{
            document.getElementById("text5").innerHTML = "the " + this.name +" missed!"
        }
        if(Math.floor(Math.random()*2)){
            this.hitPoints -= you.attack;
            document.getElementById("text4").innerHTML = "you hit the " + this.name + "!";
        }
        else{
            document.getElementById("text4").innerHTML = "you missed!";
        }
        $(document).ready(function() {
            $('#text4').fadeIn(2000);
        });
        $(document).ready(function() {
            $('#text5').fadeIn(2000);
        });
    }
}
Opponent.prototype = new Character();

function Item(description){
    this.description = description;
}




