// console.log("Welcome to kkmy Magic notes app");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {

    console.log("click event fired");
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let name = localStorage.getItem('name');
    if (name == null) {
        notesobj = [];

    } else {
        notesobj = JSON.parse(name);
    }
    let newobj = {
        text: addTxt.value,
        title: addTitle.value
    }
    notesobj.push(newobj);
    localStorage.setItem('name', JSON.stringify(notesobj));
    // console.log(notesobj);
    addTxt.value = "";
    addTitle.value = "";
    showNotes();

});

function showNotes() {

    let name = localStorage.getItem("name");
    if (name == null) {
        notesobj = [];

    } else {
        notesobj = JSON.parse(name);
    }

    let html = "";
    notesobj.forEach(function(element, index) {

        html +=
            `
                  <div class=" cardb ">
                        <h3> ${index+1}. ${element.title}</h3>
                        <p class=" card "> ${element.text}</p>
                        <button class="btn" id="${index}" onclick="deleteNote(this.id)" >Delete Note</button>
                       
                    </div> 
            `

    });
    let elem = document.getElementById("cont");
    if (notesobj.length != 0) {

        elem.innerHTML = html;
    } else {
        elem.innerHTML = `<h2 class = "decorate" > Nothing to show here..Please add Notes First!</h2>`;
    }
}

function deleteNote(index) {
    console.log("this is deleting", index);

    let name = localStorage.getItem("name");
    if (name == null) {
        notesobj = [];

    } else {
        notesobj = JSON.parse(name);
    }

    notesobj.splice(index, 1);

    localStorage.setItem('name', JSON.stringify(notesobj));
    showNotes();


}



let search = document.getElementById('searchbox')
search.addEventListener('input', function() {
    console.log('value inputed ', search.value);

    let inputval = search.value;
    let noteCard = document.getElementsByClassName('cardb');
    Array.from(noteCard).forEach(function(element) {

        let cardTxt = element.getElementsByTagName('p')[0].innerText;

        if (cardTxt.includes(inputval)) {
            element.style.display = 'block';
        } else {

            element.style.display = 'none';
            // let cse = document.getElementById('cont');
            // cse.innerHTML = `<h4> No Search results found </h4>`;

        }




        // console.log(cardTxt);
    })



    // })
});