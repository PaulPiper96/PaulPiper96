import Header from './Header'
import {TweenMax,TweenLite, Linear} from 'gsap';
import Body from './Body'

export default function MenuLayout(props) 
{
	
	
    
	
	return(
	<div>
		<nav> 
   		<Header/>
	  </nav>
	  
	 <main>
		<Body></Body>
		
		<style jsx>{`

`}</style>
	
	  </main>
	</div>
	)

}