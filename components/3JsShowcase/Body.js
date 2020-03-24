import Link from 'next/link'
import Anime from 'react-anime'
import SideSlider from './SideSlider'
import BottomSlider from './BottomSlider'
import Explanation from './Explanation'
import DreiD from './DreiD'
import Photography from './Photography'
import ShowmorePictures from './ShowmorePictures'
import { useEffect } from 'react'
import MyShoe from './MyShoe'


export default function Herotext() 
{

	
	 return ( 
	<div>
	<div className="wrapperMainContent">
		 <div className="Eigenprojekt">
		<strong> Eigen-<br/>
		 projekt<br/> 18/19 </strong>
		 </div>
		<div className="ImageContainer"></div>
		 <div className="Circleimages"></div>
		<BottomSlider/>
	</div>
		 
 	<SideSlider/>
		 <Explanation/>
		 <DreiD/>
		 <Photography/>
		 <ShowmorePictures/>
		 <MyShoe/>
	 <style jsx>{`

@media screen and (max-width: 2100px) 
{

}

@media screen and (max-width: 2000px) 
{
.wrapperMainContent
{
height: 750px;
width: 70%;
margin-left: 8%;
display:grid;
grid-template-columns:10% 90% 10%;
grid-template-rows: 5% 70% 20%;

}
.ImageContainer
{
position: relative;
z-index: 0;
grid-row-start: 2;
grid-row-end: 4;
grid-column-start: 1;
grid-column-end: 4;
background-image: url("/3jsShowcase/ShowShoeHand.jpg");
 background-size: 90%;
display: inline-block;
background-repeat: no-repeat;
margin: 1px;
width: 100%
height: 100%;
background-position:40% 60%;
}
.Circleimages
{
position: relative;
z-index: 1;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 3;
grid-column-end:4;
background-image: url("/Circles.png");
 background-size: 100%;
background-repeat: no-repeat;
margin-top: 400px;
margin-left: -80%;
width: 250%;
height:300px;
background-position: bottom;
background-color:none;
}
.Eigenprojekt
{
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
position: relative;
z-index: 4;
font-size: 120px;
color:#0d0d0d;
font-family: Sk-Modernist;
width: 100%
height: 100%;
margin-left: -5%; 
}


@media screen and (max-width: 1024px) 
{
.wrapperMainContent
{
height: 700px;
width: 80%;
margin-left: 10%;

display:grid;
grid-template-columns:10% 80% 10%;
grid-template-rows: 50px 600px 50px;;
}
.ImageContainer
{
position: sticky;
z-index: 0;
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 1;
grid-column-end: 4;
background-image: url("/3jsShowcase/ShowShoeHand.jpg");
 background-size: 120%;
display: sticky;
background-repeat: no-repeat;
margin: 1px;
width: 100%
height: 100%;
background-position: sticky;
}

.Circleimages
{
position: relative;
z-index: 3;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 3;
grid-column-end:4;
background-image: url("/Circles.png");
 background-size: 150%;
background-repeat: no-repeat;
margin-top: -100px;
margin-left: -80%;
width: 250%;
height:300px;
background-position: bottom;
background-color:none;
}

.Eigenprojekt
{
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
position: relative;
z-index: 4;
font-size: 500%;
color:#0d0d0d;
font-family: Sk-Modernist;
width: 100%
height: 100%;
margin-left: -10%;
letter-spacing: 2%;
margin-top: 10%;
}

}

@media screen and (max-width: 450px) 
{
.wrapperMainContent
{
height: 400px;
width: 80%;
margin-left: 10%;

display:grid;
grid-template-columns:10% 80% 10%;
grid-template-rows: 5% 80% 15%;
}
.ImageContainer
{
position: relative;
z-index: 0;
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 1;
grid-column-end: 4;
background-image: url("/3jsShowcase/ShowShoeHand.jpg");
 background-size: 124%;
display: inline-block;
background-repeat: no-repeat;
margin: 1px;
width: 100%
height: 100%;
background-position: bottom;
}


.Eigenprojekt
{
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
position: relative;
z-index: 4;
font-size: 50px;
color:#0d0d0d;
font-family: Sk-Modernist;
width: 100%
height: 100%;
margin-left: -5%;
letter-spacing: 5px;
margin-top: -2%;
}

.Circleimages
{
position: relative;
z-index: 3;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 3;
grid-column-end:4;
background-image: url("/Circles.png");
 background-size: 150%;
background-repeat: no-repeat;
margin-top: -170px;
margin-left: -90%;
width: 250%;
height:300px;
background-position: bottom;
background-color:none;
}

}


@media screen and (max-width: 360px) 
{
.wrapperMainContent
{
position: relative;
z-index; -3;
display:grid;
grid-template-columns:10% 80% 10%;
grid-template-rows: 20% 70% 10%;

height: 350px;
width: 275px;
margin-left: 5%;
}
.ImageContainer
{
position: relative;
z-index: 1;
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 1;
grid-column-end: 4;
background-image: url("/3jsShowcase/ShowShoeHand.jpg");
 background-size: 120%;
display: inline-block;
background-repeat: no-repeat;
margin: 1px;
width: 100%
height: 100%;
background-position: bottom;
}

.Eigenprojekt
{
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
position: relative;
z-index: 4;
font-size: 40px;
color:#0d0d0d;
font-family: Sk-Modernist;
width: 100%
height: 100%;
margin-left: -5%; 
}
.Circleimages
{
position: relative;
z-index: 3;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 3;
grid-column-end:4;
background-image: url("/Circles.png");
 background-size: 150%;
background-repeat: no-repeat;
margin-top: 50px;
margin-left: -100%;
width: 250%;
height:120%;
background-position: bottom;
background-color:none;
}
}
`}</style>
	</div>

	
	)
}