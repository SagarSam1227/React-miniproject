import React, { useEffect, useState } from "react" 
import useFetchImp from "../../utils/useFetchImp" 



const ListUser =()=>{
    const [userList,setUserList] = useState([]);

     useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:3000/users-list');
              const result = await response.json();
              console.log(result);
              setUserList(result.userData)
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
     },[])

     function updateData(id){
        const updatedData = userList.filter((e)=>e._id!==id)
        setUserList(updatedData);
     }

     async function deleteOneUser(id){
        try {
            const response = await fetch('http://localhost:3000/delete-user/'+id, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            });
      
            const result = await response.json();
            console.log(result);
          } catch (error) {
            console.error('Error:', error);
          }
     }

    return (
        <div className="table">
          <table id="customers">
            <thead>
              <tr>
                <th>Name</th>
                <th>EmailId</th>
                <th>Contact</th>
                <th className="edit-delete"></th>
                <th className="edit-delete"></th>
              </tr>
            </thead>
            <tbody>
              {userList.map((elem) => {
                console.log(elem);
                return (
                  <tr key={elem._id}>
                    <td>{elem.name}</td>
                    <td>{elem.username}</td>
                    <td>{elem.contact}</td>
                    <td><img style={{width:'26px'}} src="https://cdn-icons-png.flaticon.com/128/9356/9356210.png"></img></td>
                    <td><img onClick={()=>{
                        deleteOneUser(elem._id)
                        updateData(elem._id)
                    }} style={{width:'26px'}} src="https://cdn-icons-png.flaticon.com/128/2907/2907762.png"></img></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      
}

export default ListUser;