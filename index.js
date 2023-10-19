const myCity = {
    name: 'Astana',
    popular: true,
    country: 'Kazakhstan'
}
myCity.name = 'Almaty'
myCity.popular = false
delete myCity.popular
console.log(myCity);