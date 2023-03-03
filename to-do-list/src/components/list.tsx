interface ListProps {
  items: item[];
}

interface item {
  title: string;
  description: string;
}

export default function List(props: ListProps) {
  const listItems = props.items.map((item) => {
    return (
      <li className="flex py-4 first:pt-0 last:pb-0">
        <div className="border hover:border-zinc-400 basis-full rounded-xl shadow hover:shadow-xl cursor-pointer">
          <p className="text-lg font-bold text-orange-500">{item.title}</p>
          <p className="text-sm text-slate-500 truncate">{item.description}</p>
        </div>
      </li>
    );
  });
  return (
    <ul role="list" className="p-6">
      {listItems}
    </ul>
  );
}
