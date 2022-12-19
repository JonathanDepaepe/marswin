// @ts-ignore
import { withIronSession } from "next-iron-session";
import {NextApiRequest, NextApiResponse} from "next";

export default withIronSession(
    async (req: NextApiRequest, res: NextApiResponse) => {
        if (req.method === "POST") {
            const { username, token, amount } = req.body;
                // @ts-ignore
            req.session.set("user", { username, token, amount});
                // @ts-ignore
            await req.session.save();
                return res.status(201).send("");
        }

        return res.status(404).send("");
    },
    {
        cookieName: "MYSITECOOKIE",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false
        },
        password: "123456789101121311415161718162loljiogfhdfgdfghgfsddf"
    }
);