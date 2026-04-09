"use client";

import { Tangerine , Bilbo_Swash_Caps, UnifrakturMaguntia, EB_Garamond} from "next/font/google";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

import { useState } from "react";

const tangerine = Tangerine({
    weight: ["400", "700"],
    subsets: ["latin"],
  });

const bilbo = Bilbo_Swash_Caps({
    weight: ["400", "400"],
    subsets: ["latin"],
  });

const unifraktur_magunitia = UnifrakturMaguntia({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const eb_garamond = EB_Garamond({
  weight: ["400", "400"],
  subsets: ["latin"],
});



export default function Home() {
  const [studentId, setStudentId] = useState("");
  const [history, setHistory] = useState([]);
  const router = useRouter();

  const handleSearch = () => {
    if (!studentId) {
      alert("Please enter a Dragon Student ID");
      return;
    }
    router.push(`/results?studentId=${studentId}`);
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
        width={0}
        height={0}
        sizes="240px"
        style={{
          height: "240px",
          width: "auto",
          marginBottom: "10px",
        }}
      />
      {/* Logo / Title */}
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
      style={{ fontSize: "2.4rem", marginBottom: "20px", color: "#926D42", fontWeight: "normal" }}>
        Dragon Primary School Leaving Examination
      </h2>


      {/* Description */}
      <p 
      className={eb_garamond.className}
      style={{  fontSize: "1.3rem", maxWidth: "90%", marginBottom: "40px", color: "#926D42" }}>
        The Dragon Primary School Leaving Examination (DPSLE) is an annual global examination that is taken by candidates at the end of their final year of dragon primary school education.
      </p>

      <p 
      className={eb_garamond.className}
      style={{  fontSize: "1.3rem", maxWidth: "90%", marginBottom: "40px", color: "#926D42" }}>
        Established as a benchmark of excellence, the Dragon PSLE has a long-standing history of shaping disciplined,
        knowledgeable, and resilient dragon students. Over the years, it has evolved to focus not only on academic
        achievement but also on character development and lifelong learning.
      </p>

      <p 
      className={eb_garamond.className}
      style={{ fontWeight: "bold", fontSize: "1.3rem", maxWidth: "90%", marginBottom: "40px", color: "#926D42" }}>
        Search your DPSLE Score here.
      </p>

      {/* Search Section */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
       <input
        type="text"
        placeholder="Enter Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "8px",
          backgroundColor: "#5B3C13", // input box color
          border: "0px",
          color: "white", // text color for readability

          // Outline (outer border effect)
          outline: "3px solid #926D42",
          outlineOffset: "2px", // creates space between border and outline
          width: "250px",
        }}
      />

        <button
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
    </main>
  );
}