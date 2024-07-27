import express from 'express';
import User from '../models/userModel';

const userRouter = express.Router();

userRouter.get("/creatadmin", async (req, res) => {
    try {
        const user = new User({
            name:'admin',
            email:'admin@example.com',
            password:'admin',
            isAdmin: true,
        });
        const createdUser = await user.save();
        res.send(createdUser);
    } catch (err) {
       res.status(500).send({ message: err.message});
    }
});

export default userRouter;