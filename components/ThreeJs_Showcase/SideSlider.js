import Anime from 'react-anime'
import Link from 'next/link'
import { useEffect } from 'react'


export default function SideSlider() 
{
	
	
	useEffect(() => {
	

  });	
	
function ScrollmeTotheMoon(e)
	{	if (e.target.id== "zero"){window.scroll(0,0);}
		else if (e.target.id== "one"){window.scroll(0,800);}
	 	else if (e.target.id== "two"){window.scroll(0,1600);}
	 	else if (e.target.id== "three"){window.scroll(0,2000);}
	 	else if (e.target.id== "four"){window.scroll(0,2600);}
	 else {console.log("SideSliderError: Out of Bounds")}
	}
	
	
	 return ( 
		 
		 <div>
		 <div className="wrapperSlider">
		<div className="Blackine"/>
		 <div onClick={ScrollmeTotheMoon} id="zero" className="NavigationItem">Start</div>
		  <div onClick={ScrollmeTotheMoon} id="one" className="NavigationItem">Explanation</div>
		  <div onClick={ScrollmeTotheMoon} id="two" className="NavigationItem">Animation</div>
		   <div  onClick={ScrollmeTotheMoon} id="three" className="NavigationItem">Photography</div>
		 <div   onClick={ScrollmeTotheMoon} id="four" className="NavigationItem">My Shoe</div>
		 </div>
		  <style jsx>{`
.sticky
{
background-color:green;
}

@media screen and (max-width: 2100px) 
{

}

@media screen and (max-width: 2000px) 
{


.wrapperSlider
{
float: right;
margin-right: -10px;
z-index: 0;
margin-left: 0%;
margin-top:-670px;
height: 300px;
width:19%;
display:grid;
grid-template-columns:15% 85%;
grid-template-rows:20% 20% 20% 20% 20%;
}

.NavigationItem 
{
font-family: Sk-Modernist;
margin-left: 4%;
font-weight: none;
font-size: 20px;
color: #747474;
transition: 1s;
}

.NavigationItem:hover {
transition: 1.3s;
font-family: Sk-Modernist;
margin-left: 4%;
font-weight: bold;
font-size: 24px;
color: #343434;
cursor: pointer;
}

#zero
{
color:#141414;
font-weight: bold; 
}

.Blackine
{
background-color: none;
width: 20%;
height: 100%;
margin-left: 20%;
grid-column-start: 1;
grid-column-end:1;
grid-row-start:1;
grid-row-end:6;
color: #747474;
}


}

@media screen and (max-width: 1024px) 
{
.wrapperSlider
{
display: none;
}

.Blackine
{
display: none;
}
}

@media screen and (max-width: 450px) 
{

}
`}</style>
		 </div>
		 )
}