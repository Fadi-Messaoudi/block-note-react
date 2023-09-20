
import React ,{useEffect, useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import NoteItem from '../components/NoteItem'



const Notes = ({notes}) => {
  const [showSearch, setShowSearch] =  useState(false)
  const [text, setTexte] = useState('');
  const [filtredNotes, setFiltredNotes] = useState(notes)


  const handleSearch = () =>{
    setFiltredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
        <header className='notes__header'>
            {!showSearch && <h2> My Notes </h2> }
            { showSearch && <input type="text" value={text} onChange={(e)=> {setTexte(e.target.value); handleSearch();}} autoFocus placeholder='keyword...' /> }
            <button className='btn' onClick={()=> setShowSearch(prevState => !prevState)}>{showSearch ? <AiOutlineCloseCircle/> : <BiSearch/>}</button>
        </header>
        <div className="notes__container">
          {filtredNotes.length == 0 && <p className='empty__notes'>Note not found</p>}
            {
                filtredNotes.map(note => <NoteItem key={note.id} note={note}/>)
            }
        </div>
            <Link to="/create-note" className='btn add__btn'><AiOutlinePlus/></Link>
    </section>
  )
}

export default Notes