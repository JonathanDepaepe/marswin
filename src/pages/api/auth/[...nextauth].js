import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';



export default NextAuth({

    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'my-project',
            credentials: {
                username: { label: 'username', type: 'text', placeholder: 'username',},
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const payload = {
                    username: credentials.username,
                    password: credentials.password,
                };

                const res = await fetch('https://go-api-lgafo.ondigitalocean.app/api/login', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept-Language': 'en-US',
                    },
                });
                const user = await res.json();
                if (!res.ok) {
                    throw new Error(user.error);
                }
                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user;
                }

                // Return null if user data could not be retrieved
                return null;
            },
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    accessToken: user.token,
                };
            }
            return token;
        },

        async session({ session, token}) {
            let userInfo = await getUserInfo(token);
            session.user.accessToken =  token.accessToken;
            session.user.name = userInfo.username;
            session.user.email = userInfo.wallet;
            return session;
        },
    },
    theme: {
        colorScheme: 'auto', // "auto" | "dark" | "light"
        brandColor: '', // Hex color code #33FF5D
        logo: '/vercel.svg', // Absolute URL to image
    },
    // Enable debug messages in the console if you are having problems
    debug: process.env.NODE_ENV === 'development',
});

export async function getUserInfo(token) {
    const res = await fetch('https://go-api-lgafo.ondigitalocean.app/api/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token.accessToken,
        },
    });
    let user = await res.json();
    return {'username': user.username, 'wallet': user.wallet}
}


