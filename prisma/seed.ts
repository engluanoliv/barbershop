const { PrismaClient } = require("@prisma/client")
const { Decimal } = require("@prisma/client/runtime/library")

const prisma = new PrismaClient()

async function seedDatabase() {
  try {
    const services = [
      {
        name: "Corte de Cabelo",
        description: "Estilo personalizado com as últimas tendências.",
        price: 60.0,
        imageUrl:
          "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
      },
      {
        name: "Barba",
        description: "Modelagem completa para destacar sua masculinidade.",
        price: 40.0,
        imageUrl:
          "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
      },
      {
        name: "Pézinho",
        description: "Acabamento perfeito para um visual renovado.",
        price: 35.0,
        imageUrl:
          "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
      },
      {
        name: "Sobrancelha",
        description: "Expressão acentuada com modelagem precisa.",
        price: 20.0,
        imageUrl:
          "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
      },
      {
        name: "Massagem",
        description: "Relaxe com uma massagem revigorante.",
        price: 50.0,
        imageUrl:
          "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
      },
      {
        name: "Hidratação",
        description: "Hidratação profunda para cabelo e barba.",
        price: 25.0,
        imageUrl:
          "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
      },
    ]

    const barbers = [
      {
        name: "João Paulo",
      },
      {
        name: "Paulo Júnior",
      },
      {
        name: "Pedro Alves",
      },
      {
        name: "Gustavo Ryan",
      },
      {
        name: "Luan Ygor",
      },
      {
        name: "David Leonardo",
      },
      {
        name: "Paulo Higor",
      },
      {
        name: "Pedro Carvalho",
      },
      {
        name: "João Paulo",
      },
      {
        name: "Túlio Rocha",
      },
      {
        name: "Victor Lucio",
      },
      {
        name: "Draco Malfoy",
      },
      {
        name: "Harry Potter",
      },
    ]

    const barbershops = [
      {
        name: "Barbearia Vintage",
        address: "Rua da Barbearia, 123",
        imageUrl:
          "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "Corte & Estilo",
        address: "Avenida dos Cortes, 456",
        imageUrl:
          "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "Barba & Navalha",
        address: "Praça da Barba, 789",
        imageUrl:
          "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "The Dapper Den",
        address: "Travessa da Navalha, 101",
        imageUrl:
          "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "Cabelo & Cia.",
        address: "Alameda dos Estilos, 202",
        imageUrl:
          "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "Machado & Tesoura",
        address: "Estrada do Machado, 303",
        imageUrl:
          "https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "Barbearia Elegance",
        address: "Avenida Elegante, 404",
        imageUrl:
          "https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "Aparência Impecável",
        address: "Praça da Aparência, 505",
        imageUrl:
          "https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "Estilo Urbano",
        address: "Rua Urbana, 606",
        imageUrl:
          "https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
      {
        name: "Estilo Clássico",
        address: "Avenida Clássica, 707",
        imageUrl:
          "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png",
        phones: ["(11) 99999-9999", "(11) 99999-9999"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
      },
    ]

    const timeSlots = [
      { time: "07:00" },
      { time: "07:30" },
      { time: "08:00" },
      { time: "08:30" },
      { time: "09:00" },
      { time: "09:30" },
      { time: "10:00" },
      { time: "10:30" },
      { time: "11:00" },
      { time: "11:30" },
      { time: "12:00" },
      { time: "12:30" },
      { time: "13:00" },
      { time: "13:30" },
      { time: "14:00" },
      { time: "14:30" },
      { time: "15:00" },
      { time: "15:30" },
      { time: "16:00" },
      { time: "16:30" },
      { time: "17:00" },
      { time: "17:30" },
      { time: "18:00" },
    ]

    // seed barbershops
    const barbershopsData = barbershops
    const createdBarbershops = await prisma.barbershop.createMany({
      data: barbershopsData,
    })

    // seed barbers
    const barbersData = barbers
    const createdBarbers = await prisma.barber.createMany({ data: barbersData })

    // seed services
    const servicesData = services.map((service) => ({
      ...service,
      price: new Decimal(service.price),
    }))
    const createdServices = await prisma.service.createMany({
      data: servicesData,
    })

    //seed timeSlots
    const timeSlotsData = timeSlots
    const createdTimeSlots = await prisma.slot.createMany({
      data: timeSlotsData,
    })

    console.log("Barbershops seeded successfully!!")

    await prisma.$disconnect()
  } catch (error) {
    console.log("Error creating barbershop, sorry.", error)
  }
}

seedDatabase()
