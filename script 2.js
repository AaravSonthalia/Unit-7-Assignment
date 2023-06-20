// Callback Function (3 pts)
// TODO: Use the concept of callback functions to search through a phone book to find a recipient's phone number.
let phoneBook = [
    {name: "Alexis", phone: 4082553555}, 
    {name: "Miya", phone: 9830978345},
    {name: "Rei", phone: 6503879023},
    {name: "Sierra", phone: 7642398541},
    {name: "Luke", phone: 5052358753},
    {name: "Ethan", phone: 9248258435}
]

// TODO: Create a function called searchUser() that searches for a recipient or name in the phoneBook.
// Hint: In the searchUser() function, pass callback as a parameter.

// search user function
function searchUser(array, callback)
{
    // creating name
    let name = "Alexis";

    // callback function call
    callback(name, array);
}

// TODO: Create a callback function called getNumber() that loops through the phoneBook to find the recipient's number.

// getting the number
function getNumber(name, array)
{
    // printing to console
    console.log("Searching for " + name + "'s phone number.");

    // looping through array
    for (let i = 0; i < array.length; i++)
    {
        // storing name in variable
        let userName = array[i].name;

        // if we have the correct name
        if (userName == name)
        {
            // print to console
            let number = array[i].phone;
            console.log(name + ": " + number);
        }
    }
}

// TODO: Call the searchUser() function and pass getNumber() as a callback function.

// calling search user
searchUser(phoneBook, getNumber);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Filter Callback Function (2 pts)
// TODO: Use the concept of filter callback functions to get the price of each car listed in the cars array.
let cars = [
    {color: "red", wheels: 3, price: 55000.00}, 
    {color: "blue", wheels: 8, price: 12000.00}, 
    {color: "pink", wheels: 4, price: 90000.00},
    {color: "yellow", wheels: 4, price: 79000.00},
    {color: "green", wheels: 3, price: 20000.00},
    {color: "purple", wheels: 8, price: 46000.00},
    {color: "gray", wheels: 3, price: 81000.00},
    {color: "golden", wheels: 4, price: 130000.00}
]

// TODO: Create a function called getPrices() that takes carPrice as a parameter and prints the car price of each object.

function getPrices(carPrice)
{
    // printing the price of the car
    console.log(carPrice.price);
}

// TODO: Use the filter() function to filter through the array to get the car price of each car object.

// printing to console
console.log("");
console.log("Fetching all the car prices:");

// calling the get prices function with filter callback
const carPrices = cars.filter(price => getPrices(price));

