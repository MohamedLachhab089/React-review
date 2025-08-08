import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading?: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];

  const message = items.length === 0 ? <p>No cities found.</p> : null;
  const message2 = items.length === 0 && <p>No cities found.</p>;

  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List of {heading}</h1>
      {message}
      {message2}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }} // handleClick
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
