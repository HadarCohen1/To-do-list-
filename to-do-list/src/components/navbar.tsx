import { Link } from "react-router-dom";

interface NavBarProps {
  options: option[];
}

interface option {
  title: string;
  url: string;
}

export default function NavBar(props: NavBarProps) {
  const listOptions = props.options.map((option) => {
    return (
      <Link
        to={option.url}
        className="px-3 py-2 text-slate-700 font-medium hover:text-blue-400 shadow-sm"
      >
        {option.title}
      </Link>
    );
  });
  return (
    <nav className="flex sm:justify-start space-x-4 divide-gray-900 rounded-md shadow-md">
      {listOptions}
    </nav>
  );
}
