/**
 * Created by h205p2 on 1/10/17.
 */
//navigation
//runs when a direction button is clicked
$(document).ready(function(){
    $('.textB').hide();
});
$(document).ready(function(){
    $('.textA').hide();
});

function go(direction){

    if(you.location.exits[direction] == false || you.location.contents.isDead == false){
        $(document).ready(function(){
            $('#text2').fadeIn(2000);
        });
    }
    else {
        $(document).ready(function(){
            $('.textB').hide();
        });
        $(document).ready(function(){
            $('.textA').hide();
        });
        you.location = rooms[you.location.exits[direction]];
        document.getElementById("text1").innerHTML = you.location.description;
        $(document).ready(function() {
            $('#text1').fadeIn(2000);
        });
        document.getElementById("text3").innerHTML = you.location.contents.description;
        $(document).ready(function() {
            $('#text3').fadeIn(2000);
        });
        if(you.location.contents){
            $(document).ready(function() {
                $('#options').fadeIn(2000);
            });
        }
    }
}