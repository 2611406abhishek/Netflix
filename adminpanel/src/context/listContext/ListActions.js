export const getListStart = () =>({
     type:"GET_LISTS_START",
});

export const getListSuccess = (lists) =>({
    type:"GET_LISTS_SUCCESS",
    payload:lists,
});

export const getListFailure = () =>({
    type:"GET_LISTS_FAILURE",
});


// create movie
export const createListStart = () =>({
    type:"CREATE_LIST_START",
});

export const createListSuccess = (list) =>({
   type:"CREATE_LIST_SUCCESS",
   payload:list,
});

export const createListFailure = () =>({
   type:"CREATE_LIST_FAILURE",
});


// deletion
export const deleteListStart = () =>({
    type:"DELETE_LIST_START",
});

export const deleteListSuccess = (id) =>({
   type:"DELETE_LIST_SUCCESS",
   payload:id,
});

export const deleteListFailure = () =>({
   type:"DELETE_LIST_FAILURE",
});

// upload movie
export const updateListStart = () =>({
    type:"UPDATE_LIST_START",
});

export const updateListSuccess = (movie) =>({
   type:"UPDATE_LIST_SUCCESS",
   payload:movie,
});

export const updateListFailure = () =>({
   type:"UPDATE_LIST_FAILURE",
});


  
