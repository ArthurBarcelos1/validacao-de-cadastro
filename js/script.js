document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault(); //Desativa ações padão do HTML de preencher os campos.
    
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "As senha não coincidem.";
    } else {
        errorMessage.textContent = "";
        alert("Formulário enviado com sucesso!")
        document.getElementById("registrationForm").reset();
    }

    

})