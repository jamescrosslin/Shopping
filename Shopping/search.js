function mainfunction() {
  var itemChoose = document.getElementById('itemChoose');
  var itemType = document.getElementById('itemType');
  itemType.addEventListener('change', selectItem);
  itemChoose.addEventListener('click', function () {
    if (itemType.value === 'DefaultType') {
      alert('Please choose the type of item you want to buy before choosing the item!');
      itemType.focus();
    }
  });
}
function selectItem() {
  var itemType = document.getElementById('itemType');
  var itemChoose = document.getElementById('itemChoose');

  if (itemType.value === 'f') {
    while (itemChoose.length > 1) {
      itemChoose.removeChild(itemChoose.lastChild);
    }
    var foodItems = [
      'Hamburger',
      'Pizza',
      'Coffee',
      'Chicken Nuggets',
      'Bread',
      'Tea',
      'Soda',
      'Cake',
      'Ice Cream',
    ];
    for (i = 0; i < foodItems.length; i++) {
      var option = document.createElement('option');
      option.setAttribute('value', 'food' + i);
      var optiontxt = document.createTextNode(foodItems[i]);
      option.appendChild(optiontxt);
      itemChoose.appendChild(option);
    }
  }
  if (itemType.value === 'cl') {
    while (itemChoose.length > 1) {
      itemChoose.removeChild(itemChoose.lastChild);
    }
    var clothesItems = [
      'T-Shirt',
      'Coat',
      'Sweater',
      'Jacket',
      'Shorts',
      'Jeans',
      'Trousers',
      'Shoes',
      'Socks',
    ];
    for (i = 0; i < clothesItems.length; i++) {
      var option = document.createElement('option');
      option.setAttribute('value', 'clothes' + i);
      var optiontxt = document.createTextNode(clothesItems[i]);
      option.appendChild(optiontxt);
      itemChoose.appendChild(option);
    }
  }
  if (itemType.value === 'tch') {
    while (itemChoose.length > 1) {
      itemChoose.removeChild(itemChoose.lastChild);
    }
    var techItems = [
      'Desktop PC',
      'Laptop',
      'Processor',
      'Graphic Card',
      'Ram',
      'iPhone',
      'Samsung',
      'Television',
      'Radio',
      'Speakers',
    ];
    for (i = 0; i < techItems.length; i++) {
      var option = document.createElement('option');
      option.setAttribute('value', 'clothes' + i);
      var optiontxt = document.createTextNode(techItems[i]);
      option.appendChild(optiontxt);
      itemChoose.appendChild(option);
    }
  }
  if (itemType.value === 'c') {
    while (itemChoose.length > 1) {
      itemChoose.removeChild(itemChoose.lastChild);
    }
    var carsItems = [
      'Audi',
      'BMW',
      'Volkswagen',
      'Mercedes',
      'Porsche',
      'Ferrari',
      'Lamborghini',
      'Bugatti',
    ];
    for (i = 0; i < carsItems.length; i++) {
      var option = document.createElement('option');
      option.setAttribute('value', 'clothes' + i);
      var optiontxt = document.createTextNode(carsItems[i]);
      option.appendChild(optiontxt);
      itemChoose.appendChild(option);
    }
  }
  if (itemType.value === 'l') {
    while (itemChoose.length > 1) {
      itemChoose.removeChild(itemChoose.lastChild);
    }
    var libraryItems = [
      'Book',
      'Notebook',
      'Magazine',
      'Pencil',
      'Pen',
      'Rubber',
      'Ruler',
      'Colour Pen',
    ];
    for (i = 0; i < libraryItems.length; i++) {
      var option = document.createElement('option');
      option.setAttribute('value', 'clothes' + i);
      var optiontxt = document.createTextNode(libraryItems[i]);
      option.appendChild(optiontxt);
      itemChoose.appendChild(option);
    }
  }
  if (itemType.value === 'o') {
    while (itemChoose.length > 1) {
      itemChoose.removeChild(itemChoose.lastChild);
    }
    var otherItems = [
      'Lawn Mower',
      'Ball',
      'Tennis Racket',
      'Shovel',
      'Vase',
      'Couch',
      'Chair',
      'Blanket',
    ];
    for (i = 0; i < otherItems.length; i++) {
      var option = document.createElement('option');
      option.setAttribute('value', 'clothes' + i);
      var optiontxt = document.createTextNode(otherItems[i]);
      option.appendChild(optiontxt);
      itemChoose.appendChild(option);
    }
  }
}
