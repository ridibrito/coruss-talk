import React from "react";

interface Props {
  children: JSX.Element;
}

export default function LayoutLoguin({ children }: Props) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
