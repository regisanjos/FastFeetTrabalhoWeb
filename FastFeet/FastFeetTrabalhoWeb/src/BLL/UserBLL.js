function create(cpf,password){
    try{
    if( cpf != null & CpfIsValid)
        // const user = await this.userDAO(cpf,password);

        return response.status(200).json();
    }catch(err) {
        return response.status(409).json();
    }
}

function CpfIsValid(cpf){
return true
}