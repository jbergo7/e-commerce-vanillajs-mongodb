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
    );
};
export const isAuth = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if(!bearerToken){
        res.status(401).send({ message: 'Token is not supplied' });
    } else {
        //console.log(bearerToken);
        const token = bearerToken.slice(7, bearerToken.length);
        //console.log(token);
        jwt.verify(token, config.JWT_SECRET, (err, data) => {
            if(err){
                res.status(401).send({ message: 'Invalid Token' });
            } else {
                req.user = data;
                next();
            }
        });
    }
}