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
    const formID = document.querySelector(".form");
     console.log(formID);
    const itemlistings = document.getElementById(".itemList");
    console.log(itemlistings);
    const inputID = document.getElementById("names")
    console.log(inputID);

    const newItemText = inputID.value;
    async function EventDashboard(namebutton, startbutton, timebutton, locationbutton, descriptionbutton) {
        try{
            const listItem = await fetch('${API_URL}/itemlistings',{
            method: 'POST' ,
            body: JSON.stringify({
                names,
                descriptions,
                locations,
                names,
                times,
            }),
            headers: {
                "Content-Type": "application/json",
            },

            });
            const events = await listItem.json();
        }   catch (error) {
            console.error();

        }
        }
        
    }




);





// Delete Button removes list item with all fields


