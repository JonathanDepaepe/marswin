import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
        const body = req.body;
        if (body.cPassword !== body.password) {
                res.status(400).json({"error": "You password doesnt match"});
        }

        let registerRes = await fetch('https://go-api-lgafo.ondigitalocean.app/api/register', {
                method: 'post',
                headers: {
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        username: body.username,
                        password: body.password
                }),
        });
        const register = await registerRes.json();
        if (registerRes.status === 400) {
                res.status(400).json(register);
        } else {
                res.status(200).send("succes");
        }
}