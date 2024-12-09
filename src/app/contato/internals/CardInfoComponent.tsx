import { cn } from "@/app/shared/utils/utils"
import { Mail, MapPin, Phone } from "lucide-react"

interface CardInfoComponentProps {
  label: string
  value: string
  type: 'email' | 'phone' | 'address'
}

export default function CardInfoComponent({ label, value, type }: CardInfoComponentProps) {
  const icons = {email: Mail, phone: Phone, address: MapPin}
  const Icon = icons[type]

  return (
    <div className="group">
      <div className="flex items-center gap-3">
        <div className={cn( "rounded-full p-2 transition-colors", "text-primary-500")}>
          <Icon className="h-5 w-5" />
        </div>
        <p className="text-[15px] font-medium text-neutral-700">{value}</p>
      </div>
    </div>
  )
}