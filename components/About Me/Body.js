import Link from 'next/link'
import Anime from 'react-anime'
import { useEffect } from 'react'
import AboutMeText from './AboutMeText'
import SkillsVisuals from './SkillsVisuals'
import SkillsDevelpment from './Skills Development'
import Audio from './Audio'
import {TweenMax,TweenLite, Linear} from 'gsap';

export default function Herotext() 
{

	function closeContainer () {
		var Wraps = document.getElementsByClassName("wrapperSecondaryContent").item(0);   
        TweenMax.to(Wraps,2, {
			
			margin:'0 0 0 2000',
			ease: "power4.out",
			display: 'none',
        });
    
	}

	function openContainer () {
		var Wraps = document.getElementsByClassName("wrapperSecondaryContent").item(0);   
        TweenMax.to(Wraps,2, {
		
			margin:'0 0 0 -1',
			 ease: "power4.out",
			 display: 'grid'
        });
    
	}


	 return ( 
	<div>
	<div className="wrapperSecondaryContent">
		<div className="FirstTextContent"><SkillsVisuals></SkillsVisuals></div>
		<div className="SecondTextContent">< SkillsDevelpment></SkillsDevelpment></div>
		<div className="ThridTextContent"><Audio></Audio></div>
	<div className="CloseContainer" onClick={closeContainer}></div>
	</div> 

	<div className="wrapperMainContent">
	<div className="wrapperMainText"> <AboutMeText/> 	 <button className="Button" onClick={openContainer}>Show skills</button></div>
		 <div className="aboutletters">ABOUT </div> 
		<div className="leftwrapperBild">
		 	<div className="MyImageContainer"></div>
		 <div className="CircleimageEins"></div>
		 <div className="CircleimageZwei"></div>
		</div>
	
	</div>
	 <style jsx>{`

@media screen and (max-width: 2100px) 
{

}

@media screen and (max-width: 2000px) 
{
.Button
{
	display: inline;
	position: relative;
	z-index: 5;
	border-radius: 35px;
	padding: 0px;
	width: 170px;
	height: 40px;
	text-align:top;
	font-family: Sk-Modernist;
	font-weight: bold;
	background-color: #ffd766;
	font-size: 20px;
	grid-column-start: 2;
	grid-column-end:2;
	grid-row-start: 2;
	grid-row-end: 2;
	margin-top: 5%;
	margin-left: 0%;
	color: #949494;
	cursor: pointer;
	transition: 1s;
	border: none;
	line-height: -100px;
}




.Button:hover
{
	transition: 1s;
	background-color: #ffcd2c;
	color: #141414;
	cursor: pointer;
	}

.MyImageContainer
{
	position: relative;
	z-index: 1;
	background-image: url("/AboutMe/circlePortrait.png");
	background-color: none;
	grid-column-start: 2;
	grid-column-end:4;
	grid-row-start: 1;
	grid-row-end: 3;
	width: 100%;
	height: 120%;
	background-size: 90%;
	background-position: center;
	background-repeat: no-repeat;
}

.CircleimageEins
{
	position: relative;
	z-index: 0;
	background-image: url("/Circles.png");
	background-color: none;
	grid-column-start:1;
	grid-column-end:3;
	grid-row-start: 1;
	grid-row-end: 2;
	width: 100%;
	height: 200%;
	background-size: 80%;
	background-position: center;
	background-repeat: no-repeat;
}

.CircleimageZwei
{
	position: relative;
	z-index: 1;
	background-image: url("/Circles.png");
	background-color: none;
	grid-column-start:3;
	grid-column-end:5;
	grid-row-start: 2;
	grid-row-end: 2;
	width: 100%;
	height: 200%;
	background-size: 80%;
	background-position: center;
	background-repeat: no-repeat;
}

.leftwrapperBild
{
	position: relative;
	z-index: 1;
	display: grid;
	grid-column-start: 3;
	grid-column-end: 4;
	grid-row-start: 1;
	grid-row-end: 3;
	grid-template-columns:  15% 35% 35% 15%;;
	grid-template-rows: 20% 40% 40%;
}

.wrapperMainContent
{
	position: relative;
	z-index: 1;
	display: grid;
	height: 800px;
	width: 80%;
	margin-left: 10%;
	background-color: none;
	grid-template-columns:  5% 35% 60%;;
	grid-template-rows: 20% 80%;
	font-size: 1.2em;
}

.aboutletters
{
	transform: rotate(-90deg);
	position: relative;
	z-index: -1;
	margin-left: -5 0px;
	font-family: Sk-Modernist;
	font-weight: bold;
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 3;
	font-size:200px;
	color: #ffbb7a;
}
.wrapperMainText
{
	margin-left: 90px;
	margin-top: 20px;
	position: relative;
	font-family: Franklin Gothic ;
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 2;
}

.wrapperSecondaryContent
{
	
	position:absolute;
	z-index: 5;
	display: none;
	height: 100vh;
	width: 102vw;
	margin-left: 50%;
	background-color:  #ffcd2c;
	grid-template-columns:  5% 30% 30% 30% 5%;
	grid-template-rows: 15% 70% 15%;
	font-size: 1.2em;
}
.FirstTextContent
{
	background-color:none;
	width: 90%;
	height: 100%;
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 2;
	text-align: left;
}

.SecondTextContent
{
	background-color:none;
	width: 90%;
	height: 100%;
	grid-column-start: 3;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 2;
	text-align: left;
}


.ThridTextContent
{
	background-color:none;
	width: 90%;
	height: 100%;
	grid-column-start: 4;
	grid-column-end: 4;
	grid-row-start: 2;
	grid-row-end: 2;
	text-align: left;
}

.CloseContainer
{
	cursor: pointer;
	background-image: url("/AboutMe/ClosingSymbol.svg");
	position: relative;
	float: right;
	margin-left:85%;
	background-color:none;
	width: 60px;
	height: 60px;
	grid-column-start: 4;
	grid-column-end: 4;
	grid-row-start: 3;
	grid-row-end: 3;
	text-align: left;
	background-size: 100%;
	background-repeat:no-repeat;
	opacity: 0.9;
	transition: 0.5s;
	transition-timing-function: ease-in-out;
}

.CloseContainer:hover
{
	transition: 0.5s;
	opacity: 1;
	width: 70px;
	height: 70px;
	transform: rotate(270deg);
	transition-timing-function: ease-in-out;
}












@media screen and (max-width: 1024px) 
{
	.wrapperMainContent
	{
		position: relative;
		z-index: 1;
		display: grid;
		height: 800px;
		grid-template-columns:  2% 96% 2%;;
		grid-template-rows: 60% 40%;
		font-size: 1.3em;
	}

	.wrapperMainText
{
	width: 90%; 
	position: relative;
	font-family: Franklin Gothic ;
	grid-column-start:2;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 2;
	text-align: bottom;
	margin-top: 5%;
}
.aboutletters
{
	margin-top: -65%;
	z-index: -1;
	margin-left:150px;
	font-family: Sk-Modernist;
	font-weight: bold;
	grid-column-start: 1;
	grid-column-end: 1;
	grid-row-start: 2;
	grid-row-end:2;
	font-size:140px;
	color: #ffbb7a;
}
.Button
{
	display:block;
	width: 170px;
	height: 60px;
	text-align:center;
	font-family: Sk-Modernist;
	font-weight: bold;
	background-color: #ffd766;
	font-size: 20px;
	grid-column-start: 2;
	grid-column-end:2;
	grid-row-start: 3;
	grid-row-end: 3;
	margin-top: 50px;
	margin-left: 0%;
	color: #949494;
	cursor: pointer;
	transition: 1s;
	padding: 0px;
	line-height: -100px;
}
.MyImageContainer
{
	position: relative;
	z-index: 1;
	background-image: url("/AboutMe/circlePortrait.png");
	grid-column-start:0;
	grid-column-end:0;
	grid-row-start:2;
	grid-row-end:2;
	height: 500px;
	width: 100%;
	background-size: 80%;
	background-position: center;
	background-repeat: no-repeat;
}

.leftwrapperBild
{
	margin-left: 0px;
	margin-top: 0px;
	position: relative;
	z-index: 1;
	display: grid;
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 1;
	grid-template-columns:  5% 45% 45% 5%;
	grid-template-rows: 5% 90% 5%;
	height: 100%;
}



.CircleimageZwei
{
	display: none;
}
.CircleimageEins
{
	position: relative;
	z-index: 1;
	background-image: url("/Circles.png");
	background-color: none;
	grid-column-start:2;
	grid-column-end:2;
	grid-row-start: 1;
	grid-row-end: 1;
	width: 100%;
	height:250px;
	background-size: 80%;
	background-position: center;
	background-repeat: no-repeat;
	margin-top: 0%;
	margin-left:120%;
}
.wrapperSecondaryContent
{
	
	position:absolute;
	z-index: 5;
	display:none;
	width: 100vw;
	margin-left: 50%;
	background-color:  #ffcd2c;
	grid-template-columns:  5% 45% 45% 5%;
	grid-template-rows: 15% 35%  35% 15%;
	font-size: 1.2em;
}
.FirstTextContent
{
	background-color:none;
	width: 90%;
	height: 100%;
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 2;
	text-align: left;
}

.SecondTextContent
{
	background-color:none;
	width: 90%;
	height: 100%;
	grid-column-start: 3;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 2;
	text-align: left;
}


.ThridTextContent
{
	background-color:none;
	width: 90%;
	height: 100%;
	grid-column-start: 3;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 3;
	text-align: left;
}

.CloseContainer
{
	cursor: pointer;
	background-image: url("/AboutMe/ClosingSymbol.svg");
	position: relative;
	float: right;
	margin-left:85%;
	margin-top:350px;
	background-color:none;
	width: 60px;
	height: 60px;
	grid-column-start: 2;
	grid-column-end: 2
	grid-row-start:3;
	grid-row-end:3;
	text-align: left;
	background-size: 100%;
	background-repeat:no-repeat;
	opacity: 0.9;
	transition: 0.5s;
	transition-timing-function: ease-in-out;
}

}










@media screen and (max-width: 450px) 
{

	.CircleimageEins
{
	position: relative;
	z-index: 1;
	background-image: url("/Circles.png");
	width: 100%;
	height:250px;
	background-size: 100%;
	margin-top: 10%;
	margin-left:120%;
}
.wrapperMainContent
{
	position: relative;
	z-index: 1;
	display: grid;
	height: 800px;
	grid-template-columns:  2% 96% 2%;;
	grid-template-rows: 60% 40%;
	font-size: 1.3em;
	margin-left: 0%;
}


.wrapperMainText
{
	width: 90%; 
	position: relative;
	font-family: Franklin Gothic ;
	grid-column-start:2;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 2;
	text-align: bottom;
	margin-top: -5%;
	margin-left: 55px;
}

.MyImageContainer
{
	position: relative;
	z-index: 1;
	background-image: url("/AboutMe/circlePortrait.png");
	grid-column-start:0;
	grid-column-end:0;
	grid-row-start:2;
	grid-row-end:2;
	height: 500px;
	width: 100%;
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
}
.leftwrapperBild
{
	margin-left:40px;
	margin-top: 0px;
	position: relative;
	z-index: 1;
	display: grid;
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 1;
	grid-template-columns:  5% 45% 45% 5%;
	grid-template-rows: 5% 90% 5%;
	height:90%;
	width: 250px;
}
.Button

{
	display:block;
	width: 140px;
	height: 40px;
	text-align:center;
	font-family: Sk-Modernist;
	font-weight: bold;
	background-color: #ffd766;
	font-size: 18px;
	grid-column-start: 2;
	grid-column-end:2;
	grid-row-start: 3;
	grid-row-end: 3;
	margin-top: 50px;
	margin-left: 0%;
	color: #949494;
	cursor: pointer;
	transition: 1s;
	padding: 0px;
	line-height: -100px;
	
}



.wrapperSecondaryContent
{
	
	position:absolute;
	z-index: 5;
	display:none;
	height:1400px;
	width: 100vw;
	margin-left: 50%;
	background-color:  #ffcd2c;
	grid-template-columns:  5% 90% 5%;
	grid-template-rows: 3% 30% 3% 30% 3% 30%;
	font-size: 1.2em;
}
.FirstTextContent
{
	background-color:none;
	width: 90%;
	height: 100%;
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 2;
	text-align: left;
}

.SecondTextContent
{
	margin-top: 20%;
	background-color:none;
	width: 90%;
	height: 100%;
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 4;
	grid-row-end: 4;
	text-align: left;
}


.ThridTextContent
{
	margin-top: 20%;
	background-color:none;
	width: 90%;
	height: 150px;
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start:6;
	grid-row-end:6;
	text-align: left;
}

.CloseContainer
{
	cursor: pointer;
	background-image: url("/AboutMe/ClosingSymbol.svg");
	position: relative;
	float: right;
	margin-left:75%;
	margin-top:830px;
	background-color:none;
	width: 60px;
	height: 60px;
	grid-column-start: 2;
	grid-column-end: 2
	grid-row-start:5;
	grid-row-end:5;
	text-align: left;
	background-size: 90%;
	background-repeat:no-repeat;
	opacity: 0.9;
	transition: 0.5s;
	transition-timing-function: ease-in-out;
}


}


}





@media screen and (max-width: 360px) 
{
	.Button
	{
		display:block;
		width: 140px;
		height: 40px;
		text-align:center;
		font-family: Sk-Modernist;
		font-weight: bold;
		background-color: #ffd766;
		font-size: 18px;
		grid-column-start: 2;
		grid-column-end:2;
		grid-row-start: 3;
		grid-row-end: 3;
		margin-top: 50px;
		margin-left: 0%;
		color: #949494;
		cursor: pointer;
		transition: 1s;
		padding: 0px;
		line-height: -100px;
	}
}
`}</style>
	</div>

	
	)
}