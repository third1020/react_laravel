import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {

    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {

    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }



  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">

        {items.map((item, idx) => {

          if(item.title == "ManageUser"){
         return    <div><h4 style={{
        borderTopStyle: 'solid',
        borderTopWidth: "thin",
        textTransform: "uppercase",
        fontWeight: "600",
        fontSize: "12px",
        letterSpacing: "1px",
        color: "rgb(138, 147, 165)",

        padding: "10px 20px 0px",
        margin: "10px 0px 0px"}}>User</h4>
        <SidebarNavItem key={idx} item={item} />
        </div>

      }else if(item.title == "ManagePersonContact"){

      return <div><h4 style={{
       borderTopStyle: 'solid',
       borderTopWidth: "thin",
       textTransform: "uppercase",
       fontWeight: "600",
       fontSize: "12px",
       letterSpacing: "1px",
       color: "rgb(138, 147, 165)",

       padding: "10px 20px 0px",
       margin: "10px 0px 0px"}}>Person</h4>
       <SidebarNavItem key={idx} item={item} />
       </div>


     }else if(item.title == "ManagePersonContact"){

     return <div><h4 style={{
      borderTopStyle: 'solid',
      borderTopWidth: "thin",
      textTransform: "uppercase",
      fontWeight: "600",
      fontSize: "12px",
      letterSpacing: "1px",
      color: "rgb(138, 147, 165)",

      padding: "10px 20px 0px",
      margin: "10px 0px 0px"}}>Person</h4>
      <SidebarNavItem key={idx} item={item} />
      </div>


    }else if(item.title == "ManageAddress"){

      return <div><h4 style={{
       borderTopStyle: 'solid',
       borderTopWidth: "thin",
       textTransform: "uppercase",
       fontWeight: "600",
       fontSize: "12px",
       letterSpacing: "1px",
       color: "rgb(138, 147, 165)",
       padding: "10px 20px 0px",
       margin: "10px 0px 0px"}}>Address</h4>
       <SidebarNavItem key={idx} item={item} />
       </div>


     }else if(item.title == "ManageEquipment"){

       return <div><h4 style={{
        borderTopStyle: 'solid',
        borderTopWidth: "thin",
        textTransform: "uppercase",
        fontWeight: "600",
        fontSize: "12px",
        letterSpacing: "1px",
        color: "rgb(138, 147, 165)",

        padding: "10px 20px 0px",
        margin: "10px 0px 0px"}}>Equipment</h4>
        <SidebarNavItem key={idx} item={item} />
        </div>


      }else if(item.title == "ManageRequestGeneral"){

        return <div><h4 style={{
         borderTopStyle: 'solid',
         borderTopWidth: "thin",
         textTransform: "uppercase",
         fontWeight: "600",
         fontSize: "12px",
         letterSpacing: "1px",
         color: "rgb(138, 147, 165)",

         padding: "10px 20px 0px",
         margin: "10px 0px 0px"}}>Request</h4>
         <SidebarNavItem key={idx} item={item} />
         </div>


       }else if(item.title == "ManageNews"){

         return <div><h4 style={{
          borderTopStyle: 'solid',
          borderTopWidth: "thin",
          textTransform: "uppercase",
          fontWeight: "600",
          fontSize: "12px",
          letterSpacing: "1px",
          color: "rgb(138, 147, 165)",

          padding: "10px 20px 0px",
          margin: "10px 0px 0px"}}>News</h4>
          <SidebarNavItem key={idx} item={item} />
          </div>


        }else if(item.title == "ManageImage"){

          return <div><h4 style={{
           borderTopStyle: 'solid',
           borderTopWidth: "thin",
           textTransform: "uppercase",
           fontWeight: "600",
           fontSize: "12px",
           letterSpacing: "1px",
           color: "rgb(138, 147, 165)",

           padding: "10px 20px 0px",
           margin: "10px 0px 0px"}}>Image</h4>
           <SidebarNavItem key={idx} item={item} />
           </div>


         }else if(item.title == "ManageMessage"){

           return <div><h4 style={{
            borderTopStyle: 'solid',
            borderTopWidth: "thin",
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: "12px",
            letterSpacing: "1px",
            color: "rgb(138, 147, 165)",

            padding: "10px 20px 0px",
            margin: "10px 0px 0px"}}>Message</h4>
            <SidebarNavItem key={idx} item={item} />
            </div>


          }else if(item.title == "ManageModify"){

            return <div><h4 style={{
             borderTopStyle: 'solid',
             borderTopWidth: "thin",
             textTransform: "uppercase",
             fontWeight: "600",
             fontSize: "12px",
             letterSpacing: "1px",
             color: "rgb(138, 147, 165)",

             padding: "10px 20px 0px",
             margin: "10px 0px 0px"}}>Modify</h4>
             <SidebarNavItem key={idx} item={item} />
             </div>


           }else if(item.title == "ManagePriority"){

             return <div><h4 style={{
              borderTopStyle: 'solid',
              borderTopWidth: "thin",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(138, 147, 165)",

              padding: "10px 20px 0px",
              margin: "10px 0px 0px"}}>Priority</h4>
              <SidebarNavItem key={idx} item={item} />
              </div>


            }else if(item.title == "ManageImpact"){

              return <div><h4 style={{
               borderTopStyle: 'solid',
               borderTopWidth: "thin",
               textTransform: "uppercase",
               fontWeight: "600",
               fontSize: "12px",
               letterSpacing: "1px",
               color: "rgb(138, 147, 165)",

               padding: "10px 20px 0px",
               margin: "10px 0px 0px"}}>Impact</h4>
               <SidebarNavItem key={idx} item={item} />
               </div>


             }else if(item.title == "Report"){

             return <div><h4 style={{
              borderTopStyle: 'solid',
              borderTopWidth: "thin",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "12px",
              letterSpacing: "1px",
              color: "rgb(138, 147, 165)",

              padding: "10px 20px 0px",
              margin: "10px 0px 0px"}}>Report</h4>
              <SidebarNavItem key={idx} item={item} />
              </div>


            }else{
       return  <SidebarNavItem key={idx} item={item} />
     }

        })}



        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
