import { FC } from "react";
import ChipItem from "./ChipItem";
import { Chip } from "../types/ChipTypes";
import "./ChipsContainer.css";

interface ChipsContainerProps {
  chips: Chip[];
  highlightLastChip: boolean;
  onRemove: (chipId: number) => void;
}

const ChipsContainer: FC<ChipsContainerProps> = ({
  chips,
  onRemove,
  highlightLastChip,
}) => (
  <div className="chips">
    {chips.map((chip, index) => (
      <ChipItem
        key={chip.id}
        chip={chip}
        onRemove={onRemove}
        highlightLastChip={highlightLastChip && index === chips.length - 1}
      />
    ))}
  </div>
);

export default ChipsContainer;
