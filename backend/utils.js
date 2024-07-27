import jwt from 'jsonwebtoken';
import config from './config';


export const generateToken = (user) => {
    return jwt.sign({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    },
    config.JWT_SECRET
    )
}