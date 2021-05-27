function additem() {
    var itemType = document.getElementById("itemType");
    var item = document.getElementById("itemChoose");
    if (item.value === "DefaultItem") {
        alert("Please select the item you want to add!");
    }
    else if (itemType.value === "f") {
        addfood();
    }
    else if (itemType.value === "cl") {
        addclothes();
    }
    else if (itemType.value === "tch") {
        addtech();
    }
    else if (itemType.value === "c") {

    }
    else if (itemType.value === "l") {
        addlibrary();
    }
    else if (itemType.value === "o") {
        addother();
    }
}
function addfood() {
    var item = document.getElementById("itemChoose");
    var foodAdded = document.getElementById("foodAdded");
    var foodText = item.options[item.selectedIndex].text;

    var paragraph = document.createElement("p");
    var ptxt = document.createTextNode(foodText);
    paragraph.id = foodText;
    paragraph.appendChild(ptxt);

    var itemtxt = foodAdded.getElementsByTagName("p");
    var sameValue;

    for (i = 0; i < itemtxt.length; i++) {
        sameValue = itemtxt[i].getAttribute("id");
    }
    if (sameValue == foodText) {
        var multiplier = document.getElementById(sameValue);
        var multiregex = /[a-zA-Z]+ x([2-4])/;
        if (multiregex.test(multiplier.innerHTML)) {
            let y = multiregex.exec(multiplier.innerHTML);
            var z = parseInt(y[1]) + 1;
            multiplier.innerHTML = sameValue + " x" + z;
        }
        else if (/[a-zA-Z]+ x5/.test(multiplier.innerHTML)) {
            alert("You can not add more than 5 items of " + sameValue + "s");
        }
        else {
            var x = 2;
            multiplier.innerHTML = sameValue + " x" + x;
        }
    }
    else {
        foodAdded.appendChild(paragraph);
    }
}
function addclothes() {
    var item = document.getElementById("itemChoose");
    var clothesAdded = document.getElementById("clothesAdded");
    var clothesText = item.options[item.selectedIndex].text;

    var paragraph = document.createElement("p");
    var ptxt = document.createTextNode(clothesText);

    paragraph.id = clothesText;
    paragraph.appendChild(ptxt);

    var itemtxt = clothesAdded.getElementsByTagName("p");
    var sameValue;

    for (i = 0; i < itemtxt.length; i++) {
        sameValue = itemtxt[i].getAttribute("id");
    }
    if (sameValue == clothesText) {
        var multiplier = document.getElementById(sameValue);
        var multiregex = /[a-zA-Z]+ x([2-4])/;
        if (multiregex.test(multiplier.innerHTML)) {
            let y = multiregex.exec(multiplier.innerHTML);
            var z = parseInt(y[1]) + 1;
            multiplier.innerHTML = sameValue + " x" + z;
        }
        else if (/[a-zA-Z]+ x5/.test(multiplier.innerHTML)) {
            alert("You can not add more than 5 items of " + sameValue + "s");
        }
        else {
            var x = 2;
            multiplier.innerHTML = sameValue + " x" + x;
        }
    }
    else {
        clothesAdded.appendChild(paragraph);
    }
}
function addtech() {
    var item = document.getElementById("itemChoose");
    var techAdded = document.getElementById("foodAdded");
    var techText = item.options[item.selectedIndex].text;

    var paragraph = document.createElement("p");
    var ptxt = document.createTextNode(techText);
    paragraph.id = techText;
    paragraph.appendChild(ptxt);

    var itemtxt = techAdded.getElementsByTagName("p");
    var sameValue;

    for (i = 0; i < itemtxt.length; i++) {
        sameValue = itemtxt[i].getAttribute("id");
    }
    if (sameValue == techText) {
        var multiplier = document.getElementById(sameValue);
        var multiregex = /[a-zA-Z]+ x([2-4])/;
        if (multiregex.test(multiplier.innerHTML)) {
            let y = multiregex.exec(multiplier.innerHTML);
            var z = parseInt(y[1]) + 1;
            multiplier.innerHTML = sameValue + " x" + z;
        }
        else if (/[a-zA-Z]+ x5/.test(multiplier.innerHTML)) {
            alert("You can not add more than 5 items of " + sameValue + "s");
        }
        else {
            var x = 2;
            multiplier.innerHTML = sameValue + " x" + x;
        }
    }
    else {
        techAdded.appendChild(paragraph);
    }
}
function addcars() {
    var item = document.getElementById("itemChoose");
    var carsAdded = document.getElementById("carsAdded");
    var carsText = item.options[item.selectedIndex].text;

    var paragraph = document.createElement("p");
    var ptxt = document.createTextNode(carsText);
    paragraph.id = carsText;
    paragraph.appendChild(ptxt);

    var itemtxt = carsAdded.getElementsByTagName("p");
    var sameValue;

    for (i = 0; i < itemtxt.length; i++) {
        sameValue = itemtxt[i].getAttribute("id");
    }
    if (sameValue == carsText) {
        var multiplier = document.getElementById(sameValue);
        var multiregex = /[a-zA-Z]+ x([2-4])/;
        if (multiregex.test(multiplier.innerHTML)) {
            let y = multiregex.exec(multiplier.innerHTML);
            var z = parseInt(y[1]) + 1;
            multiplier.innerHTML = sameValue + " x" + z;
        }
        else if (/[a-zA-Z]+ x5/.test(multiplier.innerHTML)) {
            alert("You can not add more than 5 items of " + sameValue + "s");
        }
        else {
            var x = 2;
            multiplier.innerHTML = sameValue + " x" + x;
        }
    }
    else {
        carsAdded.appendChild(paragraph);
    }
}
function addlibrary() {
    var item = document.getElementById("itemChoose");
    var libraryAdded = document.getElementById("carsAdded");
    var libraryText = item.options[item.selectedIndex].text;

    var paragraph = document.createElement("p");
    var ptxt = document.createTextNode(libraryText);
    paragraph.id = libraryText;
    paragraph.appendChild(ptxt);

    var itemtxt = libraryAdded.getElementsByTagName("p");
    var sameValue;

    for (i = 0; i < itemtxt.length; i++) {
        sameValue = itemtxt[i].getAttribute("id");
    }
    if (sameValue == libraryText) {
        var multiplier = document.getElementById(sameValue);
        var multiregex = /[a-zA-Z]+ x([2-4])/;
        if (multiregex.test(multiplier.innerHTML)) {
            let y = multiregex.exec(multiplier.innerHTML);
            var z = parseInt(y[1]) + 1;
            multiplier.innerHTML = sameValue + " x" + z;
        }
        else if (/[a-zA-Z]+ x5/.test(multiplier.innerHTML)) {
            alert("You can not add more than 5 items of " + sameValue + "s");
        }
        else {
            var x = 2;
            multiplier.innerHTML = sameValue + " x" + x;
        }
    }
    else {
        libraryAdded.appendChild(paragraph);
    }
}
function addother() {
    var item = document.getElementById("itemChoose");
    var otherAdded = document.getElementById("carsAdded");
    var otherText = item.options[item.selectedIndex].text;

    var paragraph = document.createElement("p");
    var ptxt = document.createTextNode(otherText);
    paragraph.id = otherText;
    paragraph.appendChild(ptxt);

    var itemtxt = otherAdded.getElementsByTagName("p");
    var sameValue;

    for (i = 0; i < itemtxt.length; i++) {
        sameValue = itemtxt[i].getAttribute("id");
    }
    if (sameValue == otherText) {
        var multiplier = document.getElementById(sameValue);
        var multiregex = /[a-zA-Z]+ x([2-4])/;
        if (multiregex.test(multiplier.innerHTML)) {
            let y = multiregex.exec(multiplier.innerHTML);
            var z = parseInt(y[1]) + 1;
            multiplier.innerHTML = sameValue + " x" + z;
        }
        else if (/[a-zA-Z]+ x5/.test(multiplier.innerHTML)) {
            alert("You can not add more than 5 items of " + sameValue + "s");
        }
        else {
            var x = 2;
            multiplier.innerHTML = sameValue + " x" + x;
        }
    }
    else {
        otherAdded.appendChild(paragraph);
    }
}