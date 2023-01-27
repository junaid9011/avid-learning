import axios from 'axios';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { useGetCouseQuery } from 'Redux/Features/Course/courseApi';
import BasicModal from './Modal';
import './style.css'
export const CourseContent = () => {
    const {id}=useParams();
    // console.log(id)
    const {data}=useGetCouseQuery();
    // console.log(data)
    const [show,setShow]=useState(false);
    let course=data.find(i=>i.free_course_id==id)
    const handleChange=(e)=>{
        // console.log(e.target.value)
        // setFormData({...formData,[e.target.name]:e.target.value})
      }
    const handleAddMoudule=(e)=>{
      
      }
      // console.log(formData)
      const handleSubmit=async()=>{
        // let data={body:formData,token:token}
          // await addCourse(data)
          axios({
            method: 'post',
            url: 'http://20.235.242.77:3306/api/course/free/',
            headers: {
            //   authorization: `Bearer ${token}`,
          },
            // data: formData
        })
          // console.log(data)
    //     
      }
      const handleClick=(e,id)=>{
        const currentNode=e.target.parentNode.parentNode.nextElementSibling;
        const shownNode=document.querySelector(".show");
        const active=document.querySelector(".active");
        let activeNode=e.target.parentNode;
        if(active && !activeNode.classList.contains("active"))active.classList.remove("active");
        activeNode.classList.toggle("active")
        if(!currentNode.classList.contains("show")&&shownNode){
          shownNode.classList.remove("show")
        }
        currentNode.classList.toggle("show")
        
        //pass id to show 
        // handleShow(id);
      }
      // const handleShow=(id)=>{
      //   let i=data[id];
      //   setShow({img:i.image,name:i.name,description:i.description})
      // }
    // console.log(course)
  return (
    <div>
        {/* <h3>Course Content</h3> */}
        <>
       <MDBox style={{backgroundColor:"white"}} mx={35} pt={4} pb={3} px={3} width={600} >
            <MDTypography variant="h4" fontWeight="medium" mx={22}  mb={4}>
            Course Content
                </MDTypography>
                {/* <MDTypography variant="h6" fontWeight="medium"  mb={4}>
                {course.name}
                    </MDTypography> */}
                    
                  <div className="milestones">
            {
              data?.map((item,index)=>
                <div className="milestone ">
              <div  className="flex">
                {/* <div  className="checkbox"><input type="checkbox" /></div> */}
                <div onClick={(e)=>handleClick(e,index)}>
                  
                  <p>
                  
                    {item.name}
                    <span><i className="fas fa-chevron-down"></i></span>
                  </p>
                </div>
              </div>
              
                <div className="hidden_panel">
                {data.map(m=>
                <div className="module ">
                  <p>{m.name}</p>
                </div>)}
                {/* <MDButton onClick={()=>handleAddMoudule()} variant="gradient" color="info" >
                     Add Module
                    </MDButton> */}
                    <BasicModal />
                  {/* </MDBox>  */}
              </div>
            </div>)
            }
            
          </div>
                {show&&<MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="name" type="text" label="Course Name" fullWidth />
                  </MDBox>
                 
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="total_modules" type="text" label="Total Module" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="author" type="text" label="Author" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="duration" type="text" label="Duration" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="description" type="text" label="Description" fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput onChange={(e)=>handleChange(e)} name="url_slug" type="text" label="url" fullWidth />
                  </MDBox>
                  
                  <MDBox mt={4} mb={1}>
                    <MDButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
                     Add Course
                    </MDButton>
                  </MDBox> 
                  </MDBox>}
                  </MDBox>
    </>
    </div>
  )
}
