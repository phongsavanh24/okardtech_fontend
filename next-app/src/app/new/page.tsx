import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <h1>NEW</h1>
      <br />
      <Link href={"/new/detail"}>detail</Link>
    </div>
  );
}
