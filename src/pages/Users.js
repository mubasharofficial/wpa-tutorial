import React, { useState, useEffect } from 'react'
import { Table, Alert } from 'react-bootstrap';

const Users = () => {
  const [data, setData] = useState([])
  const [mode, setMode] = useState('online');
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users"
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.warn(result)
        setData(result)
        window.localStorage.setItem("users", JSON.stringify(result))
      })
    }).catch(err => {
        let collections = JSON.parse(window.localStorage.getItem("users"));
        console.log(err)
        setData(collections);
        setMode('offline')
    })
  }, []);

  console.log(mode)
  return (
    <div className='container'>
      <div className=''>
            {
              mode==='offline'?
              <Alert variant="warning">
              Data comping from Local storage
            </Alert>
              :null
            }
      </div>
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