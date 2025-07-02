const cars = ['Corola', 'Bmw', 'Honda']

cars[cars.length] = 'toyata'
cars.push('lexux')
cars.push('lambo')
cars[cars.length]='farari'
console.log(cars);
console.log(cars.pop());
console.log(cars.length);

//example of key value pair in array
// cars.firstName = 'Waqar'

const colors = {}
colors.firstName = 'waqar'
colors.lastName = 'Ahmad'
colors.address = 'Glenrothes'
colors.street = 'laxford'
delete colors.street

const userData = {firstName: 'Waqar', lastName: 'Ahmad',
    pata:{
        houseNo: '29',
        streetName: 'Laxford',
        city: 'Glenrothes'
    }
}

userData.pata.city = 'Kirkcaldy'

