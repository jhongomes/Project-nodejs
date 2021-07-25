import { Request, Response} from "express";
import { container } from "tsyringe";
import { DeleteCustomerUseCase } from "./deleteCustomerUseCase";


class DeleteCustomerController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
    
        const deleteCustomerUseCase = container.resolve(DeleteCustomerUseCase);

        await deleteCustomerUseCase.execute(id)

        return response.send();
    }

}

export { DeleteCustomerController}