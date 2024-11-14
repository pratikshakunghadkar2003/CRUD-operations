import {useEffect,useState} from 'react';
//import { EmployeeData } from './EmployeeData';
import React from 'react'




export default function Project1() {

  const [data,setData]= useState([]);
  const[firstName,setFirstName] = useState('')
  const[lastName,setLastName] = useState('')
  const[age,setAge] = useState(0)
  const[id,setId] = useState(0)
  const[isUpdate,setIsUpdate] = useState(false)

  /*useEffect(()=>{
    setData(EmployeeData)
  },[]);*/
  
  const handleEdit=(id) =>{
  const dt=data.filter(item =>item.id===id);
  if(dt !== undefined)
    {
      setIsUpdate(true);
    setId(dt[0].id);
    setFirstName(dt[0].firstName);
    setLastName(dt[0].lastName);
    setAge(dt[0].age);
  }
  }

  const handleDelete=(id) =>{
    if(id > 0)
      {
      if(window.confirm("Are you sure to delete this item"))
        {
      const dt=data.filter(item=>item.id !==id);
      setData(dt);
    }
  }
}
const handleSave = (e) => {

  let error = '';

  if(firstName === '')
    error +='FirstName is required,';

  if(lastName === '')
    error += 'LastName is required,';

  if(age <= 0 )
    error += 'age is required.';

  if(error === '')
  {
  e.preventDefault();
  const dt=[...data];
  const newObject={
    id :id ,
        firstName :firstName,
        lastName : lastName,
        age : age
  }

  dt.push(newObject);
  setData(dt);
}

else{
  alert(error);
}
}

const handleUpdate=() =>{
  const index = data.map((item) =>{
    return item.id
  }).indexOf(id);

  const dt=[...data];
  dt[index].firstName=firstName;
  dt[index].lastName=lastName;
  dt[index].age=age;
  setData(dt);
  handleClear();
}
const handleClear=() =>{
  setId(0);
  setFirstName('');
  setLastName('');
  setAge(0);
  setIsUpdate(false);
}
  return (
    <div className='container-fluide'>
      <div className='row'>
        <div className='col-md-2'>
          <h2>File-Tracker</h2>

          <div className='section'>
            <h4>Dashboard</h4>
            <h4>Track File</h4>
            <h4>Scan File</h4>
          </div>
          <div className='section-one'>

            <h4>Log Out</h4>
          </div>
        </div>
        <div className='col-md-10'>
          <div className='dashboard'> <h2>Dashboard &gt;&gt;</h2></div>

          <h5>Hi,Pratiksha</h5>
          <img src="https://cdn3.vectorstock.com/i/1000x1000/26/07/young-executive-woman-profile-icon-vector-9692607.jpg"></img>


          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/">Action</a></li>
                      <li><a class="dropdown-item" href="/">Another action</a></li>
                      <li><hr class="dropdown-divider"></hr></li>
                      <li><a class="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                  </li>

                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                </form>
              </div>
            </div>
          </nav>


          <div className='section-div'>


          <div style={{display:'flex',justifyContent:'center', margin:'10px'}}>
   <div>
      <lable>
        Id:
        <input type='text'placeholder='Enter ID'onChange={(e)=>setId(e.target.value)} value={id}/>
      </lable>
    </div>

    <div>
      <lable>
        First Name:
        <input type='text'placeholder='Enter First Name'onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
      </lable>
    </div>

    <div>
      <lable>
        Last Name:
        <input type='text'placeholder='Enter last Name' onChange={(e)=>setLastName(e.target.value)}value={lastName}/>
      </lable>
    </div>

    <div>
      <lable>
        Age:
        <input type='text'placeholder='Enter Age 'onChange={(e)=>setAge(e.target.value)}value={age}/>
      </lable>
    </div>

    
   <div>
   {
    !isUpdate ?
   
   <button className='btn btn-primary'onClick={(e)=> handleSave(e)}>Save</button>
   :
   <button className='btn btn-primary'onClick={()=> handleUpdate()}>Update</button>
  }
   <button className='btn btn-danger'onClick={()=> handleClear()}>Clear</button>
</div>
   </div>

          <table className='table table-hover'>
      <thead>
        <tr>
          <td>Sr.No</td>
          <td>Id</td>
          <td>firstName</td>
          <td>lastName</td>
          <td>Age</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button className='btn btn-primary'onClick={()=> handleEdit(item.id)}>Edit</button>&nbsp;
                  <button className='btn btn-danger'onClick={()=> handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

          </div>
        </div>
      </div>
    </div>

  )
}
