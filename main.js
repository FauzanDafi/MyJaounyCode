const buy1 = document.getElementsByClassName("buy1");
const buy2 = document.getElementsByClassName("buy2");
const buy3 = document.getElementsByClassName("buy3");
const buy4 = document.getElementsByClassName("buy4");
const buy5 = document.getElementsByClassName("buy5");
const buy6 = document.getElementsByClassName("buy6");

let cartTotal = [];
const list = document.getElementById("list");
const closes = document.getElementById("close");
const display = document.getElementById("result");

//buy1
for (var i = 0; i < buy1.length; i++) {
  const button = buy1[i];
  button.addEventListener("click", addToCart1);
}
//buy1
for (var i = 0; i < buy2.length; i++) {
  const button = buy2[i];
  button.addEventListener("click", addToCart2);
}
//buy3
for (var i = 0; i < buy3.length; i++) {
  const button = buy3[i];
  button.addEventListener("click", addToCart3);
}
//buy4
for (var i = 0; i < buy4.length; i++) {
  const button = buy4[i];
  button.addEventListener("click", addToCart4);
}
//buy5
for (var i = 0; i < buy5.length; i++) {
  const button = buy5[i];
  button.addEventListener("click", addToCart5);
}
//buy6
for (var i = 0; i < buy6.length; i++) {
  const button = buy6[i];
  button.addEventListener("click", addToCart6);
}
//close button
closes.addEventListener("click", restart);

//function resert
function restart() {
  cartTotal = [];
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  if (list == "") {
    alert("pesanan anda masih kosong, pesan sesuatu :)");
  } else {
    alert("terima kasih atas pesanan Anda :)");
  }
  display.innerText = "0";
}

//function addTocart1
function addToCart1(event) {
  const li = document.createElement("li");

  const productTitle =
    event.target.parentElement.querySelector(".title").innerText;
  const productPrice =
    event.target.parentElement.querySelector(".price-item").innerText;

  const product = {
    name: productTitle,
    price: productPrice,
  };

  cartTotal.push(product);

  li.innerText = product.name + " harga:" + product.price;
  list.appendChild(li);
  console.log(li);
  console.log(cartTotal);

  showPrice();
}

//function addTocart1
function addToCart2(event) {
  const li = document.createElement("li");

  const productTitle =
    event.target.parentElement.querySelector(".title").innerText;
  const productPrice =
    event.target.parentElement.querySelector(".price-item").innerText;

  const product = {
    name: productTitle,
    price: productPrice,
  };

  cartTotal.push(product);

  li.innerText = product.name + " harga:" + product.price;
  list.appendChild(li);
  console.log(li);
  console.log(cartTotal);

  showPrice();
}
//function addTocart1
function addToCart3(event) {
  const li = document.createElement("li");

  const productTitle =
    event.target.parentElement.querySelector(".title").innerText;
  const productPrice =
    event.target.parentElement.querySelector(".price-item").innerText;

  const product = {
    name: productTitle,
    price: productPrice,
  };

  cartTotal.push(product);

  li.innerText = product.name + " harga:" + product.price;
  list.appendChild(li);
  console.log(li);
  console.log(cartTotal);

  showPrice();
} //function addTocart1
function addToCart4(event) {
  const li = document.createElement("li");

  const productTitle =
    event.target.parentElement.querySelector(".title").innerText;
  const productPrice =
    event.target.parentElement.querySelector(".price-item").innerText;

  const product = {
    name: productTitle,
    price: productPrice,
  };

  cartTotal.push(product);

  li.innerText = product.name + " harga:" + product.price;
  list.appendChild(li);
  console.log(li);
  console.log(cartTotal);

  showPrice();
} //function addTocart1
function addToCart5(event) {
  const li = document.createElement("li");

  const productTitle =
    event.target.parentElement.querySelector(".title").innerText;
  const productPrice =
    event.target.parentElement.querySelector(".price-item").innerText;

  const product = {
    name: productTitle,
    price: productPrice,
  };

  cartTotal.push(product);

  li.innerText = product.name + " harga:" + product.price;
  list.appendChild(li);
  console.log(li);
  console.log(cartTotal);

  showPrice();
} //function addTocart1
function addToCart6(event) {
  const li = document.createElement("li");

  const productTitle =
    event.target.parentElement.querySelector(".title").innerText;
  const productPrice =
    event.target.parentElement.querySelector(".price-item").innerText;

  const product = {
    name: productTitle,
    price: productPrice,
  };

  cartTotal.push(product);

  li.innerText = product.name + " harga:" + product.price;
  list.appendChild(li);
  console.log(cartTotal);
  console.log(li);

  showPrice();
}

//function show Price

// Ubah "cartTotal.value" menjadi jumlah item dalam keranjang (misalnya, panjang array)

// Pastikan "cartTotalPrice" adalah string angka yang valid sebelum mengonversi
//if (!isNaN(cartTotal)) {
function showPrice() {
  let totalHargaItem = 0;

  for (let i = 0; i < cartTotal.length; i++) {
    // Gunakan parseFloat daripada parseInt untuk mengurai sebagai angka desimal
    const hargaItem = parseFloat(cartTotal[i].value.price);

    // Periksa apakah hargaItem adalah angka yang valid (bukan NaN)
    if (!isNaN(hargaItem)) {
      totalHargaItem += hargaItem;
    }
  }

  // Tampilkan totalHargaItem dengan dua angka desimal
  display.innerText = totalHargaItem.toFixed(2);
}

console.log(showPrice());
