import React from "react";

type BarcodePrintProps = {
  material?: string;
  treatment?: string;
  barcode?: string;
};

const sampleData: BarcodePrintProps = {
  material: "Linen",
  treatment: "UV Coated",
  barcode: "FABR-12345678",
};

const BarcodePrint = () => {
  const { material, treatment, barcode } = sampleData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 print:p-0 print:bg-white bg-white text-black h-screen flex flex-col items-center justify-center">
      <div className="text-center border border-black p-6 rounded shadow print:shadow-none w-full max-w-sm">
        <h2 className="text-xl font-bold mb-2">Fabric Bolt</h2>
        <p className="mb-1">
          <strong>Material:</strong> {material}
        </p>
        <p className="mb-1">
          <strong>Treatment:</strong> {treatment}
        </p>
        <div className="my-4">
          <div className="text-2xl font-mono border border-black px-4 py-2 inline-block tracking-widest">
            {barcode}
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 print:hidden"
        >
          Print Barcode
        </button>
      </div>
    </div>
  );
};

export default BarcodePrint;
