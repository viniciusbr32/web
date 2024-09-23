import { useQuery } from '@tanstack/react-query'
import { Summary } from './components/summary'
import { EmpatyGoals } from './components/empty-goals'
import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { getSummary } from './http/get-summary.ts'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  return (
    <Dialog>
      {data?.total && data?.total > 0 ? <Summary /> : <EmpatyGoals />}
      <CreateGoal />
    </Dialog>
  )
}
