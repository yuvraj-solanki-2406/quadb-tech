import React from 'react'

export default function ShowData({show  }) {
  return (
    <>
        {
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
                        <td><button className="btn btn-primary">View Details</button></td>
                    </tr>
                )
            })
        }
    </>
  )
}
