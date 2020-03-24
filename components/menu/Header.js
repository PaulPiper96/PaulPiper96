import MenuIconnectLink  from './MenuIconnectLink';
import Anime from 'react-anime';
import Link from 'next/link';

const mainprops  = {
	translateX:[100,0],
	opacity:[0,100],
	delay:600,
	 easing: 'cubicBezier(.02, 1.9, .1, .7)'
}

export default function Header() 
{
	return(
		
	<div>
		<div className="wrapper">
		<Link href="/index">
			<div className="item"><div className="Logocontainer"> <img src="/Logo.svg" alt="Italian Trulli"/>
			</div></div>
		</Link>
			<div className="item"><MenuIconnectLink/></div>
		</div>
		<style jsx>{`
.Logocontainer
{
width: 200px;
height: 130px;
}

.wrapper
{
display:grid;
position: relative;
grid-template-columns: 50% 50%;
height:140px;
width: 90%;
margin-left: 5%;
margin-top: 50px;
}
.item
{
position: relative;
height: 132px;
width:98%;
margin-left: 1%;
margin-top: 3px;
}

@media screen and (max-width: 550px) 
{
.Logocontainer
{
width: 150px;
}
}

`}</style>
		</div>
			
	)
}