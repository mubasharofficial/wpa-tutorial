import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

const Users = () => {
  const [data, setData] = useState([])
  const [mode, setMode] = useState('online');
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url).then((response) => {
      response.json().then((result) => {

        console.warn("user")
        console.warn(result)
        setData(result)
        localStorage.setItem("users", JSON.stringify(result))
      })
    }).catch(err => {
      setMode('offline')
      let collection = localStorage.getItem('users');
      setData(JSON.parse(collection))
    })
  }, []);

  return (
    <div className='container'>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>

          {data.map((user,index) =>( 

            <tr key={index}>
              <td>{index}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
            </tr>

          ))}

        </tbody>
      </Table>
    </div>
  )
}

export default Users