"use client";

import dynamic from "next/dynamic";

const FieldMap = dynamic(() => import("./FieldMap"), {
  ssr: false,
});

export default function FieldMapWrapper() {
  return <FieldMap />;
}