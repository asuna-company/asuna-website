import { AsunaNumberTicker } from "../animations/AsunaNumberTicker"

interface PrimaryTextProps {
  number: number;
  isDecimal?: boolean
  numberSuffix?: string;
  tile: string;
  showDivider?: boolean;
}

export default function NumberInfoCard({number, isDecimal, numberSuffix, tile, showDivider = true}: PrimaryTextProps) {
  return ( 
    <div className="flex items-end">
      <div className="flex flex-col">
        <AsunaNumberTicker number={number} suffix={numberSuffix} isDecimal={isDecimal}/> 
        <p className="text-neutral-300 text-[14px] font-medium">{tile}</p>

      </div>
      {showDivider && (
        <div className="flex items-stretch pl-8 pr-8">
          <div className="w-[1px] h-[80px] bg-black/10 hmin-h-full"></div>
        </div>
      )}
    </div>
  )
} 
 

