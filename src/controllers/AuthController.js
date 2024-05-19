const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class AuthController {
    async create(request, response) {
        try {
            const { cpf, password } = request.body;

            // Validação básica (pode ser melhorada)
            if (!cpf || !password) {
                return response.status(400).json({ message: "CPF e senha são obrigatórios" });
            }

            const hashedPassword = await hash(password, 8);

            const user = await prisma.auth.create({
                data: {
                    cpf,
                    password: hashedPassword,
                },
            });

            response.json(user);
        } catch (err) {
            console.error("Erro ao criar usuário:", err);
            return response.status(409).json({ message: "Erro ao criar usuário" });
        }
    }

    async login(request, response) {
        try {
            const { cpf, password } = request.body;

            // Validação básica (pode ser melhorada)
            if (!cpf || !password) {
                return response.status(400).json({ message: "CPF e senha são obrigatórios" });
            }

            const user = await prisma.auth.findUnique({
                where: { cpf },
            });

            if (!user) {
                return response
                    .status(403)
                    .json({ message: "Senha ou CPF inválidos" });
            }

            const isPasswordValid = await compare(password, user.password);
            if (!isPasswordValid) {
                return response
                    .status(403)
                    .json({ message: "Senha ou CPF inválidos" });
            }

            const token = sign({ user }, process.env.AUTH_SECRET, {
                expiresIn: 86400,
            });

            response.json({ token });
        } catch (err) {
            console.error("Erro ao fazer login:", err);
            return response.status(409).json({ message: "Erro ao fazer login" });
        }
    }
}

module.exports = AuthController;