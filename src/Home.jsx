import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import data from './data.json' ;
import ModalAdd from './Modal/ModalAdd/ModalAdd';
import { ModalDelete } from "./Modal/ModalDelete/ModalDelete";
import  ModalUpdate  from "./Modal/ModalUpdate/ModalUpdate";

function Home() {
    const [search, setSearch] = useState('');

    const [modalAdd, setModalAdd] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);
    const [modalDelete, setModalDelete] = useState(false);
    console.log(modalDelete)
  return (
 
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search" onChange={(e) => setSearch(e.target.value)}/>
                
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Danh sách sinh viên</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={() => setModalAdd(true)}>
                Thêm Sinh Viên
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Địa chỉ</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>

                    <tbody>

                    {data && data.filter((player)=>{
                        return search.toLowerCase() ===''
                        ? player
                        : player.name.toLowerCase().includes(search);
                        }).map((player,index) => (
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{player.studentCode}</td>
                        <td>{player.name}</td>
                        <td>{player.dateOfBirth}</td>
                        <td>{player.home}</td>
                        <td>
                            <button id='deletebutton' onClick={() => setModalDelete(true)} >Xóa</button>
                            <button id='editbutton'onClick={() => setModalUpdate(true)} >Sửa</button>
                        </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">

        {modalAdd && <ModalAdd closeModal={setModalAdd}/>}
        {modalDelete && <ModalDelete closeModal={setModalDelete}/>}
        {modalUpdate && <ModalUpdate closeModal={setModalUpdate}/>}
       </div>  
      </div>    
      </div>  
  );
}
 
export default Home;