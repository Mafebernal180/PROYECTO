function validarPaciente(){
    
    var idPaciente;
    var nombrePaciente;
    var apellidoPaciente;
    var DireccionPaciente;
    var telefonoPaciente;
    var correoPaciente;
    var fechaNacimiento;
   

    idPaciente = document.getElementById('idPaciente').value;
    nombrePaciente = document . getElementById('nombrePaciente').value;
    apellidoPaciente = document . getElementById('apellidoPaciente').value;
    DireccionPaciente=document . getElementById('DireccionPaciente').value;
    telefonoPaciente = document . getElementById('telefonoPaciente').value;
    correoPaciente = document . getElementById('correoPaciente').value;
    fechaNacimiento = document . getElementById('fechaNacimiento').value;
    estadopaciente  = document . getElementById('estadoPaciente').value;

    //validar campos vacios
    if(
      idPaciente === "" || nombrePaciente === "" || apellidoPaciente === "" || DireccionPaciente ===""||
        telefonoPaciente ==="" || correoPaciente === "" || fechaNacimiento === ""
    ){
     alert("REVISE EL FORMULARIO, NO DEBEN HABER CAMPOS VACIOS!!");
        return false;
    }

        //VALIDACION DE LONGITUD DEL idPaciente
      if(typeof idPaciente !== 'undefined' && idPaciente !== null) {
    var cantidad = idPaciente.length;
    if (cantidad > 11){
           alert("El Id del Paciente no puede tener mas de 11 numeros");
           return false;
       }
        //VALIDACION DE LONGITUD DEL TELEFONO
    if(telefonoPaciente.length === 10){
        return true;
    }
 }else{
        alert ("Verifique el numero del telefono, debe tener 10 caractares.");
        return false;
    }
    
}
    
