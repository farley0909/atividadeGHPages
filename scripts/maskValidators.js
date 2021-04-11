const Mask={
    cpfCnpj(input){
        let value= input.value;
        value = value.replace(/\D/,"");
        if(value.length>14){
            value=value.slice(0,-1)
        }
        value=value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        input.value=value;
    },
    cep(input){
        let value=input.value;
        value = value.replace(/\D/,"");
        if(value.length>8){
            value=value.slice(0,-1)
        }
        value=value.replace(/(\d{5})(\d{3})/, "$1-$2")
        input.value=value;
    }
}
const Validate={
    isEmail(input){
        Validate.clearErrors(input);
        let value=input.value;
        let error= null;
        const formatEmail=/^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;
        if(!value.match(formatEmail)){
            error="email invalido";
            Validate.displayError(input,error)
        }

    },
    clearErrors(input){
        let value=input.value;
        const errorDiv=input.parentNode.querySelector('.error');
        if(errorDiv){
            errorDiv.remove()
            return;
        }
        input.value= value;
    },isCPF_CNPJ(input){
        Validate.clearErrors(input);
        let value=input.value;
        let error= null;
        const clearValues=value.replace(/\D/g,'');
        if(clearValues.length<14 && clearValues.length!= 14){
            error="CNPJ incorreto";
        }
        if(error){
            Validate.displayError(input, error);
            return;
        }
        input.value=value;
    },isCEP(input){
        Validate.clearErrors(input);
        let value=input.value;
        let error= null;
        const clearValues=value.replace(/\D/g, '');
        if(clearValues.length!=8){
            error="CEP incorreto"
            Validate.displayError(input, error);
        }
        input.value=value;
    },
    displayError(input, error){
        const div=document.createElement('div');
        div.classList.add('error');
        div.innerHTML=error;
        input.parentNode.appendChild(div);
        input.focus();
    }
}
