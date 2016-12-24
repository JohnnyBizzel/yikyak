import React,{Component} from "react";
//import Zone from "../presentation/Zone";
import superagent from 'superagent';
import  {APIManager} from "../../utils";
import  {CreateZone,Zone} from "../presentation";

class Zones extends Component{
  constructor(){
      super()
      this.state={
        zone:{

          },
      list:[]
          }

  }
//ank
componentDidMount(){
APIManager.get("/api/zone",null,(err,response)=>{
if(err){
  alert("ERROR ",err.message)
  return
}
else{
  this.setState({
    list:response.results
  })
}

})
}
updateZone(event){
let updatedZone = Object.assign({},this.state.zone);
updatedZone[event.target.id]=event.target.value;
this.setState({
  zone:updatedZone
})

}

addZone(zone){
    let updatedZone = Object.assign({},zone)
    console.log("pehla updated zone ",updatedZone)
    updatedZone['zipCodes'] = updatedZone.zipCode.split(",")
    console.log("updated zone ",updatedZone);
APIManager.post("/api/zone",updatedZone,(err,response)=>{
  if(err){
    alert("ERROR "+err.message)
    console.log(err)
    return
  }
  else{
    console.log("ZONE CREATED "+JSON.stringify(response.result));
let updatedList = Object.assign([],this.state.list)
updatedList.push(response.result)
    this.setState({
      list:updatedList
    })
    console.log("updated result ",this.state.list)



  }

})


}
  render(){
    const listItems = this.state.list.map((zone,i)=>{
     return (
       <li key={i}>
         <Zone currentZone={zone}/>

       </li>
     )

   })
     return (
       <div>
       <ol>
           {listItems};
       </ol>

         <CreateZone onCreate={this.addZone.bind(this)}/>

       </div>


     )


  }

}


export default Zones
