export default interface AnswerOptionProps {
  option: string;
  isSelected: boolean;
  onSelect: (option: string) => void;
}
