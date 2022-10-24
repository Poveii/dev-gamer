export default function Section(props) {
  return (
    <section id={props.id}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>

        {props.children}
      </div>
    </section>
  )
}
