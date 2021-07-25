import { Router } from 'express';


import { customersRoutes } from "./customers.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from './authenticate.routes';

const router = Router();


router.use("/customers",customersRoutes )
router.use("/users", usersRoutes);
router.use(authenticateRoutes);
export { router }