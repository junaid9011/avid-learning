import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'
export const CourseDetail = () => {
  const [show, setShow] = useState({
    img:"",
    name:"",
    description:""
  });
  const [courses, setCourses] = useState();

  useEffect(() => {
    (async () => {
      const data = await axios.get('https://openapi.programming-hero.com/api/course/curriculum');
      // console.log(data)
      setCourses(data?.data?.data);
    })();
  }, []);

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
    handleShow(id);
  }
  const handleShow=(id)=>{
    let i=courses[id];
    setShow({img:i.image,name:i.name,description:i.description})
  }
  return (
    <div>
      <section className="main">
        <div className="milestoneDetails">
          <img className="milestoneImage" src={show.img} alt="" />

          <h1 className="title">{show.name}</h1>
          <p className="details">{show.description}</p>
        </div>
        <div>
        <div className="milestones">
            {
              courses?.map((item,index)=>
                <div className="milestone border-b">
              <div  className="flex">
                <div  className="checkbox"><input type="checkbox" /></div>
                <div onClick={(e)=>handleClick(e,index)}>
                  <p>
                    {item.name}
                    <span><i className="fas fa-chevron-down"></i></span>
                  </p>
                </div>
              </div>
              
                <div className="hidden_panel">
                {item?.modules?.map(m=>
                <div className="module ">
                  <p>{m.name}</p>
                </div>)}
              </div>
            </div>)
            }
          </div>
          {/* <div className="doneList">
           
          </div> */}
        </div>

      
      </section>
    </div>
  )
}
