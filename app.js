function get(obj) {
    return document.getElementById(obj);
}

var products = [{
        id: "food1",
        img: "images/Food1.jpg",
        name: "WAINWRIGHT'S",
        price: 35.99,
        type: "Food"
    },
    {
        id: "food2",
        img: "images/Food2.jpg",
        name: "Hill's",
        price: 42.99,
        type: "Food"
    },
    {
        id: "food3",
        img: "images/Food3.jpg",
        name: "James Wellbeloved",
        price: 11.79,
        type: "Food"
    },
    {
        id: "food4",
        img: "images/Food4.jpg",
        name: "Billy + Margot",
        price: 36.00,
        type: "Food"
    },
    {
        id: "food5",
        img: "images/Food5.jpg",
        name: "Naturediet",
        price: 1.39,
        type: "Food"
    },
    {
        id: "food6",
        img: "images/Food6.jpg",
        name: "Natures Menu",
        price: 6.19,
        type: "Food"
    },
    {
        id: "food7",
        img: "images/Food7.jpg",
        name: "Applaws",
        price: 1.79,
        type: "Food"
    },
    {
        id: "food8",
        img: "images/Food8.jpg",
        name: "Hill's",
        price: 36.00,
        type: "Food"
    },
    {
        id: "treat1",
        img: "images/Treat1.jpg",
        name: "Nashier Sticks",
        price: 3.99,
        type: "Treat"
    },
    {
        id: "treat2",
        img: "images/Treat2.jpg",
        name: "Wonky Chomp",
        price: 4.59,
        type: "Treat"
    },
    {
        id: "treat3",
        img: "images/Treat3.jpg",
        name: "Twisto",
        price: 2.79,
        type: "Treat"
    },
    {
        id: "treat4",
        img: "images/Treat4.jpg",
        name: "PlayTime Chews",
        price: 6.00,
        type: "Treat"
    },
    {
        id: "treat5",
        img: "images/Treat5.jpg",
        name: "Chicken Dog Chews",
        price: 1.39,
        type: "Treat"
    },
    {
        id: "treat6",
        img: "images/Treat6.jpg",
        name: "Peanut Dog Chews",
        price: 2.19,
        type: "Treat"
    },
    {
        id: "treat7",
        img: "images/Treat7.jpg",
        name: "Scruffy Bites",
        price: 1.79,
        type: "Treat"
    },
    {
        id: "treat8",
        img: "images/Treat8.jpg",
        name: "Denta Stix",
        price: 4.29,
        type: "Treat"
    },
    {
        id: "supplies1",
        img: "images/Supplies1.jpg",
        name: "Squeaky Monkey",
        price: 31.99,
        type: "Supplies"
    },
    {
        id: "supplies2",
        img: "images/Supplies2.jpg",
        name: "Cooling Vest",
        price: 42.99,
        type: "Supplies"
    },
    {
        id: "supplies3",
        img: "images/Supplies3.jpg",
        name: "Collar",
        price: 11.79,
        type: "Supplies"
    },
    {
        id: "supplies4",
        img: "images/Supplies4.jpg",
        name: "Hoodie",
        price: 20.00,
        type: "Supplies"
    },
    {
        id: "supplies5",
        img: "images/Supplies5.jpg",
        name: "Fleas Killer",
        price: 39.00,
        type: "Supplies"
    },
    {
        id: "supplies6",
        img: "images/Supplies6.jpg",
        name: "Oral Suspension",
        price: 15.00,
        type: "Supplies"
    },
    {
        id: "supplies7",
        img: "images/Supplies7.jpg",
        name: "Double bowls",
        price: 31.00,
        type: "Supplies"
    },
    {
        id: "supplies8",
        img: "images/Supplies8.jpg",
        name: "Mat",
        price: 9.00,
        type: "Supplies"
    },
];

var cart = [];
if (JSON.parse(sessionStorage.getItem('cart-items')) != undefined) {
    cart = JSON.parse(sessionStorage.getItem('cart-items'))
}

function addToCart(product_id) {
    for (var i = 0; i <= products.length; i++) {
        if (products[i].id == product_id) {
            var cartItem = null;
            for (var k = 0; k < cart.length; k++) {
                if (cart[k].id == products[i].id) {
                    cartItem = cart[k];
                    cart[k]['quantity']++;
                    break;
                }
            }
            if (cartItem == null) {
                var cartItem = products[i];
                cartItem['quantity'] = 1;
                cart.push(cartItem);
                break;
            }
            break;
        }
    }

    sessionStorage.setItem('cart-items', JSON.stringify(cart));
}

function setItems(type) {
    var content = "";
    for (var i = 0; i < products.length; i++) {
        if (type == products[i].type) {
            content += '<div class="item">';
            content += '<img src="' + products[i].img + '" alt="' + products[i].id + '">';
            content += '<h3 class="name">' + products[i].name + '</h3>';
            content += '<p> &euro;' + products[i].price + '</p>'
            content += '<button id="add-to-cart" onclick="addToCart(' + products[i].id + ');">Add to Cart</button>'
        }
    }
    get(type).innerHTML = content;
}

var total = 0;
for (var i = 0; i < cart.length; i++) {
    total = total + (cart[i].price * cart[i].quantity);
}
total = total.toFixed(2);
document.getElementById("subtotal").innerHTML = "&euro;" + total;
document.getElementById("total").innerHTML = "&euro;" + total;

function checkout() {
    sessionStorage.clear();
    cart = [];
    alert("Thank you for buying at our page.");
    window.location = 'index.html';
}

function itemlist() {
    var itemlist = "";
    itemlist += "<table>";
    itemlist += "<tr><th>No.</th><th>Image</th><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr>";
    for (var i = 0; i < cart.length; i++) {
        itemlist += '<tr><td>' + (i + 1) + '</td>';
        itemlist += '<td><img style="max-width: 150px; max-height: 150px;" src="' + cart[i].img + '" alt = "' + cart[i].id + '"></td>';
        itemlist += '<td>' + cart[i].name + '</td>';
        itemlist += '<td>' + cart[i].price + '</td>';
        itemlist += '<td>' + cart[i].quantity + '</td>';
        itemlist += '<td>' + cart[i].price * cart[i].quantity + '</td></tr>';
    }
    itemlist += "</table>";
    get("itemlist").innerHTML = itemlist;
}

itemlist();