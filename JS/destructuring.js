let {PI} = Math;
console.log({PI})

let {pi} = Math;
console.log(pi);

console.log(PI === Math.PI);

PI = 1;
console.log(PI);
console.log(PI === Math.PI);


function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();