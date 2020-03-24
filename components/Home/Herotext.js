import Link from 'next/link'
import Anime from 'react-anime'





const animeProps  = {
	translateY:[-25,0],
	delay:400,
	opacity:[0,1],

}



export default function Herotext() 
{
	 return (
		 <Anime {...animeProps }> 
	<div>
	<div className="Container">
		
	<div className="Containertext"> 
		<div className="Hello"> <div className="Circleclasss"><svg height="100%" width="100%">
		 <circle cx="270" cy="30" r="25" strokeWidth="3" fill="#ffcd2c" />
		 </svg> </div> 
	Hello, my Name is</div>
		 
		 
	<div className="Paul">	<div className="Circleclasss"><svg height="100%" width="100%">
  <circle cx="50" cy="80" r="50" strokeWidth="3" fill="#ffbb7a" />
</svg> </div> Paul</div>
	</div>
	</div>
	
	<div className="Container" id="unscreenme">
		 <p className="Lookingforintern">I am currently studying in Germany and looking for an  <div id="blue"> internship</div> </p> 
		 <div className="Abouts">
		 
		 
		
		  <Link href="/Eigenprojekt" >
		 <div className="Whatyouwannaknow">About my Work</div>
	</Link>
		
		 <Link href="/AboutMe" >
		  <div className="Whatyouwannaknow">About Me</div>
		</Link>
		 </div>
	</div>
 
	 <style jsx>{`
#blue
{
z-index: 3;
color: #296996;
font-family:Franklin Gothic Medium;
transition: background-color 1.5s ease, font-size 1.5s ease,color 1s ease;
}


.Circleclasss
{
position: absolute;
z-index: -1;
}

.Abouts
{
z-index: 3;
margin-top:-4%;
display:grid;
grid-template-columns: 50% 50%;
}

.Whatyouwannaknow
{
text-decoration: none;
display: inline-block;
color:inerhit;
margin-left: 15%;
font-size:70%;
font-family:Sk-Modernist Mono;
letter-spacing: 4px;
text-align:center;
transition: font-size 1.5s ease,color 1s ease;
cursor: pointer;
}


.Whatyouwannaknow:hover {

color: #0b0b0b;
font-size:80%;
;
}


.Container
{
margin-left:15%;
margin-right:5%;
margin-top:5%;
postion:relative;
display:grid;
grid-template-columns: 100%;
grid-template-rows: 100 ;
text-align: left;
padding: 3%;
}

.Lookingforintern
{
z-index: 3;
margin-top: -2%;
padding: 0.5%;
font-size:120%;
font-family: Franklin Gothic Book;

letter-spacing: 4px;
}


.Containertext
{
z-index: 3;
postion:relative;
display:grid;
grid-template-columns: 100%;
grid-template-rows: 40% 60% auto ;
text-align: left;

}

.Hello
{
z-index: 3;
padding: 0.5%;
font-size:120%;
font-family:Sk-Modernist Mono;
}

.Paul
{
z-index: 3;
margin-top: -3%;
padding: 0.5%;
font-size:370%;
font-family: Sk-Modernist Mono ;
 letter-spacing: 7px;
}

@media screen and (max-width: 900px) 
{
#unscreenme
{
display:none;
}
.Container
{
z-index: 3;
margin-left: 5%;
}
}


`}</style>
	</div>
		 	 
	 </Anime>
	
	)
}