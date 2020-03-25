import Link from 'next/link'
import {TweenMax,TweenLite, Linear} from 'gsap';

export default function Explanation() 
{
	
	
	function triggerDropdown (e)
	{
		const Drops = document.getElementsByClassName("WrapperShowMore").item(0);
	
		 TweenMax.to(Drops, 0.5, {
			opacity: '1',
			 height: '800px',
			 display: "grid",
        });
	}
	
		function releaseDropdown (e)
	{
		const Drops = document.getElementsByClassName("WrapperShowMore").item(0);
			Drops.style.display= "grid";
		 TweenMax.to(Drops, 1, {
			opacity: '0',
			 ease: "ease",
			  display: "none",
        });
		
		
		
	}
	
	
	
	 return (
		 
		 <div>
		 <div className="MyButton" onClick={triggerDropdown}>  <div className="ShowMore">Show More</div><svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 724 194"><defs><style>.cls-1fill="#ffcd2c"</style></defs><rect width="724" height="194" rx="97"/></svg></div>
		 <div className="WrapperShowMore">
		 	<div className="dropdownsymbol"  onClick={releaseDropdown} >
		 		<div className="Kreuz1"/> <div className="Kreuz2"/>
		 	</div>
		 	<div className="Photowrapper">
		  		<div className="Circleimages"> 	</div>
		 		<div className="AnnikaJump">	</div>
		 		<div className="annikaStand">	</div>
		 		<div className="AnnikaSit">		</div>
		 	</div>
		 </div>
	
		
<style jsx>{`
.visible
{
transition: 0.5s;
opacity: 0.5;
width:50%;
height: 800px;
}

@media screen and (max-width: 2100px) 
{}


@media screen and (max-width: 2000px) 
{

.ShowMore
{
transition: 0.5s;
z-index: 3;
position: absolute;
font-family: Sk-Modernist Mono;
font-size: 25px;
margin-top: 10px;
margin-left: 30px;
font-weight: bold;
color: #949494;
transition: 0.5s;
}

.MyButton:hover .ShowMore
{
transition: 1s;
color: #141414;
font-weight: bold;
}

.MyButton:hover svg
{
transition: 1s;
fill: #ffcd2c;
}

svg
{
transition: 1s;
position: relative;
color: blue;
fill: #ffd766;
}


.MyButton
{
z-index: 5;
position: relative;
margin-top:-1%;
margin-bottom:5%;
margin-left: 55%;
width: 200px;
cursor: pointer;
}



.WrapperShowMore
{
display: none;
opacity: 1;
float: right;
margin-top: -4%;
margin-right: 32%;
width:50%;
height: 800px;
background-color: #ffcd2c;
grid-template-columns:10% 80% 10%;
grid-template-rows: 10% 85% 5%;
}
.Circleimages
{
width: 100%;
height: 100%;
grid-row-start: 1;
grid-row-end: 1;
grid-column-start: 3;
grid-column-end: 3;
background-image: url("/Circles.png");
background-size: 100%;
background-repeat: no-repeat;
background-position:top;
position: relative;
z-index: 8;
margin-left: 70px;
margin-top: -30px;
}

.Photowrapper
{
display: grid;
background-color: none;
height: 100%;
width: 100%;
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end: 2;
grid-template-columns:33% 33% 33%;
grid-template-rows: 50% 50%;
}

.AnnikaJump
{
height: 100%;
width: 100%;
grid-row-start: 1;
grid-row-end: 3;
grid-column-start:1;
grid-column-end: 1;
background-position: center;
background-image: url("/3jsShowcase/Fotos/mehrboden-2.jpg");
 background-size: 150%;
background-repeat: no-repeat;
}

.AnnikaSit
{
margin-left: 5%;
height: 100%;
width: 95%;
grid-row-start: 2;
grid-row-end: 2;
grid-column-start:2;
grid-column-end: 4;
background-position: center;
background-image: url("/3jsShowcase/Fotos/sit.jpg");
 background-size: 100%;
background-repeat: no-repeat;
}
.annikaStand
{
margin-left: 5%;
height: 100%;
width: 95%;
grid-row-start: 1;
grid-row-end: 1;
grid-column-start:2;
grid-column-end: 4;
background-position: center;
background-image: url("/3jsShowcase/Fotos/wenigeraugenretusche.jpg");
 background-size: 100%;
background-repeat: no-repeat;
}

.dropdownsymbol
{
margin-top: 13%;
margin-left: 10px;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 50% 50%;
background-color:none;
grid-column-start: 1;
grid-column-end: 1;
grid-row-start: 1;
grid-row-end: 1;
}





.dropdownsymbol:hover .Kreuz1
{
transition: 0.2s;
background-color: black;
}

.dropdownsymbol:hover .Kreuz2
{
transition: 1s;
background-color: black;
}

.Kreuz1
{
transition: 0.2s;
grid-column-start: 1;
grid-column-end: 3;
width:80%;
height: 30%;
background-color: #424242;
transform: rotate(45deg);
margin-top: 30px;
}

.Kreuz2
{
transition: 1s;
grid-row-start: 2;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: 3;
width:80%;
height: 30%;
background-color: #424242;
transform: rotate(-45deg);
margin-top: -10px;
}
}

@media screen and (max-width: 1024px) 
{

.Circleimages
{
width: 100%;
height: 100%;
grid-row-start: 3;
grid-row-end: 3;
grid-column-start: 1;
grid-column-end: 1;
background-image: url("/Circles.png");
background-size: 42%;
background-repeat: no-repeat;
background-position:top;
position: relative;
z-index: 0;
margin-left: 190px;
margin-top: 130px;
}

.MyButton
{
z-index: 5;
position: relative;
margin-top:-2%;
margin-bottom:2%;
margin-left: 60px;
width: 150px;
cursor: pointer;
}
.ShowMore
{
z-index: 3;
position: absolute;
font-family: Sk-Modernist Mono;
font-size: 15px;
margin-top: 10px;
margin-left: 30px;
font-weight: bold;
color: #949494;
transition: 0.5s;
}

.WrapperShowMore
{
opacity: 1;
float: right;
margin-top: 4%;
margin-right: 35%;
width:55%;
height: 800px;
background-color: #ffcd2c;
grid-template-columns:20% 70% 10%;
grid-template-rows: 10% 80% 10%;
}
.Photowrapper
{
margin-left: -5%;
margin-top: 5%;
display: grid;
height: 100%;
width: 100%;
grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end: 2;
grid-template-columns:100%;
grid-template-rows: 40% 30% 30%;
}

.AnnikaJump
{
height: 100%;
width: 100%;
grid-row-start: 1;
grid-row-end: 3;
grid-column-start:1;
grid-column-end: 1;
background-color: none;
background-position: center;
background-image: url("/3jsShowcase/Fotos/mehrboden-2.jpg");
 background-size: 100%;
background-repeat: no-repeat;
}

.AnnikaSit
{
display: none;
}
.annikaStand
{
z-index: 1;
margin-left: 0%;
height: 100%;
width: 100%;
background-color: none;
grid-row-start: 3;
grid-row-end: 3;
grid-column-start:1;
grid-column-end: 3;
background-position: center;
background-image: url("/3jsShowcase/Fotos/wenigeraugenretusche.jpg");
 background-size: 100%;
background-repeat: no-repeat;
}

.dropdownsymbol
{
margin-top: 20px;
}


@media screen and (max-width: 450px) 
{
.Photowrapper
{
margin-top: 12%;
margin-left: -20%;
display: grid;

grid-row-start: 2;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end: 2;
grid-template-columns:33% 33% 33%;
grid-template-rows: 50% 25% 25%;
}

.AnnikaJump
{
height: 100%;
width: 100%;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start:1;
grid-column-end: 4;
background-color: none;
background-position: bottom;
background-image: url("/3jsShowcase/Fotos/mehrboden-2.jpg");
 background-size: 120%;
background-repeat: no-repeat;
}

.Circleimages
{
width: 200%;
height: 200%;
grid-row-start: 1;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: 1;
background-image: url("/Circles.png");
background-size: 100%;
background-repeat: no-repeat;
background-position:top;
position: relative;
z-index: 2;
margin-left: 110px;
margin-top: -20px;
}

.AnnikaSit
{
display: inline-block;
margin-left: 0%;
height: 100%;
width:100%;
grid-row-start: 3;
grid-row-end: 3;
grid-column-start:1;
grid-column-end:4;
background-position: center;
background-image: url("/3jsShowcase/Fotos/sit.jpg");
 background-size: 130%;
background-repeat: no-repeat;
}
.annikaStand
{
height: 100%;
width: 100%;
grid-row-start: 2;
grid-row-end:2;
grid-column-start:1;
grid-column-end:4;
background-position: center;
background-image: url("/3jsShowcase/Fotos/wenigeraugenretusche.jpg");
 background-size: 140%;
background-repeat: no-repeat;
}

.MyButton
{
z-index: 5;
position: relative;
margin-top:-15%;
margin-bottom:2%;
margin-left: 60px;
width: 150px;
cursor: pointer;
}
.WrapperShowMore
{
opacity: 1;
display:none;
float: right;
margin-top: 4%;
margin-right: 20%;
width:70%;
height: 800px;
background-color: #ffcd2c;
grid-template-columns:30% 70% 10%;
grid-template-rows: 10% 85% 5%;
}

}
`}</style>
		 </div>
		
	 )

}