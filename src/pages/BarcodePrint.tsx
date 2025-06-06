import React from "react";
import Barcode from "react-barcode";

export default function BarcodePrint() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "3rem",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Test Barcode</h1>

      <div
        style={{
          border: "1px dashed gray",
          padding: "1rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            marginTop: "2rem",
            display: "block",
            marginInline: "auto",
          }}
        >
          <Barcode
            value="FABR-12345678"
            width={2}
            height={100}
            displayValue={true}
            background="#ffffff"
            lineColor="#000000"
          />
        </div>
      </div>

      <button
        onClick={handlePrint}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Print Barcode
      </button>
    </div>
  );
}
