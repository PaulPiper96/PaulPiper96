	import Link from 'next/link';
import Anime from 'react-anime';


	
export default function Body() 
{


	return(
	
	<div>

		<div className="wrapper">

			<h2 className="Überschrift">CONTACT</h2>
			<div className="Balken"></div>
			<p className="Ifyouwantto"> If you want to get in touch: </p>
			<div className="ArchtecImage"></div>
			<div className="Contactwraper">
				<p className="mail"> p-piper@web.de</p>
				<p className="number"> +49/15732385318</p>
			</div>
		

		</div>

		<style jsx>{`

@media screen and (max-width: 2100px) 
{}


@media screen and (max-width: 2000px) 
{
	.wrapper
	{
		position: relative; 
		z-index: 1;
		margin-left: 5%;
		width: 90%;
		display: grid;
		height: 700px;
		grid-template-columns:  33% 33% 33%;
		grid-template-rows: 5% 20% 2% 3% 20% 25% 25%;
		background-color:none;
	}

	.Contactwraper
	{
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist;
		color:  #ffcd2c;
		font-weight: bold;
		font-size:40px;
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 6;
		grid-row-end:6;
		letter-spacing: 3px;
		margin-top: -50px;
		margin-left: 70px;
	}

	.Überschrift {
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist;
		color: #141414;
		font-size:90px;
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 2;
		grid-row-end: 2;
		letter-spacing: 3px;
		margin-top: 0px;
	}
	.Balken
	{	
		margin-top: 0px; 
		margin-left: 20px; 
		position: relative; 
		z-index: 1;
		background-color:   #ffcd2c;;
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 3;
		grid-row-end: 3;
		width: 100px;
	}
	.Ifyouwantto
	{
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist Mono;
		color: #141414;
		font-size:30px;
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 5;
		grid-row-end: 5;
		letter-spacing: 3px;
		margin-top: 40px;
		margin-left: 60px;
	}



	.ArchtecImage{	position: relative;
		z-index: 0;
		background-image: url("/contact/Bundestag.jpg");
		grid-column-start:2;
		grid-column-end:4;
		grid-row-start:2;
		grid-row-end:8;
		width: 100%;	
		height: 100%;
		background-size:100%;
		background-position: center;
		background-repeat: no-repeat;
		margin-left: -100px; 
	}


}


@media screen and (max-width:1024px) 
{

	.wrapper
	{
		position: relative; 
		z-index: 1;
		margin-left: 5%;
		width: 90%;
		display: grid;
		height: 700px;
		grid-template-columns:  33% 33% 33%;
		grid-template-rows:33% 33% 33%;
		background-color:none;
	}

	.Contactwraper
	{
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist;
		color:  #ffcd2c;
		font-weight: bold;
		font-size:30px;
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 2;
		grid-row-end:2;
		letter-spacing: 3px;
		margin-top: -10px;
		margin-left: 150px;
	}

	.Überschrift {
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist;
		color: #141414;
		font-size:90px;
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 1;
		letter-spacing: 3px;
		margin-top: 0px;
	}
	.Balken
	{	
		margin-top: 0px; 
		margin-left: 20px; 
		position: relative; 
		z-index: 1;
		background-color:   #ffcd2c;;
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 2;
		grid-row-end: 2;
		width: 100px;
		margin-top: -100px;
		height: 15px;
	}
	.Ifyouwantto
	{
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist Mono;
		color: #141414;
		font-size:30px;
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 2;
		grid-row-end: 2;
		letter-spacing: 3px;
		margin-top: -60px;
		margin-left: 60px;
	}



	.ArchtecImage{	position: relative;
		z-index: 0;
		background-image: url("/contact/Bundestag.jpg");
		grid-column-start:1;
		grid-column-end:4;
		grid-row-start:3;
		grid-row-end:3;
		width:100vw;	
		height: 100%;
		background-size:120%;
		background-position: center;
		background-repeat: no-repeat;
		margin-left: -10%; 
	}



}





@media screen and (max-width: 450px) 
{
	.wrapper
	{
		position: relative; 
		z-index: 1;
		margin-left: 5%;
		width: 90%;
		display: grid;
		height: 700px;
		grid-template-columns:  33% 33% 33%;
		grid-template-rows:33% 33% 33%;
		background-color:none;
	}

	.Contactwraper
	{
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist;
		color:  #ffcd2c;
		font-weight: bold;
		font-size:20px;
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 2;
		grid-row-end:2;
		letter-spacing: 3px;
		margin-top: -10px;
		margin-left: 50px;
	}

	.Überschrift {
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist;
		color: #141414;
		font-size:50px;
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 1;
		letter-spacing: 1px;
		margin-top: 0px;
	}
	.Balken
	{	
	
		margin-left: 0px; 
		position: relative; 
		z-index: 1;
		background-color:   #ffcd2c;;
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 2;
		grid-row-end: 2;
		width: 80px;
		margin-top: -130px;
		height: 15px;
	}
	.Ifyouwantto
	{
		position: relative; 
		z-index: 1;
		font-family: Sk-Modernist Mono;
		color: #141414;
		font-size:20px;
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 2;
		grid-row-end: 2;
		letter-spacing: 3px;
		margin-top: -80px;
		margin-left: 30px;
	}



	.ArchtecImage{	position: relative;
		z-index: 0;
		background-image: url("/contact/Bundestag.jpg");
		grid-column-start:1;
		grid-column-end:4;
		grid-row-start:3;
		grid-row-end:3;
		width:100vw;	
		height: 100%;
		background-size:120%;
		background-position: center;
		background-repeat: no-repeat;
		margin-left: -10%;
		margin-top: -30%; 
	}
	}


}

@media screen and (max-width: 360px) 
{}


}
`}</style>
		</div>
		
	)
}