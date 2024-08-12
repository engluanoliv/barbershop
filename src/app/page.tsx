import Header from "@/components/header"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
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
          <Card className="mt-6">
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
        </div>
      </div>
    </>
  )
}
