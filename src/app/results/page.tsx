"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Student = {
  name: string;
  studentId: string;
  score: {
    English: number;
    "Mother Tongue (Chinese)": number;
    Mathematics: number;
    Science: number;
    "Social Studies": number;
  };
};

export default function ResultPage() {
  const router = useRouter();

  const [studentId, setStudentId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [student, setStudent] = useState<Student | null>(null);

  const students: Student[] = [
    {
      name: "Marshmellow Tan Yu Kui",
      studentId: "D2019883568I",
      score: {
        English: 89,
        "Mother Tongue (Chinese)": 92,
        Mathematics: 90,
        Science: 91,
        "Social Studies": 83,
      },
    },
    {
      name: "Mayonnaise Tan Xin Yu",
      studentId: "D2020744972J",
      score: {
        English: 96,
        "Mother Tongue (Chinese)": 90,
        Mathematics: 97,
        Science: 98,
        "Social Studies": 89,
      },
    },
  ];

  // ✅ Get studentId from URL manually
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("studentId");
    setStudentId(id);
  }, []);

  // ✅ Find student after studentId is available
  useEffect(() => {
    if (!studentId) return;

    setLoading(true);

    setTimeout(() => {
      const found = students.find(
        (s) => s.studentId.toLowerCase() === studentId.toLowerCase()
      );

      setStudent(found || null);
      setLoading(false);
    }, 1500);
  }, [studentId]);

  const calculateTotal = (score: Student["score"]) => {
    return Object.values(score).reduce((acc, val) => acc + val, 0);
  };

  if (!studentId) {
    return (
      <main style={{ textAlign: "center", padding: "40px" }}>
        <h2>No Student ID provided</h2>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#926D42", marginBottom: "20px" }}>
        Student Result
      </h1>

      {/* Loading */}
      {loading && <p style={{ color: "#926D42" }}>Loading...</p>}

      {/* Result */}
      {!loading && student && (
        <div
          style={{
            width: "90%",
            border: "40px solid transparent",
            borderImage: "url('/fancy_border_left.svg') 100 stretch",
            padding: "20px",
          }}
        >
          <div
            style={{
              padding: "10px",
              width: "100%",
              color: "#5B3C13",
            }}
          >
            {/* Student Info Box */}
            <div
              style={{
                backgroundColor: "#5B3C13",
                color: "white",
                padding: "15px",
                borderRadius: "10px",
                outline: "3px solid #5B3C13",
                outlineOffset: "3px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              <p>{student.name}</p>
              <p style={{ fontSize: "1.2rem" }}>ID: {student.studentId}</p>
            </div>

            {/* Score Box */}
            <div
              style={{
                backgroundColor: "#926D42",
                color: "white",
                padding: "15px",
                borderRadius: "10px",
                outline: "3px solid #926D42",
                outlineOffset: "3px",
                fontSize: "1rem",
              }}
            >
              <p>English: {student.score.English}</p>
              <p>Chinese: {student.score["Mother Tongue (Chinese)"]}</p>
              <p>Mathematics: {student.score.Mathematics}</p>
              <p>Science: {student.score.Science}</p>
              <p>Social Studies: {student.score["Social Studies"]}</p>
            </div>

            <hr style={{ margin: "10px 0" }} />

            <h3 style={{ fontSize: "1.5rem" }}>
              Total: {calculateTotal(student.score)}
            </h3>
          </div>
        </div>
      )}

      {/* Not found */}
      {!loading && !student && (
        <p style={{ color: "#926D42", paddingBottom: "10px" }}>
          Student not found
        </p>
      )}

      {!loading && (
        <button
          onClick={() => router.back()}
          style={{
            marginBottom: "20px",
            padding: "10px 20px",
            backgroundColor: "#926D42",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Back
        </button>
      )}
    </main>
  );
}