import Link from 'next/link'


export default function Explanation() 
{
	 return (
		 
		 <div>
		 <div className="WrapperExplanation">
		 	<div className="Überschrift"> Animation</div>
		 	<div className="GelberbehindBalken"></div>
		 <div className="GifContainer"> </div>
		 <div className="Explanationtext">At this point in time i was fairly new to the world of 3D. I started using Maya just 3 months before.
		 <br/>
		 <br/>
		 Therefore i purchased my Model from Turbosquoid and focused more on the materials.
		 I started using Mudbox for painting and later on changed to Substance Painter. Everything else was done in Maya.
		 </div>
		</div>

		
<style jsx>{`

@media screen and (max-width: 2100px) 
{}

@media screen and (max-width: 2000px) 
{
.WrapperExplanation
{
display:grid;
margin-top:20px;
position: relative;
background-color:  none; 
height: 600px;
width: 70%;
margin-left: 11%;
grid-template-columns:50% 50%;
grid-template-rows:20% 80%;
}

.Überschrift
{
position: relative;
z-index: 2;
font-size: 150px;
text-align: center;
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 0;
grid-row-end: 1;
background-color: none;
font-family: Sk-Modernist;
font-weight: bold;
 background-repeat: no-repeat;
background-size: 70px;
color:#0d0d0d;
}


.GelberbehindBalken
{
width: 90%;
margin-right: 10%;
position: relative;
z-index: 1;
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 0;
grid-row-end: 1;
background-color: #296996;
font-family: Sk-Modernist Mono;
font-weight: none;
height: 80px;
margin-top: 10%;
}

.GifContainer
{
float: left;
position: relative;
z-index: 1;
position: relative;
text-align: center;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end:2;
font-family: Sk-Modernist Mono;
background-repeat: no-repeat;
background-size:100%;
background-image: url("/3jsShowcase/basic Video.gif");
margin-top: -320px;
left: 10%;
background-position:60% 40%;
}

.Explanationtext
{

margin-left:22%;
margin-top:10%;
position: relative;
z-index: 5;
width: 80%;
height: 100%;
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end:2;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end:3;
font-size: 140%;
color:#0d0d0d;
font-family:Franklin Gothic Medium;
font-weight: demi;
}

}

@media screen and (max-width: 1024px) 
{

.WrapperExplanation {margin-top:0px;
position: relative;
background-color: none; 
height: 600px;
width: 80%;
margin-left: 10%
grid-template-columns:50% 50%;
grid-template-rows:15% 37.5% 37.5%;
}

.Überschrift
{
position: relative;
z-index: 0;
font-size: 570%;
vertical-align: bottom;
margin-left: -3rem;
margin-top: 0%
}
.GelberbehindBalken
{
position: relative;
width: 95%;
margin-left: 3%;
z-index: -1;
font-weight: none;
height: 50px;
margin-top: 9%;
}

.GifContainer
{
z-index: 1;
margin-top: -1%;
position: relative;
text-align: center;
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end:3;
font-family: Sk-Modernist Mono;
background-repeat: no-repeat;
background-size:100%;
background-image: url("/3jsShowcase/basic Video.gif");
height: 100%;
left: 0%;
}

.Explanationtext
{
margin-left:0%;
margin-top:-0%;
position: relative;
z-index: 5;
width: 100%;
height: 100%;
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end:4;
font-size: 120%;
color:#0d0d0d;
font-family:Franklin Gothic Medium;
font-weight: demi;
}

}


@media screen and (max-width: 450px) 
{
.WrapperExplanation 
{
margin-top:-100px;
position: relative;
height: 600px;
width: 80%;
margin-left: 10%;
grid-template-columns:50% 50%;
grid-template-rows:15% 37.5% 37.5%;
}
.Überschrift
{
font-size: 260%;
margin-left: 3%;
}

.GelberbehindBalken
{
z-index: -1;
width: 100%;
margin-left: 5%;
font-family: Sk-Modernist Mono;
font-weight: none;
height: 40px;
margin-top: 10%;
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 0;
grid-row-end:1;
}
.GifContainer
{
margin-top: -6%;
position: relative;
text-align: center;
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end:3;
font-family: Sk-Modernist Mono;
background-repeat: no-repeat;
background-size:120%;
background-image: url("/3jsShowcase/basic Video.gif");
height: 70%;
}
.Explanationtext
{
margin-top: -30%;
position: relative;
z-index: 5;
width: 100%;
height: 100%;
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end:4;
font-size: 100%;
color:#0d0d0d;
font-family:Franklin Gothic Book;
font-weight: light;
}

}

`}</style>
		 </div>
		
	 )

}