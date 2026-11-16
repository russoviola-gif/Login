const utenti=["cicciogamer","icardi","khaby","rocco","anna"]
const password= ["ciccio1", "wandanara", "tiktok", "siffredi33" , "tatangelo"];


function login(){
    let n=document.getElementById("nome").value;
    let p=document.getElementById("password").value;
    let success=document.getElementById("success");
    let error=document.getElementById("failed");


    if(utenti.includes(n)){
        let posizione = utenti.indexOf(n);
        if(password[posizione] !== p){
            success.classList.add("d-none");
            error.classList.remove("d-none");
        }else{
            success.classList.remove("d-none");
            error.classList.add("d-none");
        }
    }
}
function vis_password() {
    let password = document.getElementById("password");
    let occhio = document.getElementById("occhio");


    if (password.type === "password") {
        password.type = "text";
        occhio.classList.toggle("bi-eye-slash");
        occhio.classList.toggle("bi-eye");
    } else {
        password.type = "password";
        occhio.classList.toggle("bi-eye");
        occhio.classList.toggle("bi-eye-slash");
    }
}
function createAccount() {
    let signup = document.getElementById("signup");
    signup.classList.toggle("d-none");
}


function registrazione() {
    let nome = document.getElementById("newUsername").value;
    let pass = document.getElementById("newPassword").value;
    let messaggio = document.getElementById("messaggio");


    if (utenti.includes(nome)) {
        messaggio.innerHTML = "username già esistente";
        messaggio.style.backgroundColor = "red";


    } else if (pass.length < 6) {
        messaggio.innerHTML = "password più corta di 6 caratteri";
        messaggio.style.backgroundColor = "red";


    } else {
        utenti.push(nome);
        password.push(pass);


        messaggio.innerHTML = "Registrazione avvenuta con successo";
        messaggio.style.backgroundColor = "green";


        console.log("stampa del vettore degli utenti");
        console.log(utenti);
    }
}