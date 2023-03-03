import List from "../components/list";
import NavBar from "../components/navbar";

const listExample = [
  { title: "Work", description: "Work things I need to do" },
  { title: "Study", description: "My Study assignments" },
];

const optionsExample = [
  { title: "Home", url: "/home" },
  { title: "Boards", url: "/boards" },
];

export default function Boards() {
  return (
    <div className="App">
      <NavBar options={optionsExample} />
      <List items={listExample} />
    </div>
  );
}
