"use client";

import { useEffect, useState } from "react";

export default function Year() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  // statically generated pages freeze the build-time year; refresh it on the client
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
