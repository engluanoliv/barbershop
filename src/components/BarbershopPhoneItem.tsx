"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { SmartphoneIcon } from "lucide-react"

export interface BarbershopPhoneItemProps {
  phone: string
}

export default function BarbershopPhoneItem({
  phone,
}: BarbershopPhoneItemProps) {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Copiado com sucesso!")
  }

  return (
    <>
      <div className="flex items-center gap-2" key={phone}>
        <SmartphoneIcon />
        <p className="w-full text-sm">{phone}</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleCopyPhoneClick(phone)}
        >
          Copiar
        </Button>
      </div>
    </>
  )
}
