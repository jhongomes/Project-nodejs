
import { Request, Response} from "express";
import { container, injectable } from "tsyringe";
import { ListUserUseCase } from "./listUserUseCase";

class ListUserController {

    async handle(request:Request, response:Response): Promise<Response>{

        const listUserUseCase = container.resolve(ListUserUseCase);

        const all = await listUserUseCase.execute();

        return response.json(all);

    }

}

export { ListUserController}