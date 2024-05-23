const form = document.getElementById("FormContacto");
const expresion = {
	email:  /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i, // Correo Electronico.
	Telef: /^\d{10}$/
	
}

function validaremail() {
	var valor = document.getElementById("email").value;
	var vlce = false;
	if (!expresion.email.test(valor)){
		alert('Invalid email');
		vlce = false;
	}
	else{
		console.log("Valid email");
		vlce = true;
	}
	return vlce;
}

function validartelefono(){
	var valor = document.getElementById("telefono").value;
	var vltl = false;
	if(valor.length == 10 && !isNaN(valor)){
		vltl = true;
	}else{
		alert('Por favor ingrese un numero valido.');
	}
	return vltl;
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

function validar(){
	if(validaremail() && validartelefono()){
		alert("Los datos ingresados son los correctos");
		return true;
	}else{
		return false;
	}
}

async function deshabilitar(){
	if(validar() == true){
		var btn = document.getElementById('btn');
		btn.disabled = true;
		btn.value = 'Enviando datos ..........';
		await delay(2);
		btn.form.submit();
	}

}
