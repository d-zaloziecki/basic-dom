const validation = function () {

    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const birthday = document.getElementById("birthday").value;
    const phone = document.getElementById("phone").value;
    const div = document.getElementById("error");

    div.innerHTML = ""

    const error = function (term, messege) {
        if (term) {
            div.innerHTML = messege;
        }
    }

    error(name.length <= 2, "The name you entered is wrong");
    error(salary < 10000 || salary > 16000, "The salary should be between 10,000 and 16,000");
    error(!birthday, "Birthday incorrect");
    error(!(phone.length == 10), "The phone number is incorect");

    if(div.innerHTML==""){
        document.getElementById("form").style.display="none";
        const welcome = document.createElement("h1");
        welcome.innerHTML = "Welcome!!!"    
        document.body.appendChild(welcome);

    }

} 

