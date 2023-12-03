import Sidebar from "./Sidebar";

interface Props {
  children: JSX.Element;
}

export default function LayoutApp({ children }: Props) {
  return (
    <>
      <Sidebar />
    </>
  );
}
