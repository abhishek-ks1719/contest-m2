import React from 'react'

const Genre = ({onClick}) => {
    const GENRE = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];
  return (
    <div className='Genre'>
        <h3 className="title">Filter by Genre</h3>
        <div className="buttonGroup">
        {GENRE.map((item,key)=><button key={key} onClick={onClick} name={item}>{item}</button>)}
        </div>
    </div>
  )
}

export default Genre