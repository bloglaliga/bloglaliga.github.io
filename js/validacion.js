/**********************************************************************************/
/***                                      Archivo de validación JSON                                      ***/
/*********************************************************************************/
function registrar(){
    const  nomUsuario = document.getElementById("nombre").value;
    const  apeUsuario = document.getElementById("apellido").value;
    const  tlf = document.getElementById("tlf").value;
    const  password = document.getElementById("password").value;
    const  password2 = document.getElementById("password2").value;
    const  mail = document.getElementById("mail").value;
    const  mail2 = document.getElementById("mail2").value;
    const checkbox = document.getElementById("checkbox").checked;

    var valido = false; 
    var mensaje="Los campos incorrectos son: ";


  
    if(mail != mail2){
        mensaje+="los correos no coinciden ";
        valido = false
    } 
    if(password != password2){
        mensaje+="las contraseñas no coinciden ";
        valido = false;
    } 
    if(nomUsuario == ""){
        mensaje+= "nombre, ";
        valido = false;
    } 
    if(apeUsuario == ""){
        mensaje+="apellidos, ";
        valido = false;
    } 
    if(tlf == ""){
        mensaje+="teléfono, ";
        valido = false;
    } 
    if(password == ""){
        mensaje+="contraseña, ";
        valido = false;
    } 
    if(mail == ""){
        mensaje+="correo, ";
        valido = false;
    } 
    if(checkbox == false){
        mensaje+="acepte la polícia de privacidad, ";
    } 

    //Esta segunda validación la hago ya que, por un lado, tengo la que confecciona mi mensaje, la cual no sirve realmente para validar todo el conjunto de variables porque no
    //son if anidados y, por lo tanto, se quedaría con la última condición
    if(nomUsuario == "" || mail != mail2 || password != password2 || apeUsuario == "" || tlf == "" || password == "" || mail == "" || checkbox == false){
        valido = false;
    } else {
        valido == true;
    }
    var regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])(?!\s)[a-zA-Z\d#$@!%&*?]{8,16}$/;
    if(!regexp.test(password)){
        alert("El formato de la contraseña es incorrecto")
        valido = false;
    } else {
        valido = true;
    }

 
    if(valido){
        const objJS = {
            nomUsuario:nomUsuario,
            apeUsuario:apeUsuario,
            tlf:tlf,
            password:password,
            password2:password2,
            mail:mail,
            mail2:mail2,
            checkbox:checkbox,
        };
        alert(JSON.stringify(objJS));
    } else{
        mensaje+="rellene los todos los campos.";
        alert(mensaje);
    } 

};