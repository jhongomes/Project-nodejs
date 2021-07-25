import { Request, Response} from "express";

import { container, injectable } from "tsyringe";


import { ListFindByCPFCustomerUseCase} from "./listFindByCPFCustomerUseCase";


@injectable()
class ListFindByCPFCustomerController {

  async handle(request:Request, response:Response): Promise<Response>{
    const { id } = request.params;

    const listFindByCPFCustomerUseCase = container.resolve(ListFindByCPFCustomerUseCase);

    const searchSingleCustomerByCpf = await listFindByCPFCustomerUseCase.execute(id);

    return response.json(searchSingleCustomerByCpf);
  }


}

export { ListFindByCPFCustomerController}