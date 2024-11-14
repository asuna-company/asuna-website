interface PrimaryTextProps {
  numberInfo: string
  tile: string
  showDivider?: boolean,
}

export default function NumberInfoCard({numberInfo, tile, showDivider = true}: PrimaryTextProps) {
  return (
    <div className="flex items-end">
      <div className="flex flex-col">
        <h3 className="text-primary-500 font-semibold text-[40px] -mb-1.5">{numberInfo}</h3>
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
 

