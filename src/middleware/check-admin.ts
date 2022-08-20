import jwt from 'jsonwebtoken';
import { SECRET_KEY } from './auth-middleware';

export const checkIsAdmin = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            res.status(401).json({
                message: 'You are anonymous'
            });
        } else {
            jwt.verify(accessToken, SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous'
                    });
                } else {
                    console.log(data);
                    if (data.role === 'admin') {
                        next();
                    } else {
                        res.status(401).json({
                            message: 'you are not admin'
                        });
                    }                 
                }
            });
        }
    } else {
        res.status(401).json({
            message: 'You are anonymous'
        });
    }
}