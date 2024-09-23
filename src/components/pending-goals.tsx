import { Plus } from 'lucide-react'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { createGoalCompletion } from '../http/create-goal-completion'
import { getPendingGoals } from '../http/get-pending-goals'
import { OutlineButton } from './ui/outline-button'

export function PendingGoals() {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
  })

  if (!data) {
    return null
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex gap-3">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            onClick={() => handleCompleteGoal(goal.id)}
            disabled={goal.completionCOount >= goal.desiredWeeklyFrequency}
          >
            {' '}
            <Plus className="flex-wrap text-zinc-600 size-4 " /> {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
