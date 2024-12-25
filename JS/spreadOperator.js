let top3 = ['The Colosseum', 'Trevi Fountain', "The Vatican City"];
function showItinerary(p1, p2, p3) {
    console.log("Visit " + p1);
    console.log("Then visit " + p2);
    console.log("Finish with a visit to " + p3);
}
// showItinerary(top3[0], top3[1], top3[2]);

showItinerary(...top3);