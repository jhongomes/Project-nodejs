import {Router} from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";
import { ListUserController } from "../../../../modules/accounts/useCases/listUser/listUserController";




const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new  ListUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.use(ensureAuthenticate)
usersRoutes.get("/", listUserController.handle);

export { usersRoutes }