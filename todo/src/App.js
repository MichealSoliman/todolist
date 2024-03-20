import React,{Component} from "react";
import CourseList from "./Components/CourseList/CourseList.js";
 import CourseForm from "./Components/CourseForm/CourseForm.js"
class App extends Component {
 state = {
  courses:[
   
  ],
  current:''
 }

 updateCourse =(e)=>{
  
  this.setState({
      current:e.target.value,
     
     
  })
 }
 addCourse =(e)=>{
  e.preventDefault()
  let current = this.state.current;
  let courses = this.state.courses;
  courses.push({name:current})
  this.setState({
    courses:courses,
    current:''
    
  })
 }

 deleteCourse = (index)=>{
  let courses = this.state.courses;
  courses.splice(index,1)
  this.setState({
    courses
  })
 }

 editCours =(index,value)=>{
  let courses = this.state.courses;
  let course = courses[index];
  course['name'] = value;
  this.setState({
    courses
  })
 


 } 
  render(){
    const{courses} = this.state;
    const courseList = courses.map((course,index)=>{
      return <CourseList details ={course} key={index}  index={index} deleteCourse = {this.deleteCourse} editCours={this.editCours} />

    })
    return (
      <div className="App">
      <h2>Add Course</h2>
      <CourseForm current={this.state.current} updateCourse = {this.updateCourse} addCourse={this.addCourse}/>
       <ul>{courseList}</ul>
      
      </div>
    )
  }
 
  
}

export default App;
