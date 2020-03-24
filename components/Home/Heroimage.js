import Link from 'next/link'
import Anime from 'react-anime'
const mainprops  = {
	translateY:[-60,0],
	delay:100,
}

export default function Header() 
{
	return(
	<div>
		<Anime{...mainprops}>
	<div className="Wrappercomponent">
	<div className="Rechteckgelb"></div>
	<div className="Rechteckorange"> </div>
	<div className="Rechteckblau"> </div>
	</div>
	<div className="HeroImageofMe"></div>
	</Anime>
	<style jsx>{`
.theImage
{
 width: 100%;
  height: auto;
 display: block;
margin:1%;
overflow: hidden;
background-position: center;

}
.HeroImageofMe 
{
background-image: url("/Querformat.jpg");
position: relative;
width: 70%;
height: 500px;
margin-top:-600px;
z-index:4;
margin-left: 10%;
background-position: center;
 background-repeat: no-repeat;
  background-size: 99%;
}

.Wrappercomponent {
postion:relative;
display:grid;
grid-template-columns: 30% 70% auto;
grid-template-rows: 350px 400px;
width: 98%;
margin-right: 1%;
margin-top: 2%;
z-index:0;
}
.Rechteckgelb
{
grid-row-start: 1;
z-index:2;
background-color: #ffcd2c;
margin-left: 40px;
margin-right: -100px;
margin-top: 40px;
margin-bottom: 40px;
animation: yellowmove 2s 1;
opacity:1;
}


@keyframes yellowmove {
  0%   {margin-right: 200px;margin-top: 60px;opacity:0;}
  100% {margin-right: -100px;margin-top: 40px;opacity:1;}
}

.Rechteckorange
{
grid-row-start: 2;
z-index:4;
background-color: #ffbb7a;
margin-left:-10%;
margin-right:-15%;
margin-bottom: 60px;
animation: orangemove 2s 1;
opacity:1;
}

@keyframes orangemove {
  0%   {margin-bottom: 160px;opacity:0;}
  100% {margin-bottom: 60px;opacity:1;}
}

.Rechteckblau
{
z-index:0;
background-color: #296996;
grid-row-start: 1;
grid-row-end: span 2;
margin-top: 50px;
margin-right: 10%;
animation: bluemove 2s 1;
opacity:1;
}
@keyframes bluemove {
 
  0%   {margin-top: -50px;opacity:0;}
  100% {margin-top: 50px;opacity:1;}

}

@media screen and (max-width: 1700px)
{
.HeroImageofMe 
{
background-image: url("/Hochformat.jpg");
 background-size: 80%;
}
@media screen and (max-width: 1500px)
{
.HeroImageofMe 
{
background-image: url("/Hochformat.jpg");
 background-size: 90%;
}

@media screen and (max-width: 900px) 
{
.Rechteckorange
{
grid-row-start: 2;
z-index:4;
background-color: #ffbb7a;
margin-left:2%;
margin-right:-15%;
margin-bottom: 60px;
}
.HeroImageofMe 
{
position: relative;
width: 65%;
height: 300px;
margin-top:-330px;
z-index:4;
margin-left: 18%;
background-image: url("/Querformat.jpg");
}
.Wrappercomponent {
postion:relative;
display:grid;
grid-template-columns: 30% 70% auto;
grid-template-rows: 200px 200px;
width: 98%;
margin-right: 1%;
margin-top: 4%;
}
}
@media screen and (max-width: 500px)
{
.HeroImageofMe 
{
background-image: url("/Hochformat.jpg");
 background-size: 80%;
}

`}</style>
	</div>
)
	
}