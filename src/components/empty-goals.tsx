import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import logo from '../assets/logo-inorbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'
export function EmpatyGoals() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letsStart} alt="in.orbit" />

      <p className="leading-relaxed text-center text-zinc-300 max-w-80">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo
        ?{' '}
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar Meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
