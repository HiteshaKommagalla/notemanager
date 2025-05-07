var button = document.getElementById("add-btn");

button.addEventListener("click", function (i) {
    i.preventDefault();
    var input1 = document.getElementById("add-input");
    if (input1.value == "") {
        alert("Please add Note")
    }
    else {
        var add = document.createElement("li");
        var p = document.createElement("p");
        var p1 = document.createElement("p");
        var input = document.createElement("input");
        var i = document.createElement("i");
        var i1 = document.createElement("i");

        i1.setAttribute("class", "fa fa-pencil-square-o")
        i.setAttribute("class", "fa fa-times")
        input.setAttribute("class", "edit-note")
        input.setAttribute("type", "text")

        p1.append(i1);
        p1.append(i);
        add.append(p);
        add.append(p1);
        add.append(input);
        // console.log(add);

        var inputbox = document.getElementById("add-input");
        p.textContent = ("value", inputbox.value)

        var list = document.getElementById("list");
        list.append(add);

        inputbox.value = "";

        removing();
        accept();
        search();
        hid()
    }
});


function removing() {
    var lis = document.getElementsByClassName("fa-times");
    Array.from(lis).forEach(function (i) {
        i.addEventListener("click", function () {
            this.parentElement.parentElement.remove();
        })
    });
}
removing();


function accept() {
    var note = document.getElementsByClassName("fa-pencil-square-o");
    // console.log(note);
    Array.from(note).forEach(function (icon) {
        icon.addEventListener("click", function () {
            var input = icon.parentElement.parentElement.children[2];
            input.style.display = "block";

            var p = icon.parentElement.parentElement.firstElementChild;
            input.value = p.textContent;

            input.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    // p.textContent = input.value;
                    // input.style.display = "none";

                    if (input.value === "") {
                        // alert("Input cannot be empty");
                        input.style.display = "none";
                        // event.preventDefault();
                        // return;  
                    }
                    else {
                        p.textContent = input.value;
                        input.style.display = "none";
                    }
                }
            });
        })
    });
}
accept();


function hid() {
    var hide = document.getElementById("hide");
    // console.log(hide.children[0]);
    var ul = document.getElementById("list");
    // console.log(ul);

    hide.addEventListener("click", function () {
        // ul.style.display = "none";
        var label = document.querySelector('label');
        if (hide.checked) {
            ul.style.display = "none";
            label.textContent = "Unhide notes";
        }
        else {
            ul.style.display = "block";
            label.textContent = "Hide notes";
        }
    });
}
hid()


// var search = document.getElementById("search-note");
// console.log(search.children[0]);

function search() {
    var search = document.getElementById("search-note");
    var filter = search.children[0].value.toUpperCase();
    var ul = document.getElementById("list");
    var li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("p")[0];
        var txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}
search();