import Link from 'next/link';
import {TweenMax,TweenLite, Linear} from 'gsap';

	     function scaleUp(e) {
			 console.log(document.getElementsByClassName("ObenBalken").item(0)); 
			 var ObenBalken = document.getElementsByClassName("ObenBalken").item(0);   
        TweenMax.to(ObenBalken, 0.7, {
			width: '70%',
			height: '5px',
			 rotation: 45,
			margin:'60 0 0 20',
			 ease: "power4.out"
        });
			 
			 		 var UntenBalken = document.getElementsByClassName("UntenBalken").item(0);   
        TweenMax.to(UntenBalken,0.7, {
			width: '70%',
			height: '5px',
			 rotation: -45,
			margin:'0 0 0 20',
			 ease: "power4.out"
        });
    }

     function scaleBack(e) {
			 console.log(document.getElementsByClassName("ObenBalken").item(0)); 
			 var ObenBalken = document.getElementsByClassName("ObenBalken").item(0);   
        TweenMax.to(ObenBalken, 0.7, {
			width: '100%',
			height: '30px',
			 rotation: 0,
			margin:'20 0 0 0',
	 ease: "power4.out"
        });
			 
			 		 var UntenBalken = document.getElementsByClassName("UntenBalken").item(0);   
        TweenMax.to(UntenBalken, 0.7, {
			width: '40%',
			height: ' 10px',
			 rotation: 0,
			margin:'5 0 0 0',
			 ease: "power4.out"
        });
    }
 
const MenuIconnectLink = (props) =>
(
<div>
        <a className="MenuComponent">
<Link href="/" >
		<div className="MenuIcon" onClick={scaleBack} onMouseLeave={scaleBack} onMouseOver={scaleUp}><div className="ObenBalken"/> <div className="UntenBalken"/></div>
</Link>
	</a>
      
	<style jsx>
	{`

.ObenBalken
{
width 100%;
margin-top: 20px;
height: 30px;
background-color: #0d0d0d;
}

.UntenBalken
{
width 40%;
margin-top: 5px;
height: 10px;
background-color: #0d0d0d;
}

.MenuComponent
{
float: right;
font-family:Franklin Gothic Medium;
text-decoration:none;

}
.MenuIcon
{
float: right;
display: grid;
grid-template-columns: 100%;
grid-template-rows: 65px 65px;
width: 200px;
margin-right: 30px;
}

@media screen and (max-width: 550px) 
{
.MenuIcon
{
display: grid;
grid-template-columns: 100%;
grid-template-rows: 65px 65px;
float: right;
width: 130px;
margin-right: 0px;
}
}


`}</style>
</div>	
);

export default MenuIconnectLink;