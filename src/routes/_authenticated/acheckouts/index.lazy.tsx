import AcheckOuts from '@/features/acheckouts'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/acheckouts/')({
  component: AcheckOuts,
})
