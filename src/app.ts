import express from "express";
import cors from "cors";
import { errorResponse, handleError, } from "./utils/responses";
import { IUser } from "./utils/interface";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    try {
        const details: IUser = {
            slackUsername: "Adeosun Deji",
            backend: true,
            age: 26,
            bio: "I'm a Backend dev(Nodejs). When i'm not coding, I love playing video games and playing football. My tech journey has been amazing so far vand i just want to keep doing my best so i can be a world class develpoer."
        };
        return res.json(details);
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, "server error..");
    }
})

app.listen(2000, () => {
    console.log("listening on port 2000");
})