import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_store/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_store/home"!</div>
}
