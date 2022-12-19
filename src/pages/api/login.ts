import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);
    let betRes = await fetch('https://go-api-lgafo.ondigitalocean.app/api/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Username: body.username,
            Password: body.password
        }),
    });
    const bet = await betRes.json()

    if (betRes.status === 400) {
        res.status(400).json(bet);
    } else {
        const userinfo = await getUserInfo(bet.token)
        res.status(200).json({
            username: userinfo.username,
            token: bet.token,
            amount: userinfo.wallet
        });
    }
}

// @ts-ignore
export async function getUserInfo(token) {
    const res = await fetch('https://go-api-lgafo.ondigitalocean.app/api/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token,
        },
    });
    let user = await res.json();
    return {'username': user.username, 'wallet': user.wallet}
}