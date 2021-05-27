const lookup = {
  f: 'food',
  cl: 'clothes',
  tch: 'tech',
  c: 'cars',
  l: 'library',
  o: 'other',
};

function additem() {
  var itemType = document.getElementById('itemType');
  var item = document.getElementById('itemChoose');

  if (item.value === 'DefaultItem') {
    return alert('Please select the item you want to add!');
  }

  processItem(lookup[itemType.value], item);
}

function processItem(itemType, item) {
  var itemAdded = document.getElementById(`${itemType}Added`);

  var itemText = item.options[item.selectedIndex].text;

  var paragraph = document.createElement('p');
  var ptxt = document.createTextNode(itemText);
  paragraph.id = itemText;
  paragraph.appendChild(ptxt);

  var itemtxt = itemAdded.getElementsByTagName('p');

  for (let i = 0; i < itemtxt.length; i++) {
    const sameValue = itemtxt[i].getAttribute('id');
    if (sameValue === itemText) {
      var multiplier = document.getElementById(sameValue);
      var multiregex = /[a-zA-Z]+ x([2-4])/;
      if (multiregex.test(multiplier.innerHTML)) {
        let y = multiregex.exec(multiplier.innerHTML);
        var z = parseInt(y[1]) + 1;
        return (multiplier.innerHTML = sameValue + ' x' + z);
      } else if (/[a-zA-Z]+ x5/.test(multiplier.innerHTML)) {
        return alert('You can not add more than 5 items of ' + sameValue + 's');
      } else {
        var x = 2;
        return (multiplier.innerHTML = sameValue + ' x' + x);
      }
    }
  }
  itemAdded.appendChild(paragraph);
}
