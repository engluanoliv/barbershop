interface QuickSearchService {
  imageUrl: string
  title: string
}

export const quickSearchServices: QuickSearchService[] = [
  {
    imageUrl: "/scissors.svg",
    title: "Cabelo",
  },
  {
    imageUrl: "/mustache.svg",
    title: "Barba",
  },
  {
    imageUrl: "/razor.svg",
    title: "Acabamento",
  },
  {
    imageUrl: "/eyebrow.svg",
    title: "Sobrancelha",
  },
  {
    imageUrl: "/towel.svg",
    title: "Massagem",
  },
  {
    imageUrl: "/shampoo.svg",
    title: "Hidratação",
  },
]
