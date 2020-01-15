<input name="firstName" type="text" id="fN"/>
evemt.target.firstName.value
document.getElementById("fN");

function checkForm() {
    if (document.getElementById("firstName").value === "") {
        console.log("Enter a valid first name.");
        valid = false;
    };
    
    if (document.getElementById("lastName").value === "") {
        console.log("Enter a valid last name.");
        valid = false;
    };
    
    if (document.getElementById("email").value === "") {
        console.log("Enter a valid email.");
        valid = false;
    };
    
    if (document.getElementById("firstName").value === "") {
        console.log("Enter a valid first name.");
        valid = false;
    };
}

function validateForm() {
    var elem = document.forms[""].value;

    if (elem === "") {
        alert("First name must be filled out");

        return false;
    }
}

console.log("Juanito se la come");