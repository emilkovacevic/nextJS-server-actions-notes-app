import prisma from '@/lib/prisma'
import { Session } from 'next-auth'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

interface TodosContainerProps {
    session: Session | null
}

const TodosContainer = ({session}: TodosContainerProps) => {

  const todos = prisma.todos.findMany({
    where:{
     id: session?.user.id
    }
  })

  if(!todos) return <div>No data</div>
  return (
    <section>
        <div>todos</div>
        <div>{JSON.stringify(session)}</div>
        <div>{JSON.stringify(todos)}</div>
        <form  className="space-y-8">
          <Input type="text" />
          <Input type="text" />
          <Button type="submit">Submit</Button>
        </form>
    </section>
  )
}

export default TodosContainer