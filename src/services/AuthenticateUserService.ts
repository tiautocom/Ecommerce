import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthencateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthencateRequest) {

    const usersRepositories = getCustomRepository(UsersRepositories);

    // Verificar se o email existe
    const user = await usersRepositories.findOne({
      email
    })

    if (!user) {
      throw new Error("Email/Passowrd incorrect")
    }

    // Verificar se a senha está correta
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    // Gerar token
    const token = sign({
      email: user.email,}
    , "cc2e99baa56ea3157aa8766e91428cd9", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token;

  }

}

export { AuthenticateUserService }