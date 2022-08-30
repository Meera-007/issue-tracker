//import { Button } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { UserContext } from "../useContext"

const AddMember = () => {

    const url = "http://localhost:5000"
    const [currentTeam, setCurrentTeam] = useState();
    const {currentUser} = useContext(UserContext);

    const [gotdata,setgotdata] = useState(false);
    const getDataFromBackend = async () => {
      // setgotdata(true)
      const res = await fetch(url + '/team/getbyid/'+currentUser.team._id)
      const data = await res.json()
      setCurrentTeam(data)
      setgotdata(true)
      console.log(data)
    }
    useEffect(()=>{
      getDataFromBackend();
    },[])
    

    const [userToAdd, setUserToAdd] = useState("");

    const updateUser = (teamid, userid) => {
        fetch(url+'/user/update/'+userid, {
          method: 'PUT',
          body: JSON.stringify({
            team: teamid,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => res.json())
        .then(data => {
          console.log(data)
    
          fetch(url+'/team/pushupdate/'+currentUser.team._id, {
            method: 'PUT',
            body: JSON.stringify({
              members: data._id,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(res => {
            console.log(res.status);
            Swal.fire({
              title: "Success",
              text: "Member Added Successfully",
              icon: "success",
            })
          })
          
        })
      }
    

    const addMember = () => {
        fetch(url+'/user/getbyemail/'+userToAdd)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data){
    
            if(!data.team){
              updateUser(currentUser.team._id, data._id)
            }else{
              Swal.fire({
                icon: "error",
                title: "User Already in a Team",
                text: "User Already in a Team",
              });
            }
    
          }else{
            console.log('user not found');
          }
        })
      }

      const displayName=() => {
if(gotdata){
  return  currentTeam.members.map(( member ) => 
  (<h5>{member.name}</h5>)
  )
}
      }
      
    

    return (
    <div>
        
        <div id="preview" class="preview">
    <div style={{display: "none"}}></div>
    <div>
      <div data-draggable="true" class="" style={{position: "relative"}}>
      
        <section draggable="false" class="overflow-hidden pt-5" data-v-271253ee="">
          <section class="mb-10 text-center">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6">
                <div class="p-3 bg-primary rounded-circle shadow-2-strong d-inline-block mb-4">
                  <i class="fas fa-user-plus fa-lg text-white fa-fw" aria-controls="#picker-editor"></i>
                </div>
                <h2 class="fw-bold mb-4">Add Member To Team</h2>
                <p class="text-muted mb-4">
                <hr/>
                </p>
                <div class="d-md-flex flex-row text-center">
                  <div class="form-outline flex-fill me-1 mb-4 mb-md-0">
                    <input type="email" id="formControlEmail0" onChange={e => setUserToAdd(e.target.value) } className="form-control form-control-lg" />
                    <label class="form-label" for="formControlEmail0" style={{marginLeft: "0px"}}>Enter the email</label>
                    <div class="form-notch">
                      <div class="form-notch-leading" style={{width: "9px"}}></div>
                      <div class="form-notch-middle" style={{width: "100px"}}></div>
                      <div class="form-notch-trailing"></div>
                    </div>
                  </div>
                
                  <button type="submit" onClick={addMember} class="btn btn-primary btn-lg ms-md-2" aria-controls="#picker-editor">
                    Add
                  </button>
                  </div>
                  <div>
                  <hr />
                 <h3>User Already in Team : </h3>
                  {displayName()}
                </div>                
              </div>
            </div>
          </section>
        </section>

      </div>
    </div>
  </div>

    </div>
  )
}

export default AddMember;