import { Request, Response } from 'express';

export default function authorisation(checkUsername: () => boolean) {
    return (req: Request, res: Response, next: () => void) => {
        if(["POST", "DELETE"].indexOf(req.method) == -1) {
            next();
        } else {
            if(req.session.username) { 
                next();
            }
        }
    }
};