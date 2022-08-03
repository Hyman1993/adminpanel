import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useEffect } from "react"
import axios from "axios"

const List = () => {

  const url = 'http://localhost:8080/test';
  useEffect(() => {
    fetch(url, {
      method: 'get',
      headers: {
         'Content-Type': 'application/json'
      },
      // body: JSON.stringify({ //在服务器端通过req.body.eid方式获取
      //      eid: id
      //  })
     }).then(res =>{
          return res.json(); //Promise 
          //  console.log(res.json());
     })
     .then(data =>{ // json data
          console.log(data)
  })
  .catch(e =>{
      console.log(e)
  });
  
    axios.get("http://localhost:8080/test").then((res)=>{
      console.log(res.data)//这里的r是响应结果
    })
  },[])
  


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List