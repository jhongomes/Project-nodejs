import  { Router } from 'express';

import { CreateCustomerController } from "../../../../modules/customer/useCases/createCustomer/createCustomerController";
import { DeleteCustomerController } from '../../../../modules/customer/useCases/deleteCustomer/deleteCustomerController';
import { ListCustomerController } from '../../../../modules/customer/useCases/listCustomer/listCustomerController';
import { ListFindByCPFCustomerController } from '../../../../modules/customer/useCases/listFindByCpfCustomer.ts/listFindByCPFCustomerController';
import { UpdateCustomerController } from '../../../../modules/customer/useCases/updateCustomer/updateCustomerController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const customersRoutes = Router()

const createCustomerController = new  CreateCustomerController();
const listCustomerController = new ListCustomerController();
const listFindByCPFCustomerController = new ListFindByCPFCustomerController();
const updateCustomerController = new UpdateCustomerController();
const deleteCustomerController = new DeleteCustomerController();



customersRoutes.post("/", createCustomerController.handle);
customersRoutes.use(ensureAuthenticate)
customersRoutes.get("/", listCustomerController.handle);
customersRoutes.get("/:id", listFindByCPFCustomerController.handle);
customersRoutes.put("/:id", updateCustomerController.handle);
customersRoutes.delete("/:id", deleteCustomerController.handle);

export { customersRoutes}