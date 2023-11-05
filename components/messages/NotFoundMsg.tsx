type NotFoundProps = {
    error: string
}
const NotFoundMsg = ({error}:NotFoundProps) => {
  return (
    <section>
        <h2>{error} not found!</h2>
    </section>
  )
}

export default NotFoundMsg