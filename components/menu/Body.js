	import Link from 'next/link';
import Anime from 'react-anime';

const mainprops  = {
	opacity:[0,100],
	delay:600,

}

	
export default function Body() 
{

const HoverOver =(e) => 
{

	var hoverdiv = document.getElementsByClassName("hoverme");
		hoverdiv.item(0.).style.cssText=YellowAssignment.toString();
}
	return(
		<Anime{...mainprops}>
	<div>
		<div className="wrapper">
		<div className="TypoContainer">
			<div className="SchriftElement"><div className="hoverme"/><div className="ActualFont">Contact</div></div>
			<Link href="/Eigenprojekt" >
				<div className="SchriftElement"><div className="hoverme"/><div className="ActualFont">Work</div></div>
			</Link>

			<Link href="/AboutMe" >
			<div className="SchriftElement"><div className="hoverme"/><div className="ActualFont">Me</div></div>
			</Link>
		</div>
			<div className="blueRechteck"></div>
			<div className="ImageContainer"></div>
			<div className="Containergelb"></div>
		</div>

		<style jsx>{`

.ActualFont{
height: 80%;
width: 100%;
z-index: 3;
font-size: 40px;
text-align: left;
margin-top: 10px;
}

.hoverme
{
opacity:0;
z-index:5;
width: 20px;
height: 10%;
float: left;
margin-left: 0px;
transition: 0.7s;
}

.SchriftElement:hover .hoverme
{
opacity:1;
z-index:5;
width: 20px;
height: 100%;
float: left;
background-color: #ffcd2c;
transition: 1s;
}


.SchriftElement
{
display:grid;
grid-template-columns:15% 85%;
color: #0d0d0d;
font-family: Sk-Modernist Mono;
font-size: 40px;
margin-left: 0px;
margin-right: 0px;
transition: 0.3s;
text-align: left;
cursor: pointer;
}

.TypoContainer
{
display:grid;
grid-row-start: 3;
grid-column-start: 1;
grid-column-end: 3;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 100%;
position: relative;
height: 90px;
width: 150%;
text-align: center;
z-index: 4;
margin-left: 35%;
margin-top: 20%;
background-color: white;
animation: typomove 1.3s 1;
}

@keyframes  typomove { 
  0%   {width: 50%;opacity:0;}
  100% {width: 150%;opacity:1;}
}


.wrapper
{
position: relative;
z-index: 0;
display:grid;
position: relative;
grid-template-columns: 25% 25% 25% 25%;
grid-template-rows: 200px 200px 200px;
height:600px;
width: 90%;
margin-left: 5%;
margin-top: 50px;
}
.blueRechteck
{
opacity:1;
grid-row-start: 1;
position: relative;
z-index:0;
grid-column-start: 1;
grid-column-end: 3;
position: relative;
background-color: #296996;
height: 150%;
width:70%;
margin-left: 1%;
margin-top: 3px;
animation: bluemove 2s 1;
}

@keyframes bluemove { 
  0%   {width:10%;opacity:0;}
  100% {width:70%;opacity:1;}
}

.ImageContainer
{
background-image: url("/Menu/Menu_Quer.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
margin-top: 50px;
position: relative;
z-index: 2;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 2;
grid-column-end: 4;
height: 450px;
width:120%;
}

.Containergelb
{
position: relative;
z-index: 0;
grid-row-start: 3;
grid-row-end: 4;
grid-column-start: 4;
grid-column-end: 5;
background-color: #ffcd2c;
height: 200px;
width:90%;
margin-left: -50px;
margin-top: -10%;
animation: Containergelbmove 2s 1;
}

@keyframes Containergelbmove { 
  0%   {width:120%;opacity:0;}
  100% {width:90%;opacity:1;}
}


@media screen and (max-width: 1024px) 
{

.wrapper
{
position: relative;
z-index: 1;
display:grid;
position: relative;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 300px 300px;
height:600px;
width: 90%;
margin-left: 5%;
margin-top: 50px;
}

.TypoContainer
{
display:grid;
grid-row-start: 3;
grid-column-start: 1;
grid-column-end: 3;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 100%;
position: relative;
height: 70px;
width: 160%;
text-align: center;
z-index: 4;
margin-left:0;
margin-top: -20%;
animation: typomove 1s 1;
}

@keyframes  typomove { 
  0%   {margin-left:20;opacity:0;}
  100% {margin-left:0;opacity:1;}
}


.ActualFont{
height: 80%;
width: 100%;
z-index: 3;
font-size: 30px;
text-align: left;
margin-top: 10px;
background-color: white;
}


.SchriftElement
{
display:grid;
grid-template-columns:15% 85%;
color: #0d0d0d;
font-family: Sk-Modernist Mono;
font-size: 40px;
margin-left: 0px;
margin-right: 0px;
transition: 0.3s;
text-align: left;
background-color: white;
}


.SchriftElement:hover .hoverme
{
opacity:1;
z-index:5;
width: 20px;
height: 100%;
float: left;
background-color: #ffcd2c;
transition: 1s;
}

.blueRechteck
{
grid-row-start: 1;
position: relative;
z-index: 0;
grid-column-start: 1;
grid-column-end: 3;
position: relative;
background-color: #296996;
height: 70%;
width:100%;
margin-left: 1%;
margin-top: 3px;
animation: bluemove 2s 1;
}

@keyframes bluemove { 
  0%   {margin-left: 20%;opacity:0;}
  100% {margin-left: 1%;opacity:1;}
}

.ImageContainer
{
background-image: url("/Menu/Menu_Quer.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: 99%;
margin-top: 50px;
position: relative;
z-index: 1;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: 4;
height: 400px;
width:80%;
margin-left: 10%;
}


.Containergelb
{
position: relative;
z-index: 0;
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end: 4;
background-color: #ffcd2c;
height: 220px;
width:100%;
margin-left:0px;
animation: Containergelbmove 2s 1;
}

@keyframes Containergelbmove { 
  0%   {width:120%;opacity:0;}
  100% {width:100%;opacity:1;}
}

@media screen and (max-width: 600px) 
{
.TypoContainer
{
display:grid;
grid-row-start: 3;
grid-column-start: 1;
grid-column-end: 3;
grid-template-columns: 170px;
grid-template-rows: 100px 100px 100px;
position: relative;
height: 300px;
width: 170px;
text-align: center;
z-index: 4;
background-color: white;
margin-left: 40px;
margin-top: -140px;
animation: typomove 1s 1;
}

@keyframes  typomove { 
  0%   {margin-left:-20px;opacity:0;}
  100% {margin-left:40px;opacity:1;}
}

.SchriftElement:hover .hoverme
{
opacity:1;
z-index:5;
width: 15px;
height: 70%;
float: left;
background-color: #ffcd2c;
transition: 1s;
}


.wrapper
{
position: relative;
z-index: 1;
display:grid;
position: relative;
grid-template-columns: 50% 50%;
grid-template-rows: 200px 200px 200px;
height:600px;
width: 90%;
margin-left: 5%;
margin-top: 20px;
}
.blueRechteck
{
grid-row-start: 1;
grid-row-end: 2;
position: relative;
z-index: 0;
grid-column-start: 1;
grid-column-end: 3;
position: relative;
background-color: #296996;
height: 200px;
width:70%;
}

.ImageContainer
{
background-image: url("/Menu/Menu_Quer.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: 99%;
margin-top: 0px;
position: relative;
z-index: 1;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: 4;
height: 400px;
width:100%;
margin-left: -2%;
}

.Containergelb
{
position: relative;
z-index: 0;
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end: 3;
background-color: #ffcd2c;
height: 170px;
width:100%;
margin-left:0px;
margin-top:10px;
}




}


}
`}</style>
		</div>
		</Anime>
	)
}