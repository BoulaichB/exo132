import DataFetching from "./components/DataFetching";
import Home from "./components/Home";
import DataList from "./components/DataList";
import { useState } from "react";
import { Routes,
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom";

function App() {
  let [data, setData] = useState();
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Home/>}>
          <Route path='/donnee' element={<DataFetching setData={setData}/>}/>
          <Route path='/donnee/:id' element={<DataList datas={data}/>}/>
        </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;