var Grocery = /** @class */ (function () {
    // add a constructor
    function Grocery(n, q, p) {
        this.name = n;
        this.quantity = q;
        this.price = p;
    }
    return Grocery;
}());
// create a list of grocery items
// new keyword is used to inititalise objects
var list_of_items = [
    new Grocery("milk", 3, 10),
    new Grocery("bread", 6, 25),
    new Grocery("egg", 11, 10)
];
// access the html element with id app
var ele = document.getElementById("app");
// create a <p> element for each item in the grocery list and
// append it to the html page
list_of_items.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "".concat(e.name, " ").concat(e.quantity, " -> $").concat(e.price);
    ele.appendChild(p);
});
