//  0 false undefined null NaN document.all
if (-1 && document) {               // T  - T = T
    console.log("Hey");           // T  - F = T
}                                   // F  - T = F
else{                               // F  - F = F
    console.log("HELLO")
}