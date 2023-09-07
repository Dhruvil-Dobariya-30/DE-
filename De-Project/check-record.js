document.addEventListener("DOMContentLoaded", function() {
  const enrollmentNumberSpan = document.getElementById("enrollment-number");
  const checkAttendanceButton = document.getElementById("check-attendance-btn");
  const attendanceRecordsDiv = document.getElementById("attendance-records");
  const attendanceRecordsList = document.getElementById("attendance-records-list");

  checkAttendanceButton.addEventListener("click", function() {
      // Simulated attendance records (replace with actual data fetched from server)
      const attendanceData = [
          { date: "2023-08-25", subject: "Math", status: "Present" },
          { date: "2023-08-24", subject: "Science", status: "Absent" },
          { date: "2023-08-23", subject: "History", status: "Present" },
          { date: "2023-08-22", subject: "English", status: "Present" },
          { date: "2023-08-21", subject: "Physics", status: "Absent" },
      ];

      // Populate attendance records
      attendanceRecordsList.innerHTML = "";
      attendanceData.forEach(record => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${record.date}</td>
              <td>${record.subject}</td>
              <td>${record.status}</td>
          `;
          attendanceRecordsList.appendChild(row);
      });

      // Show attendance records
      attendanceRecordsDiv.classList.remove("hidden");
  });
});
