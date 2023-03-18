import React from 'react'
import movies from './MoviesData';
const List = ({keyword}) => {
    
    return(
        <div className = "list" >
                <table className=' '>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.filter((item)=>{
                    if(keyword === "")
                    return item;
                    else if(item.genre === keyword)
                    return item;
                    }).map((item, index) => {
                    return(<tr key={index}>
                        <td style={{minWidth:'26rem'}}>{item.title}</td>
                        <td>{item.genre}</td>
                        <td>{item.year}</td>
                    </tr>)
                    })}
                </tbody>
                </table>
        </div >
    )
}

export default List