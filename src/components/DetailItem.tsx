import React from "react";

type DetailItemProps = {
  title: string;
  children: React.ReactElement | string;
};

export default function DetailItem({ title, children }: DetailItemProps) {
  return (
    <p className="text-gray-400 text-sm">
      <span className="text-gray-700">{title}</span> – {children}
    </p>
  );
}
