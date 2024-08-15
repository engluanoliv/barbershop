"use client"

import Image from "next/image"
import { ptBR } from "date-fns/locale"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { useState } from "react"
import { Service } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

export interface ServiceItemProps {
  service: Service
}

export default function ServiceItem({ service }: ServiceItemProps) {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)

  const TIME_LIST = [
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ]

  const handleSelectDay = (date: Date | undefined) => {
    setSelectedDay(date)
  }

  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        {/* Service Image */}
        <div className="relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Service Details */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="secondary" size="sm">
                  Reservar
                </Button>
              </SheetTrigger>
              <SheetContent className="px-0">
                <SheetHeader>
                  <SheetTitle>Realizar Reserva</SheetTitle>
                </SheetHeader>
                <div className="border-b border-solid py-5">
                  <Calendar
                    mode="single"
                    locale={ptBR}
                    selected={selectedDay}
                    onSelect={handleSelectDay}
                  />
                </div>
                {selectedDay && (
                  <div className="no-scrollbar flex gap-3 overflow-x-auto p-5">
                    {TIME_LIST.map((time) => (
                      <Button
                        variant="outline"
                        className="rounded-full"
                        key={time}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
