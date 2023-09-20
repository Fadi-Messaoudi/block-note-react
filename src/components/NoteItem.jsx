import { Link } from 'react-router-dom'
const NoteItem = ({note}) => {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
            {/* <h4>{note.title}</h4> */}
            <h4>{note.title.length > 60 ? (note.title.substr(0, 40)) +'...' : note.title}</h4>
            {/* <p><small>{new Date(note.createdAt).toLocaleDateString()}</small></p> */}
            <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem