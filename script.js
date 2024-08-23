const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
// import { Orders } from "./orders";


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    console.log('menu clicked')
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    console.log('theme-Toggler clicked')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

});

// Table 
Orders.forEach(order => {
    console.log(order);
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});


