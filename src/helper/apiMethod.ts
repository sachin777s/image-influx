import { sql } from "@vercel/postgres"

export const findUserById = async (id: string) => {
    const { rows } = await sql`SELECT * FROM Users WHERE id=${id}`;
    const user = rows[0];
    if (!user) {
        return null;
    }
    return user;
}