import '../style/ListList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
// import { rows } from '../ChartData';
import { useContext, useEffect } from 'react';
import { ListContext } from '../context/listContext/ListContext';
import { deleteList, getLists } from '../context/listContext/apiCalls';

const ListList = () => {

  
  // const [data,setData] = useState(rows);
  const {lists,dispatch} = useContext(ListContext);

  useEffect(()=>{
   getLists(dispatch);
 
  },[dispatch])

  const  handleDelete =(id) =>{
    // // setData(data.filter((item)=>item.id!== id));
   deleteList(id,dispatch);
  }

  // console.log("hi");
  // console.log(lists);
 

  const columns = [
    { field: "_id", headerName: 'ID', width:200 },
    {
      field: 'genre', headerName: 'Genre',width: 240,editable: true,
    },
    {
      field: 'title', headerName: 'Title',width: 150,editable: true,
    },
    {
      field: 'type', headerName: 'Type',width: 150,editable: true,
    },
    
      {
        field: 'action',
        headerName: 'Action',
        width: 160,
        editable: true,
        renderCell:(params) =>{
            return (
                <>
                    {/* <NavLink to={{ pathname:"/watch"}} state={movie}></NavLink> */}
                    <NavLink to={{pathname:"/list/"+params.row._id}} state={params.row}><button className='productListEdit'>Edit</button></NavLink>
                    <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row._id)}/>
                </>
                
            )
        }
      },

  ];

  return (

    <div className='productList'>
     <DataGrid
        rows={lists}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id }
      />
    </div>
  )
}

export default ListList