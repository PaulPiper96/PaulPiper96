import Anime from 'react-anime'
import Link from 'next/link'


export default function SideSlider() 
{
	
	function ScrollmeTotheMoon(e)
	{	if (e.target.id== "zero"){window.scroll(0,0);}
		else if (e.target.id== "one"){window.scroll(0,900);}
	 	else if (e.target.id== "two"){window.scroll(0,1700);}
	 	else if (e.target.id== "three"){window.scroll(0,2200);}
	 	else if (e.target.id== "four"){window.scroll(0,2900);}
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

@media screen and (max-width: 2100px) 
{

}

@media screen and (max-width: 2000px) 
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

@media screen and (max-width: 1024px) 
{


.wrapperSlider
{
float: left;
position: relative;
z-index: 5;
margin-top:10%;
height: 350px;
width:1000%;
display:grid;
grid-template-columns:5% 45% 45% 5%;
grid-template-rows:5% 25% 25%  25% 10%;
}

#zero
{
grid-row-start: 2;
grid-row-end: 2;
grid-column-start: 2;
grid-column-end:2;
}

#one
{
grid-row-start: 3;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end:2;
}
#two
{
grid-row-start: 4;
grid-row-end: 4;
grid-column-start: 2;
grid-column-end:2;
}



#three
{
grid-row-start: 2;
grid-row-end: 2;
grid-column-start: 3;
grid-column-end:3;
}
#four
{
grid-row-start: 3;
grid-row-end: 3;
grid-column-start: 3;
grid-column-end:3;
}

#zero
{
color:#141414;
font-weight: bold;
}

.NavigationItem 
{
margin-top: 40px;
font-family: Sk-Modernist;
margin-left: 4%;
font-weight: none;
font-size: 25px;
color: #747474;
transition: 1.3s;
}

.NavigationItem:hover {
transition: 1.3s;
font-family: Sk-Modernist;
margin-left: 4%;
font-weight: bold;
font-size: 27px;
color: #343434;
cursor: pointer;
}

.Blackine
{
display: block;
background-color:none;
width: 100%;
height: 50%;
margin-top: 1%;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: 5;
}
}

@media screen and (max-width: 450px) 
{

.wrapperSlider
{
float: left;
position: relative;
z-index: -5;
margin-top:10%;
height: 150px;
width:1000%;
display:grid;
grid-template-columns:5% 45% 45% 5%;
grid-template-rows:5% 30% 30%  30% 5%;
}
.NavigationItem 
{
margin-top: 10px;
font-family: Sk-Modernist;
margin-left: 4%;
font-weight: none;
font-size: 20px;
color: #747474;
transition: 1s;
}
}
`}</style>
		 </div>
		 )
}