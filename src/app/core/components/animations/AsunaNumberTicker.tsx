import NumberTicker from "./internals/NumberTickerInternal";

interface AsunaNumberTickerProps {
  number: number;
  isDecimal?: boolean
  suffix?: string;
}


export function AsunaNumberTicker({number, isDecimal = false, suffix = '+'} : AsunaNumberTickerProps) {
  return (
    <p className="whitespace-pre-wrap font-semibold text-[40px] tracking-tightest text-primary-500 dark:text-white">
      <NumberTicker value={number} decimalPlaces={isDecimal ? 1 : 0} className="text-primary-500 font-semibold font-poppins" />
      <span>{suffix}</span> 
    </p>
  );
}
