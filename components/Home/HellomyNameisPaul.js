import Link from 'next/link'
import Herotext from './Herotext'
import Heroimage from './Heroimage'


/*Styling Variablen. Die hier sind über Javascript deklariert*/





/*Hier wird der eigentliche Html Code generiert*/
export default function Header() {
  return (
    <div>
       <div className="wrapperclass">
	  <div className="grid-item" id="LeftsidedContent"> <Herotext/></div>
	   <div className="grid-item" id="RightSidedContent"><Heroimage/></div>
	</div>
	  
	
	
<style jsx>{`
.wrapperclass {
postion:relative;
display:grid;
grid-template-columns: 50% 50% auto;
grid-template-rows: 600px auto ;
margin-top: 1%;
top:0px;


}

#RightSidedContent
{
height: 780px;
}
.grid-item {
	height: 100%;
  background-color: rgba(255, 255, 255, 0.8);

  padding: 1px;
  font-size: 30px;
  text-align: center;
}

@media screen and (max-width: 900px) 
{
#RightSidedContent
{
height: 500px;
}
.wrapperclass {
postion:relative;
display:grid;
grid-template-columns: 100%;
grid-template-rows: 300px 300px ;
margin-top: 2%;
top:0px;
padding-bottom:2%;
}

}

`}</style>
  </div>
  )
}