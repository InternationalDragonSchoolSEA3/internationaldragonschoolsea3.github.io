"use client";

import Image from "next/image";
import { Tangerine, Bilbo_Swash_Caps, UnifrakturMaguntia, EB_Garamond } from "next/font/google";
import { useState } from "react";
import styles from "./page.module.css";

const unifraktur_magunitia = UnifrakturMaguntia({
  weight: ["400"],
  subsets: ["latin"],
});

const eb_garamond = EB_Garamond({
  weight: ["400"],
  subsets: ["latin"],
});

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

export default function Home() {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

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

  const calculateTotal = (score: Student["score"]) => {
    return Object.values(score).reduce((acc, val) => acc + val, 0);
  };

  const handleSearch = () => {
    if (!studentId) {
      alert("Please enter a Dragon Student ID");
      return;
    }

    setLoading(true);
    setShowResult(true);
    setTimeout(() => {
      const found = students.find(
        (s) => s.studentId.toLowerCase() === studentId.toLowerCase()
      );

      setStudent(found || null);
      setLoading(false);
    }, 1500);
  };

  const handleBack = () => {
    setShowResult(false);
    setStudent(null);
    setStudentId("");
  };

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
      {/* BACKGROUND */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "350px",
          zIndex: -1,
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      >
        <Image
          src="/background_image_1.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <Image
        src="/DPSLE_logo_.png"
        alt="DPSLE Logo"
        width={240}
        height={200}
        style={{
          marginBottom: "10px",

        }}
      />

      <h1
        className={unifraktur_magunitia.className}
        style={{
          fontSize: "4rem",
          marginBottom: "10px",
          color: "#926D42",
        }}
      >
        DPSLE Foundation
      </h1>

      <h2
        className={unifraktur_magunitia.className}
        style={{
          fontSize: "2.4rem",
          marginBottom: "20px",
          color: "#926D42",
          fontWeight: "normal",
        }}
      >
        Dragon Primary School Leaving Examination
      </h2>

      {/* ================= SEARCH VIEW ================= */}
      {!showResult && (
        <>
          <p
            className={eb_garamond.className}
            style={{
              fontSize: "1.3rem",
              maxWidth: "90%",
              marginBottom: "40px",
              color: "#926D42",
            }}
          >
            The Dragon Primary School Leaving Examination (DPSLE) is an annual global examination that is taken by candidates at the end of their final year of dragon primary school education.
          </p>

          <p className={eb_garamond.className} style={{ fontSize: "1.3rem", maxWidth: "90%", marginBottom: "40px", color: "#926D42" }}> Established as a benchmark of excellence, the Dragon PSLE has a long-standing history of shaping disciplined, knowledgeable, and resilient dragon students. Over the years, it has evolved to focus not only on academic achievement but also on character development and lifelong learning. </p>

          <p
            className={eb_garamond.className}
            style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
              marginBottom: "40px",
              color: "#926D42",
            }}
          >
            Search your DPSLE Score here.
          </p>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <input className={eb_garamond.className}
              type="text"
              placeholder="Enter Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              style={{
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "8px",
                backgroundColor: "#5B3C13",
                border: "0px",
                color: "white",
                outline: "3px solid #926D42",
                outlineOffset: "2px",
                width: "250px",
              }}
            />

            <button className={eb_garamond.className}
              onClick={handleSearch}
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "#926D42",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </>
      )}

      {/* ================= RESULT VIEW ================= */}
      {showResult && (
        <div style={{
            marginTop: "20px",
            width: "90%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",      // center horizontally
            justifyContent: "center",  // center vertically (if height is set)
            marginLeft: "auto",
            marginRight: "auto",       // center the container itself
            textAlign: "center",       // center text
          }}>
          <h1 className={eb_garamond.className} style={{ color: "#926D42", marginBottom: "20px" }}>
            Student Result
          </h1>

          {loading && <p className={eb_garamond.className}  style={{ fontSize: '2rem',
              }}
          >Loading...</p>}

          {!loading && student && (
            <div className={eb_garamond.className}
              style={{
                width: "90%",
                border: "40px solid transparent",
                borderImage: "url('/fancy_border_left.svg') 100 stretch",
                padding: "20px",
              }}
            >
              <div style={{ padding: "10px", color: "#5B3C13" }}>
                <div
                  style={{
                    backgroundColor: "#5B3C13",
                    color: "white",
                    padding: "15px",
                    borderRadius: "10px",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    border: "0px",
                    outline: "3px solid #5B3C13",
                    outlineOffset: "3px",
                  }}
                >
                  <p>{student.name}</p>
                  <p style={{ fontSize: "1.2rem" }}>
                    ID: {student.studentId}
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: "#926D42",
                    color: "white",
                    padding: "15px",
                    borderRadius: "10px",
                    outline: "3px solid #926D42",
                    outlineOffset: "3px",
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

          {!loading && !student && (
            <p style={{ color: "#926D42" }}>Student not found</p>
          )}

          <button className={eb_garamond.className}
            onClick={handleBack}
            style={{
              marginTop: "20px",
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
        </div>
      )}
    </main>
  );
}