import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function HeadPage({ children }: ChildrenProps) {
  return (
    <>
      <div>
        <h1>{children}</h1>
      </div>
    </>
  );
}
