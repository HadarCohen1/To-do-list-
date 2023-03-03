import NavBar from "../components/navbar";

const optionsExample = [
  { title: "Home", url: "/home" },
  { title: "Boards", url: "/boards" },
];

export default function Home() {
  return (
    <div>
      <NavBar options={optionsExample} />
    </div>
  );
}
