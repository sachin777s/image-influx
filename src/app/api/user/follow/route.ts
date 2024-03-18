import { findUserById } from "@/helper/apiMethod";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    try {
        const { userId, followingId } = await request.json();
        if (!userId || !followingId) {
            return NextResponse.json("Invalid Credentials!", { status: 403 });
        }

        if (userId === followingId) {
            return NextResponse.json("You can't follow yourself", { status: 403 })
        }

        const user = await findUserById(userId);
        if (!user) {
            return NextResponse.json("Invalid userID or followingId", { status: 400 })
        }

        const followingUser = await findUserById(followingId);
        if (!followingUser) {
            return NextResponse.json("Invalid userID or followingId", { status: 400 });
        }

        const isFollowed = user.followings === null
            ? false
            : user.followings.includes(followingId);
        if (isFollowed) {
            return NextResponse.json("Already Followed!", { status: 409 })
        }

        await sql`
        UPDATE Users
        SET followings = ARRAY_APPEND(followings, ${followingId})
        WHERE id = ${userId}
        `;

        await sql`
        UPDATE Users
        SET followers = ARRAY_APPEND(followers, ${userId})
        WHERE id = ${followingId}
        `;
        return NextResponse.json("Follow Successfull", { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json("Something went wrong!", { status: 500 })
    }
}