import React, { useState } from "react";
import QrReader from "react-qr-reader";

const Scanner: React.FC = () => {
  const [result, setResult] = useState<string | undefined>(undefined);

  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={100}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
};

export default Scanner;
