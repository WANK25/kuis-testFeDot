export default interface NextPreviousProps {
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;

  showNext: boolean;
  showPrevious: boolean;
}
