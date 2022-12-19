import type { NextApiRequest, NextApiResponse } from 'next'
import {getUserInfo} from "./login";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    let betRes = await fetch('https://go-api-lgafo.ondigitalocean.app/api/bets', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + body.token,
        },
        body: JSON.stringify({
            race_id: parseInt(body.raceID),
            amount: parseInt(body.amount),
            driver_id: parseInt(body.driverID)
        }),
    });
    const bet = await betRes.json()
    if (betRes.status === 400) {
        res.status(400).json(bet);
    } else {
        const userinfo = await getUserInfo(body.token)
        res.status(200).json(userinfo);
    }
}