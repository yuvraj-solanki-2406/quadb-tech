import React from 'react'
import { Link } from 'react-router-dom';
// import ViewDetails from './components/ViewDetails';

export default function ShowData({show}) {
  return (
    <>
        {
            // Used to display the array result in Table
            show.map((curShow) => {
                const {id, name, language, genres} = curShow.show;
                const {average} = curShow.show.rating

                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{language}</td>
                        <td>{genres[0]} and {genres[1]}</td>
                        <td>{average}</td>
                        <td><Link to={`details/${id}`} className='btn btn-primary'>View Details</Link></td>
                    </tr>
                )
            })
        }
    </>
  )
}
