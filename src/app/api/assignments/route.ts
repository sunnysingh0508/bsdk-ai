import { NextResponse } from "next/server";
import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import Assignment from "@/models/Assignment";

export async function GET(req: Request) {
    try {
        const session = await auth();
        if (!session || !session.user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();
        const assignments = await Assignment.find({ userId: session.user.id }).sort({ dueDate: 1 });

        return NextResponse.json(assignments);
    } catch (error) {
        console.error("Error fetching assignments:", error);
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session || !session.user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { title, subject, dueDate, priority } = await req.json();

        if (!title || !subject || !dueDate) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        await dbConnect();
        const newAssignment = await Assignment.create({
            userId: session.user.id,
            title,
            subject,
            dueDate: new Date(dueDate),
            priority: priority || 'Medium',
            status: 'Pending',
            progress: 0
        });

        return NextResponse.json(newAssignment, { status: 201 });

    } catch (error) {
        console.error("Error creating assignment:", error);
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}
