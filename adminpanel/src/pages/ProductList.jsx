import '../style/ProductList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
// import { rows } from '../ChartData';
import { useContext, useEffect } from 'react';
import { MovieContext } from '../context/movieContext/MovieContext';
import { deleteMovie, getMovies } from '../context/movieContext/apiCalls';

const ProductList = () => {

  
  // const [data,setData] = useState(rows);
  const {movies,dispatch} = useContext(MovieContext);

  useEffect(()=>{
   getMovies(dispatch);

  },[dispatch])

  const  handleDelete =(id) =>{
    // setData(data.filter((item)=>item.id!== id));
    deleteMovie(id,dispatch);
  }

  console.log("hi");
  console.log(movies);
 

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      editable: true,
      renderCell:(params)=>{
        console.log(params);
        return (
            <div className="productListItem">
              <img src={params.row.img} alt="" className='productListImg'/>
              {params.row.title}
            </div>
        );
      }
    },
    {
      field: 'genre', headerName: 'Genre',width: 120,editable: true,
    },
    {
      field: 'year', headerName: 'Year',width: 120,editable: true,
    },
    {
      field: 'limit', headerName: 'Limit',width: 120,editable: true,
    },
    {
      field: 'isSeries', headerName: 'isSeries',width: 120,editable: true,
    },
    
    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 120,
    //   editable: true,
    // },
    // {
    //     field: 'price',
    //     headerName: 'Price',
    //     width: 160,
    //     editable: true,
    //   },
      {
        field: 'action',
        headerName: 'Action',
        width: 160,
        editable: true,
        renderCell:(params) =>{
            return (
                <>
                    {/* <NavLink to={{ pathname:"/watch"}} state={movie}></NavLink> */}
                    <NavLink to={{pathname:"/product/"+params.row._id}} state={params.row}><button className='productListEdit'>Edit</button></NavLink>
                    <DeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row._id)}/>
                </>
                
            )
        }
      },

  ];

  return (

    <div className='productList'>
     {movies && <DataGrid
        rows={movies}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id }
      />}
    </div>
  )
}

export default ProductList