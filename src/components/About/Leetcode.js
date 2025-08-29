import React from "react";
import { Row } from "react-bootstrap";

const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

function Leetcode() {
  const leetcodeUsername = "Sumera_Aafreen";

  // Generate demo calendar data for 8 months
  const generateCalendarData = () => {
    const days = [];
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1); // January 1st
    
    // Calculate total days for 8 months: 31+28+31+30+31+30+31+31 = 243 days
    const totalDays = MONTH_DAYS.reduce((a, b) => a + b, 0);
    
    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      // Random activity for demo (replace with actual LeetCode data)
      const hasActivity = Math.random() > 0.4;
      const problemCount = hasActivity ? Math.floor(Math.random() * 3) + 1 : 0;
      
      days.push({
        date: date,
        hasActivity: hasActivity,
        problemCount: problemCount
      });
    }
    return days;
  };

  const calendarData = generateCalendarData();

  // Render each month
  const renderMonth = (monthIndex) => {
    const daysInMonth = MONTH_DAYS[monthIndex];
    const startDay = MONTH_DAYS.slice(0, monthIndex).reduce((a, b) => a + b, 0);
    const weeksInMonth = Math.ceil(daysInMonth / 7);

    return (
      <div key={monthIndex} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {/* Month grid */}
        <div
          style={{
            display: "grid",
            gridTemplateRows: "repeat(7, 1fr)",
            gridTemplateColumns: `repeat(${weeksInMonth}, 1fr)`,
            gap: "5px",
          }}
        >
          {Array.from({ length: 7 }, (_, rowIndex) =>
            Array.from({ length: weeksInMonth }, (_, colIndex) => {
              const dayIndex = startDay + rowIndex + colIndex * 7;
              const day = calendarData[dayIndex];

              if (!day || dayIndex >= startDay + daysInMonth) {
                return (
                  <div
                    key={`${monthIndex}-${rowIndex}-${colIndex}`}
                    style={{ width: "15px", height: "15px" }}
                  />
                );
              }

              return (
                <div
                  key={`${monthIndex}-${rowIndex}-${colIndex}`}
                  style={{
                    width: "15px",
                    height: "15px",
                    backgroundColor: day.hasActivity
                      ? `rgba(192, 132, 245, ${0.3 + day.problemCount * 0.2})`
                      : "rgba(255, 255, 255, 0.1)",
                    borderRadius: "2px",
                    border: day.hasActivity ? "1px solid rgba(192, 132, 245, 0.5)" : "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  title={`${day.date.toLocaleDateString()}: ${day.problemCount} problems solved`}
                />
              );
            })
          ).flat()}
        </div>

        {/* Month name */}
        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: "500",
            marginTop: "5px",
          }}
        >
          {MONTH_NAMES[monthIndex]}
        </div>
      </div>
    );
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {/* Heading */}
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong> on LeetCode
      </h1>

      {/* Username */}
      <p
        style={{
          textAlign: "center",
          color: "rgba(255, 255, 255, 0.8)",
          marginBottom: "20px",
          fontSize: "1.1em",
        }}
      >
        <span className="purple">@{leetcodeUsername}</span>
      </p>

      {/* Calendar */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <div style={{ display: "flex", gap: "20px", maxWidth: "fit-content" }}>
          {MONTH_DAYS.map((_, monthIndex) => renderMonth(monthIndex))}
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginTop: "15px",
          }}
        >
          <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.7)" }}>Less</span>
          <div style={{ display: "flex", gap: "3px" }}>
            <div style={{ width: "15px", height: "15px", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "2px" }} />
            <div style={{ width: "15px", height: "15px", backgroundColor: "rgba(192, 132, 245, 0.3)", borderRadius: "2px" }} />
            <div style={{ width: "15px", height: "15px", backgroundColor: "rgba(192, 132, 245, 0.5)", borderRadius: "2px" }} />
            <div style={{ width: "15px", height: "15px", backgroundColor: "rgba(192, 132, 245, 0.7)", borderRadius: "2px" }} />
            <div style={{ width: "15px", height: "15px", backgroundColor: "rgba(192, 132, 245, 0.9)", borderRadius: "2px" }} />
          </div>
          <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.7)" }}>More</span>
        </div>
      </div>
    </Row>
  );
}

export default Leetcode;
