import { NextResponse } from "next/server";
import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import Attendance from "@/models/Attendance";

export async function GET(req: Request) {
    try {
        const session = await auth();
        if (!session || !session.user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();
        const attendance = await Attendance.find({ userId: session.user.id });

        return NextResponse.json(attendance);
    } catch (error) {
        console.error("Error fetching attendance:", error);
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session || !session.user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { subject, attendedClasses, totalClasses } = await req.json();

        if (!subject) {
            return NextResponse.json({ message: "Subject is required" }, { status: 400 });
        }

        await dbConnect();

        // Check if record exists for this subject to update potentially? 
        // For now simple create or update logic

        const attendance = await Attendance.findOneAndUpdate(
            { userId: session.user.id, subject },
            {
                $set: {
                    attendedClasses: attendedClasses || 0,
                    totalClasses: totalClasses || 0
                }
            },
            { new: true, upsert: true } // Create if not exists
        );

        return NextResponse.json(attendance);
    } catch (error) {
        console.error("Error updating attendance:", error);
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}
