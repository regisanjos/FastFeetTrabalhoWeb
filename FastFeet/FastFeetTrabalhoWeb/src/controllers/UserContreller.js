const { read } = require("fs");
const UserAuthService = require("../service/user/User/UserAuthService");
const CreateUserService = require("../service/user/createUserSerice");
const userBLL = require("../BLL/UserBLL");
const { request } = require("http");

const userAuthService = new UserAuthService();
const createUserSerice = new CreateUserService();


class UserContreller{
    constructor(userAutservice){
        this.userAuthService = userAuthService
    }

    async singIn(request, response){
        try{
            const{cpf, password} = request.body;

            const token = await this.userAuthService.singIn(cpf, password);

            response.json(token);
        }catch (err) {
            return response.status(403).json();
        }
    }


    async singout(request, response){
        try{
            await this.userAuthService.singout();


            return response.status(204);
           }catch(err){
            return response.status(403).json();
           }
    }

    async create(request, response){
        try{
            const{cpf, password} = request.body;
            const user = await this.userBLL.Creeate(cpf, password)

            return response.status(200).json();
        }catch(err) {
            return response.status(409).json();
        }
    }


    async read(request, response) {
        try{
            const user = await this.readUserService.findById(request.parms.id);
            return response.status(200).json(user)
        }catch (err){
            return response.status(409).json();
        }
    }
}

module.exports = UserContreller;