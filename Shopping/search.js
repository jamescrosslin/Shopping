function mainfunction() {
  let itemChosen = document.getElementById('itemChoose');
  let itemType = document.getElementById('itemType');
  itemType.addEventListener('change', selectItem);
  itemChosen.addEventListener('click', function () {
    if (itemType.value === 'DefaultType') {
      alert('Please choose the type of item you want to buy before choosing the item!');
      itemType.focus();
    }
  });
}
function selectItem() {
  let itemType = document.getElementById('itemType');
  let itemChosen = document.getElementById('itemChoose');
  let items, name; //varaibles for the name of the category and the items
  itemChosen.innerHTML = ""; // Empty the options
  if (itemType.value === 'f') {
    items = ['Hamburger','Pizza','Coffee','Chicken Nuggets','Bread','Tea','Soda','Cake','Ice Cream'];
    name = 'food';
  }
  if (itemType.value === 'cl') {
    items = ['T-Shirt','Coat','Sweater','Jacket','Shorts','Jeans','Trousers','Shoes','Socks'];
    name = 'clothes';
  }
  if (itemType.value === 'tch') {
    items = ['Desktop PC','Laptop','Processor','Graphic Card','Ram','iPhone','Samsung','Television','Radio','Speakers'];
    name = 'tech';
  }
  if (itemType.value === 'c') {
    items = ['Audi','BMW','Volkswagen','Mercedes','Porsche','Ferrari','Lamborghini','Bugatti'];
    name = 'cars';
  }
  if (itemType.value === 'l') {
    items = ['Book','Notebook','Magazine','Pencil','Pen','Rubber','Ruler','Colour Pen'];
    name = "library"
  }
  if (itemType.value === 'o') {
    items = ['Lawn Mower','Ball','Tennis Racket','Shovel','Vase','Couch','Chair','Blanket'];
    name = 'others';
  }
  if (itemType.value === "DefaultType") {
    items = ['Here you can choose the item you want!'];
    name = 'DefaultType';

  }
  for (i = 0; i < items.length; i++) {
      let option = document.createElement('option');
      option.setAttribute('value', name + i);
      let optiontxt = document.createTextNode(items[i]);
      option.appendChild(optiontxt);
      itemChosen.appendChild(option);
  }
}
