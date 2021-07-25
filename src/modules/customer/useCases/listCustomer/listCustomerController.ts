import { Request, Response} from "express";
import { container, injectable } from "tsyringe";
import { ListCustomerUseCase } from "./listCustomerUseCase";


@injectable()
class ListCustomerController {

    async handle(request:Request, response:Response): Promise<Response>{

    const listCustomerUseCase = container.resolve(ListCustomerUseCase);

    const all = await listCustomerUseCase.execute();

    return response.json(all);
    }
}

export { ListCustomerController}


