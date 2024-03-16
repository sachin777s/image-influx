import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: NextRequest) {
    try {
        const user = await request.json();
        //Creating table if not exits
        sql`
        CREATE TABLE IF NOT EXISTS Users(
            id VARCHAR(50) PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            email VARCHAR(50) NOT NULL,
            followers VARCHAR(50)[],
            followings VARCHAR(50)[]
        )
        `;
        const result = sql`
         INSERT INTO Users VALUES(${user.id},${user.name},${user.email})
        `;
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
