
import { Request, Response } from "express";
import { container, injectable } from "tsyringe";
import { RefreshTokenUseCase } from "./refreshTokenUseCase";


@injectable()
class RefreshTokenController {
    
    async handle(request:Request, response:Response): Promise<Response>{
        const token = request.body.token || 
        request.headers["x-access-token"] || 
        request.query.token;

        const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

        const refresh_token = await refreshTokenUseCase.execute(token);

        return response.json(refresh_token);
    }
}

export { RefreshTokenController}