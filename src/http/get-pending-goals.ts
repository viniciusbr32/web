type pendingGoals = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCOount: number
}[]

export async function getPendingGoals(): Promise<pendingGoals> {
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()
  return data.pendingGoals
}
