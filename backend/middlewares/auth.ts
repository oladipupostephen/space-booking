import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// import User from '../models/user';

declare global {
    namespace Express {
        interface Request { 
            user?: any; 
        }
    }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'unauthorized' });
    }   

}

const adminGuard = async (req: Request, res: Response, next: NextFunction) => {
    const user  = await User.findByPk((req as any).user.id);

    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }

    if(user.role !== 'admin'){
        return res.status(403).json({ message: 'Access denied' });
    }

    next();
}

export default adminGuard;