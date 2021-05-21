JavaScript Object Literals

**Crucial!**
-Creating and Working With Object LIterals
-Nesting Arrays and Objects

Objects
    -collection of properties- a key-value pair
    -rather than accessing data using an index, we use custom keys.
Property = key + value

All types of data work with objects
Keys are converted to a string
const person = {firstName: "Mick", lastName: "Jagger"}
person.firstName //= "Mick"
person['firstname'] //= "Mick"


const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress = restaurant['address'] + " " + restaurant['city'] + ", " + restaurant['state'] + " " + restaurant['zipcode'] 
let fullAddress2 = `${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode}`;

Accessing Data
const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}

palette.red //"#eb4d4b"
palette['blue'] //"#30336b"
let color = 'yelow;
palette[color] //"#f9ca24"

Nesting Arrays + Objects
