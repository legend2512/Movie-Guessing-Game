let movie= "Article370";
alert("Movie has been recently released and is based on true events");
let msg = prompt("Enter Your movie name");
while((msg != movie)&&(msg != "quit"))
{
let msg= prompt("Wrong guess.pls try again");
}
if(msg == movie){
    console.log("Entered Correct Value");
}
else{
    console.log("Making you quit");
}