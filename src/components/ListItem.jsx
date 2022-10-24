export default function ListItem(props) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <img src={props.imageUrl} alt={props.imageAlt} title={props.imageTitle} />
    </a>
  )
}
