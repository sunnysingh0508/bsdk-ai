export function ProductivityChart() {
    const data = [2, 4, 3, 5, 4, 6, 4]; // Example hours per day
    const max = Math.max(...data);
    const points = data.map((val, i) => `${i * 100},${100 - (val / max) * 80}`).join(" ");

    return (
        <div className="h-full w-full pt-4">
            <svg className="h-[150px] w-full overflow-visible" viewBox="0 0 600 100" preserveAspectRatio="none">
                {/* Grid Lines */}
                <line x1="0" y1="25" x2="600" y2="25" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                <line x1="0" y1="50" x2="600" y2="50" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
                <line x1="0" y1="75" x2="600" y2="75" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />

                {/* Chart Area */}
                <path
                    d={`M0,100 ${points} L600,100 Z`}
                    className="fill-indigo-100/50 dark:fill-indigo-900/20"
                />
                {/* Line */}
                <polyline
                    points={`0,100 ${points} 600,100`}
                    fill="none"
                    className="stroke-indigo-500"
                    strokeWidth="3"
                />
                {/* Points */}
                {data.map((val, i) => (
                    <circle
                        key={i}
                        cx={i * 100}
                        cy={100 - (val / max) * 80}
                        r="4"
                        className="fill-white stroke-indigo-500 stroke-2"
                    />
                ))}
            </svg>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground px-1">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
            </div>
        </div>
    );
}
