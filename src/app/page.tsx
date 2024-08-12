import Image from "next/image"
import Header from "@/components/header"
import BarbershopItem from "@/components/barbershopItem"
import { db } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default async function Home() {
  const barbershops = await db.barbershop.findMany()
  const popularBarbershop = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  return (
    <>
      <div>
        <Header />
        <div className="p-5">
          {/* Text */}
          <h2 className="text-xl font-bold">Olá, Luan!</h2>
          <p>Segunda-feira, 12 de agosto.</p>

          {/* Search Button */}
          <div className="mt-6 flex items-center gap-2">
            <Input placeholder="Buscar" />
            <Button>
              <SearchIcon />
            </Button>
          </div>

          {/* Filter Buttons*/}
          <div className="no-scrollbar mt-6 flex gap-3 overflow-auto">
            <Button className="gap-2" variant="secondary">
              <Image
                src="/scissors.svg"
                alt="Scissors"
                height={16}
                width={16}
              />
              Cabelo
            </Button>
            <Button className="gap-2" variant="secondary">
              <Image
                src="/mustache.svg"
                alt="Mustache"
                height={16}
                width={16}
              />
              Barba
            </Button>
            <Button className="gap-2" variant="secondary">
              <Image src="/razor.svg" alt="Razor" height={16} width={16} />
              Acabamento
            </Button>
            <Button className="gap-2" variant="secondary">
              <Image src="/eyebrow.svg" alt="Eyebrow" height={16} width={16} />
              Sobrancelha
            </Button>
            <Button className="gap-2" variant="secondary">
              <Image src="/towel.svg" alt="Towel" height={16} width={16} />
              Massagem
            </Button>
            <Button className="gap-2" variant="secondary">
              <Image src="/shampoo.svg" alt="Shampoo" height={16} width={16} />
              Hidratação
            </Button>
          </div>

          {/* Banner Images */}
          <div className="relative mt-6 h-[150px] w-full">
            <Image
              src="banner-01.svg"
              alt="Services"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          {/* Booking */}
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>
          <Card>
            <CardContent className="flex justify-between p-0">
              <div className="flex flex-col gap-2 py-6 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3>Corte de cabelo</h3>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                  </Avatar>
                  <p className="text-sm">Barbershop Name</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border-l-2 border-solid px-6">
                <p className="text-sm">Agosto</p>
                <p className="text-2xl">12</p>
                <p className="text-sm">20:00</p>
              </div>
            </CardContent>
          </Card>

          {/* Recomended */}
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Recomendados
          </h2>
          <div className="no-scrollbar flex gap-4 overflow-auto">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>

          {/* Popular */}
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
            Populares
          </h2>
          <div className="no-scrollbar flex gap-4 overflow-auto">
            {popularBarbershop.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
        <footer>
          <Card>
            <CardContent className="px-5 py-6">
              <p className="text-sm text-gray-400">
                © 2023 Copyright <span className="font-bold">FSW Barber</span>
              </p>
            </CardContent>
          </Card>
        </footer>
      </div>
    </>
  )
}
