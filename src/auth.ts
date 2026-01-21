import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import type { User as NextAuthUser } from 'next-auth';

// Define custom user type extending NextAuth's User
interface ExtendedUser extends NextAuthUser {
    id: string;
}

// Extend the Session type
declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;

                    await dbConnect();
                    const user = await User.findOne({ email }).select('+password');
                    if (!user) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password as string);

                    if (passwordMatch) {
                        return {
                            id: user._id.toString(),
                            name: user.name,
                            email: user.email,
                            image: user.image,
                        };
                    }
                }

                console.log('Invalid credentials');
                return null; // Return null if validation fails or user not found
            },
        }),
    ],
});
