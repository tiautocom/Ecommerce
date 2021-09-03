import { Router } from "express";
import { CreateUserController } from "../controller/CreateUserController";
import { CreateTagController } from "../controller/CreateTagController";
import { AuthenticateUserController } from "../controller/AuthenticateUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { CreateEmpresaController } from "../controller/CreateEmpresaController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createEmpresaController = new CreateEmpresaController();

router.post("/users", createUserController.handle)
router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/empresa", ensureAdmin, createEmpresaController.handle)

export { router }