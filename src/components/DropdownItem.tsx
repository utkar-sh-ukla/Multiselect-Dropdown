import React, { FC } from "react";
import { Chip } from "../types/ChipTypes";
import "./DropdownItem.css";

interface DropdownItemProps {
  item: Chip;
  index: number;
  inputValue: string;
  onClick: (event: React.MouseEvent, item: Chip, index: number) => void;
  isSelected: boolean;
}

const DropdownItem: FC<DropdownItemProps> = ({
  item,
  index,
  inputValue,
  onClick,
  isSelected,
}) => {
  const highlightMatch = (
    text: string,
    query: string
  ): JSX.Element => {
    const startIndex = text.toLowerCase().indexOf(query.toLowerCase());
    if (startIndex === -1) return <>{text}</>;

    const endIndex = startIndex + query.length;
    return (
      <>
        {text.substring(0, startIndex)}
        <span className="highlight">{text.substring(startIndex, endIndex)}</span>
        {text.substring(endIndex)}
      </>
    );
  };

  return (
    <div
      onClick={(event: React.MouseEvent) => onClick(event, item, index)}
      className={`dropdown-item ${isSelected ? "dropdown-item-selected" : ""}`}
    >
      <img src={item.avatar} alt={item.name} className="avatar" />
      <span className="name">{highlightMatch(item.name, inputValue)}</span>
      <span className="email">{highlightMatch(item.email, inputValue)}</span>
    </div>
  );
};

export default DropdownItem;
