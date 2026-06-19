let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCart();

document.querySelector('#add-to-cart').forEach(button => {
button.addEventListener('click', () => {
    const product = {
        name:button.dataset.name,
        price: Number(button.dataset.price)
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
})
})

function updateCart() {
    const cartList = document.getElementById("cart-list");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    if (!cartList) return;
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartList.innerHTML += `
        <p>${item.name} - $${item.price} грн</p>`;
        total += item.price;
})

cartCount.textContent = cart.length;
cartTotal.textContent = total + " грн"
}

document.getElementById("register-btn").addEventListener("click", () => {
    const login = document.getElementById("reg-login").value;
    const password = document.getElementById("reg-password").value;

    if (!login || !password) {
        alert("Заповніть всі поля!");
        return;
    }

    const user = { 
        login,
         password };

         localStorage.setItem("user", JSON.stringify(user));
         aleret("Реєстрація успішна!");
})

document.getElementById("login-btn").addEventListener("click", () => {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
const user = JSON.parse(localStorage.getItem("user"));

if (user && user.login === login && user.password === password) {
  document.getElementById("status").textContent = "Вхід успішний!";
} else {
    document.getElementById("status").textContent = "Невірний логін або пароль!";
}})



  document.addEventListener("DOMContentLoaded", () => {

    const orderBtn = document.getElementById("sendOrder");

    orderBtn.addEventListener("click", () => {

        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const bouquet = document.getElementById("bouquet").value;
        const date = document.getElementById("date").value;
        const fullname = document.getElementById("fullname").value;

        if (
            address === "" ||
            phone === "" ||
            bouquet === "" ||
            date === "" ||
            fullname === ""
        ) {
            alert("Будь ласка, заповніть усі поля!");
            return;
        }

        alert(`
Замовлення оформлено!

ПІБ: ${fullname}
Телефон: ${phone}
Адреса: ${address}
Букет: ${bouquet}
Дата доставки: ${date}
        `);
    });
});