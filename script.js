//collect document elements
document.addEventListener("DOMContentLoaded", () => {

   const namebutton = document.querySelector(".names");
    console.log(namebutton);
   const startbutton = document.querySelector(".start");
    console.log(startbutton);
    const timebutton = document.querySelector(".times");
    console.log(timebutton);
    const locationbutton = document.querySelector(".locations");
    console.log(locationbutton);
    const descriptionbutton = document.querySelector(".descriptions");
    console.log(descriptionbutton);
    const formID = document.getElementById("form");
     console.log(formID);
    const itemlistings = document.getElementById(".itemList");
    console.log(itemlistings);
    const inputID = document.getElementById("names")
    console.log(inputID);

    const newItemText = inputID.value;
    
    if (newItemText.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newItemText;

        listID.appendChild(listItem);

        inputID.value = '';
        inputID.focus();
    }
});





// Delete Button removes list item with all fields


