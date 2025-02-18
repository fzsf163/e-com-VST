import { Home } from '@/components/store/features/home/Home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/')({
  component: Home,
})
