import '../style/UserList.css';
import { DataGrid } from '@material-ui/data-grid';
import myimg from '../Images/Eagle.jpg';
import { DeleteOutline } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
    const rows = [
        { id: 1, 
        username:"Abhishek Soni", 
        avatar:myimg, 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
       { id: 2, 
        username:"Abhishek Soni", 
        avatar:myimg , 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
       { id: 3, 
        username:"Abhishek Soni", 
        avatar:myimg , 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
       { id: 4, 
        username:"Abhishek Soni", 
        avatar:myimg , 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
       { id: 5, 
        username:"Abhishek Soni", 
        avatar:myimg , 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
       { id: 6, 
        username:"Abhishek Soni", 
        avatar:myimg , 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
       { id: 7, 
        username:"Abhishek Soni", 
        avatar:myimg , 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
       { id: 8, 
        username:"Abhishek Soni", 
        avatar:myimg , 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
       { id: 9, 
        username:"Abhishek Soni", 
        avatar:myimg , 
        email:"soni@gmail.com",
        status:"active",
        transaction:"$120",
       },
      ];
   const [data,setData] = useState(rows);
  const  handleDelete =(id) =>{
    setData(data.filter((item)=>item.id!== id));
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'Username',
          width: 200,
          editable: true,
          renderCell:(params)=>{
            console.log(params);
            return (
                <div className="userListUser">
                  <img src={params.row.avatar} alt="" className='userListImg'/>
                  {params.row.username}
                </div>
            );
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
          editable: true,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
            editable: true,
          },
          {
            field: 'action',
            headerName: 'Action',
            width: 160,
            editable: true,
            renderCell:(params) =>{
                return (
                    <>
                        <NavLink to={"/users/"+params.row.id}><button className='userListEdit'>Edit</button></NavLink>
                        <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
                    </>
                    
                )
            }
          },

      ];
      
      

  return (
    <div className='userList'>
     <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList