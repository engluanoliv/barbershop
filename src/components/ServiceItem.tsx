"use client"

import Image from "next/image"
import { ptBR } from "date-fns/locale"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { Barbershop, Service, Slot } from "@prisma/client/index-browser"
import { fetchTimeSlots } from "@/services/fetchTimeSlots"
import { Card, CardContent } from "./ui/card"
import { useEffect, useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { format } from "date-fns"

export interface ServiceItemProps {
  service: Service
  barbershop: Pick<Barbershop, "name">
}

export default function ServiceItem({ service, barbershop }: ServiceItemProps) {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)
  const [timeSlots, setTimeSlots] = useState<Slot[]>([])
  const [selectedTime, setSelectedTime] = useState<string>("")

  const handleSelectDay = (date: Date | undefined) => {
    setSelectedDay(date)
  }

  const handleSelectTime = (time: string) => {
    setSelectedTime(time)
  }

  useEffect(() => {
    const getAllTimeSlots = async () => {
      const fetchedTimeSlots = await fetchTimeSlots()
      console.log(fetchedTimeSlots)
      setTimeSlots(fetchedTimeSlots)
    }
    getAllTimeSlots()
  }, [])

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

                {/* Calendar */}
                <div className="border-b border-solid py-5">
                  <Calendar
                    mode="single"
                    locale={ptBR}
                    selected={selectedDay}
                    onSelect={handleSelectDay}
                  />
                </div>

                {/* Time Slots */}
                {selectedDay && (
                  <div className="no-scrollbar flex gap-3 overflow-x-auto border-b border-solid p-5">
                    {timeSlots.map((timeSlot) => (
                      <Button
                        variant={
                          selectedTime === timeSlot.time ? "default" : "outline"
                        }
                        className="rounded-full"
                        key={timeSlot.id}
                        onClick={() => handleSelectTime(timeSlot.time)}
                      >
                        {timeSlot.time}
                      </Button>
                    ))}
                  </div>
                )}

                {selectedDay && selectedTime && (
                  <>
                    {/* Resume Card */}
                    <Card className="m-5">
                      <CardContent className="space-y-3 p-3">
                        <div className="flex items-center justify-between">
                          <h2 className="font-bold">{service.name}</h2>
                          <p className="text-sm font-bold">
                            {Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(Number(service.price))}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm text-gray-400">Data</h2>
                          <p className="text-sm">
                            {format(selectedDay, "d 'de' MMMM", {
                              locale: ptBR,
                            })}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm text-gray-400">Horário</h2>
                          <p className="text-sm">{selectedTime}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm text-gray-400">Barbearia</h2>
                          <p className="text-sm">{barbershop.name}</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Confirm Button */}
                    <SheetFooter className="px-5">
                      <SheetClose asChild>
                        <Button type="submit">Confirmar</Button>
                      </SheetClose>
                    </SheetFooter>
                  </>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
