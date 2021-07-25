import { Router } from 'express';
import { AuthenticateUserContoller } from '../../../../modules/accounts/useCases/authenticateUser/authenticateUserController';
import { RefreshTokenController } from '../../../../modules/accounts/useCases/refreshToken/refreshTokenController';



const authenticateRoutes = Router();

const authenticateUseController = new AuthenticateUserContoller();
const refreshTokenController = new RefreshTokenController()

authenticateRoutes.post("/sessions", authenticateUseController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle)

export { authenticateRoutes }