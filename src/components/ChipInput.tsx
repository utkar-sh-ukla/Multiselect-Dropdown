import React, {
  FC,
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import ChipsContainer from "./ChipsContainer";
import DropdownItem from "./DropdownItem";
import "./ChipInput.css";
import { Profiles } from "../data";
import { Chip } from "../types/ChipTypes";

const ChipInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<Chip[]>([]);
  const [highlightLastChip, setHighlightLastChip] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState<Chip[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFilteredItems(
      Profiles.filter(
        (item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase()) &&
          !chips.some((chip) => chip.id === item.id)
      )
    );
    setSelectedItemIndex(-1);
  }, [inputValue, chips]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    setSelectedItemIndex(-1);
    setShowDropdown(newInputValue.length > 0);
  };

  const handleInputFocus = () => setShowDropdown(true);

  const handleItemSelect = (item: Chip) => {
    setChips([...chips, { ...item }]);
    setFilteredItems(filteredItems.filter((i) => i.id !== item.id));
    setInputValue("");
    setShowDropdown(false);
    inputRef.current?.focus();
  };

  const handleChipRemove = (chipId: number) => {
    const removedChip = chips.find((chip) => chip.id === chipId);
    setChips(chips.filter((chip) => chip.id !== chipId));
    removedChip && setFilteredItems([...filteredItems, removedChip]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (showDropdown && filteredItems.length > 0) {
      const lastIndex = filteredItems.length - 1;
      if (event.key === "ArrowDown" && selectedItemIndex < lastIndex) {
        setSelectedItemIndex(selectedItemIndex + 1);
      } else if (event.key === "ArrowUp" && selectedItemIndex > 0) {
        setSelectedItemIndex(selectedItemIndex - 1);
      } else if (event.key === "Enter") {
        if (selectedItemIndex !== -1) {
          handleItemSelect(filteredItems[selectedItemIndex]);
        } else {
          handleItemSelect(filteredItems[0]);
        }
        setShowDropdown(true);
      }
    }

    if (event.key === "Backspace" && inputValue === "" && chips.length > 0) {
      event.preventDefault();
      if (selectedItemIndex === chips.length - 1) {
        handleChipRemove(chips[chips.length - 1].id);
        setHighlightLastChip(false);
      } else {
        setSelectedItemIndex(chips.length - 1);
        setHighlightLastChip(true);
      }
    }

    const dropdownElement = dropdownRef.current;
    const selectedItemElement = dropdownElement?.querySelector(
      ".dropdown-item-selected"
    );
    if (dropdownElement && selectedItemElement) {
      selectedItemElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleDropdownItemClick = (
    event: React.MouseEvent,
    item: Chip,
    index: number
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedItemIndex(index);
    handleItemSelect(item);
    inputRef.current?.focus();
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdownRef]);

  return (
    <div className="chip-input-container">
      <ChipsContainer
        chips={chips}
        onRemove={handleChipRemove}
        highlightLastChip={highlightLastChip}
      />
      <div className="chip-input-box">
        <input
          className="input"
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder="Type to search..."
        />
        {showDropdown && (
          <div ref={dropdownRef} className="dropdown">
            {filteredItems.map((item, index) => (
              <DropdownItem
                key={item.id}
                item={item}
                inputValue={inputValue}
                index={index}
                onClick={(e) => handleDropdownItemClick(e, item, index)}
                isSelected={index === selectedItemIndex}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChipInput;
