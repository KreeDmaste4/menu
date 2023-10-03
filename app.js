let cart = receipt()
let menu = 'Вы заказали '
let delivery = 9000

for(let key in cart) {
    menu = menu +' ' + key
    for(let newKey in cart[key]) {
        menu = newKey == 'info' ? menu + ` ${cart[key][newKey]}` : menu
        delivery = newKey == 'price' ?delivery + cart[key][newKey] : delivery
    }
}

console.log(`${menu} | Общая стоимость ${delivery}сумм`);