import { NextResponse } from "next/server";
import { auth } from "@/auth";
import dbConnect from "@/lib/db";
import Assignment from "@/models/Assignment";
import Attendance from "@/models/Attendance";
import User from "@/models/User";

export async function GET(req: Request) {
    try {
        const session = await auth();
        if (!session || !session.user) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();
        const userId = session.user.id;

        const [assignments, attendanceData, user] = await Promise.all([
            Assignment.find({ userId }).sort({ dueDate: 1 }).limit(5),
            Attendance.find({ userId }),
            User.findById(userId).select('cgpa')
        ]);

        // Calculate aggregated stats
        const totalClasses = attendanceData.reduce((acc, curr) => acc + curr.totalClasses, 0);
        const attendedClasses = attendanceData.reduce((acc, curr) => acc + curr.attendedClasses, 0);
        const attendancePercentage = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0;

        const pendingAssignments = assignments.filter(a => a.status !== 'Completed').length;

        // Structure for the dashboard
        const dashboardData = {
            assignments: assignments.map(a => ({
                title: a.title,
                subject: a.subject,
                due: new Date(a.dueDate).toLocaleDateString(), // simplified
                status: a.status,
                progress: a.progress
            })),
            attendance: attendanceData.map(a => ({
                subject: a.subject,
                percentage: a.totalClasses > 0 ? (a.attendedClasses / a.totalClasses) * 100 : 0,
                bunkable: Math.max(0, Math.floor((a.attendedClasses / 0.75) - a.totalClasses)) // Rough calc for bunkable
            })),
            cgpa: user?.cgpa || 0,
            stats: {
                attendancePercentage,
                pendingAssignments
            }
        };

        return NextResponse.json(dashboardData);

    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        return NextResponse.json({ message: "Internal Error" }, { status: 500 });
    }
}
