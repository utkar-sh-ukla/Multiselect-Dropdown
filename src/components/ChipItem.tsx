import "./ChipItem.css";
import { Chip } from "../types/ChipTypes";
import { Cross } from "../assets/icons";

interface ChipProps {
  chip: Chip;
  highlightLastChip: boolean;
  onRemove: (id: number) => void;
}

const ChipItem: React.FC<ChipProps> = ({
  chip,
  onRemove,
  highlightLastChip,
}) => (
  <div
    key={chip.id}
    className={`chip ${highlightLastChip ? "highlighted-chip" : ""}`}
  >
    <img src={chip.avatar} alt={chip.name} className="avatar" />
    <span className="name">{chip.name}</span>
    <img
      src={Cross}
      alt="Remove"
      className="remove-icon"
      onClick={() => onRemove(chip.id)}
    />
  </div>
);

export default ChipItem;
