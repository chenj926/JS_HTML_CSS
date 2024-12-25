var result = 50;

if (result > 40) {
    console.log("passss!");
}
else {
    console.log("no pass!!!");
}

var metal = "gold";

switch (metal) {
    case "gold":
        console.log("gold");
        break;
    case "silver":
        console.log("silver");
    case "brown":
        console.log("brown");
    default:
        console.log("loser!");
}

for (var i = 0 ; i < 5 ; i++){
    console.log(i);
}

var j = 0
while (j < 2 && j <3) {
    console.log(-j);
    j++
}

for (var i = 0; i < 4 ; i++) {
    console.log("this is week %d", i)
    for (var j = 0; j < 7 ; j++) {
        console.log("\tthis is day %d", j+1)
    }
}