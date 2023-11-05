import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const NoteForm = () => {
  return (
    <section>
    <form className="space-y-8">
      <Input 
      placeholder="Note title"
      type="text" />
      <Textarea
      rows={8}
      placeholder="Your note..."
      />
      <Button type="submit">Save</Button>
    </form>
  </section>
  )
}

export default NoteForm