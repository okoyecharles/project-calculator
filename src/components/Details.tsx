import React from "react";
import DetailItem from "./DetailItem";

export default function Details() {
  return (
    <section className="details grid gap-1">
      <DetailItem title="Project">Calculator Web Application</DetailItem>
      <DetailItem title="Name">Okoye Charles Kosisochukwu</DetailItem>
      <DetailItem title="Reg. Number">2021/248708</DetailItem>
      <DetailItem title="Design Method">The DevOps Method</DetailItem>
    </section>
  );
}
