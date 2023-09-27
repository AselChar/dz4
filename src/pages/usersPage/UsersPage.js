import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/menu/User'
import {fetchUserOneInfo, fetchUsersAction} from '../../redux/actions'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
function UsersPage() {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)


    // const getUsers = () => {
    //     dispatch(fetchUsersAction())
    // }

    useEffect(()=>{
        dispatch(fetchUsersAction())
    },[dispatch])

  return (
    <div>
        <button onClick={()=>dispatch(fetchUsersAction()) }>get users</button>
        <Table className="table table-bordered table-striped" >
            <thead className='thead-light'>
                <tr>
                     <th>id</th>
                     <th>name</th>
                     <th>email</th>
                     <th>actions</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user)=>
                (<tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button value={user.id} onClick ={()=>dispatch(fetchUserOneInfo(user.id))}>
                            Получить больше
                        </button>
                    </td>
                </tr>))}
            </tbody>
        </Table>
        {/*{users.map(user => <User userInfo={user} />)}*/}
    </div>
  )
}

export default UsersPage