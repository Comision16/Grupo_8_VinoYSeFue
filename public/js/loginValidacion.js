console.log('¡Conexion exitosa!');

const formLogin = $('form-login');
const elements = formLogin.elements;

console.log(elements);

const exRegAlfa = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
const exRegPass = /(?=(.*[0-8]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/


const msgError = (element, msg, {target}) =>{
    $(element).innerText = msg;
    target.classList.add('is-invalid');

};

const cleanField = (element, target) => {
    $(element).innerText = null;
    target.classList.remove('is-invalid', 'is-valid')
};

const validField = (element, {target}) => {
    cleanField(element, target)
    target.classList.add('is-valid');
};

const checkFields = () => {
    let error = false;
    for(let i = 0; i < elements.length - 2; i++){

        if(!elements[i].value || elements[i].classList.contains('is-invalid')){
            error = true
        }
        console.log(error)
    }
    
    if(!error){
        $('btn-submit').disabled = false;
      }else{
        $('btn-submit').disabled = true;
      };
};


$("email").addEventListener("blur",function(e){
    switch (true){
        case !this.value.trim():
        msgError("msgEmail","El email es obligatorio",e);
        break;
        case !exRegEmail.test(this.value):
        msgError("msgEmail","El email tiene un formato invalido",e);
        break
        default:
            validField("msgEmail",e)
            break;
    }

    checkFields()

    $('email').addEventListener('focus', function({target}){
        cleanField('msgEmail', target)
    });
});


$("password").addEventListener("blur",function(e){
    switch (true){
        case !this.value.trim():
        msgError("msgPassword","La contaseña es obligatoria",e);
        break;
        case !exRegPass.test(this.value):
        msgError("msgPassword","La contaseña debe tener entre 6 y 12 caracteres, un numero, una mayúscula y un caracter especial",e);
        break;
        default:
            validField("msgPassword",e)
            break;
    }

    checkFields()

    $('password').addEventListener('focus', function({target}){
        cleanField('msgPassword', target)
    });
});

