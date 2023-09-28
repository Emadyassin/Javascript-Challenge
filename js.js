var products = [
  {
    title: "Pro_1",
    description: "Pro_1 description",
    price: 200,
    image: "image/product_1.png",
  },
  {
    title: "Pro_2",
    description: "Pro_2 description",
    price: 10000,
    image: "image/product_2.png",
  },
  {
    title: "Pro_3",
    description: "Pro_3 description",
    price: 21500,
    image: "image/product_3.png",
  },
];

var showProducts = (p_arrayVar) => {
  allProducts = "";
  p_arrayVar.forEach((element) => {
    allProducts +=
      "( product: " +
      element.title +
      " / description: " +
      element.description +
      " / price: " +
      element.price +
      " / Image URL: " +
      element.image +
      " ) ";
  });
  return allProducts;
};

let addProducts = (
  p_title = prompt("enter title"),
  p_description = prompt("enter description"),
  P_price = prompt("enter price"),
  p_image = prompt("enter image URL")
) =>
  products.push({
    title: p_title,
    description: p_description,
    price: Number(P_price),
    image: p_image,
  });

var calcPrice = () => {
  total = 0;
  products.forEach((element) => {
    total += element.price;
  });
  return total;
};

var searchProducts = () => {
  var searchPox = prompt("Search by product title");
  var searchArry = [];
  products.forEach((element) => {
    var proTitle = element.title.toUpperCase;
    if (proTitle.inclide(searchPox.toUpperCase)) {
    }
  });
  return total;
};

let searchFunction = () => {
  var searchBox = prompt("Search by product title");
  var searchResult = [];
  var i = 0;
  products.forEach((element) => {
    if (element.title.toUpperCase().includes(searchBox.toUpperCase())) {
      searchResult.push(element);
    }
  });
  return showProducts(searchResult)
};

function choose() {
  var chooseNo = prompt(
    "Enter ( 1 ) to view all products, ( 2 ) to add a new product, ( 3 ) to view the total price of the products, or ( 4 ) to search through the products, or enter any key to exit "
  );
  switch (chooseNo) {
    case "1":
      alert(showProducts(products));
      choose();
      break;
    case "2":
      addProducts();
      choose();
      break;
    case "3":
      alert("Total is " + calcPrice());
      choose();
      break;
    case "4":
      alert(searchFunction());
      choose();
      break;
    default:
      null;
  }
}
choose();
