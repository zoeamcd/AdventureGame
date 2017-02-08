/**
 * Created by h205p2 on 1/10/17.
 */
//battle

function attack(){

    if(you.hitPoints <= 0) {
        you.isDead = true;
        document.getElementById("text6").innerHTML = you.message;
    }
    if(you.location.contents.hitPoints <= 0) {
        you.location.contents.isDead = true;
        document.getElementById("text6").innerHTML = you.location.contents.message;
        you.addItem(you.location.contents.item);
        console.log(you.inventory);

    }
    if(you.isDead || you.location.contents.isDead){
        $(document).ready(function() {
            $('.textB').hide();
        });
        $(document).ready(function() {
            $('#text6').fadeIn(2000);
        });
        you.location.contents = "";
    }

    else {
        you.location.contents.fight();
    }
}
