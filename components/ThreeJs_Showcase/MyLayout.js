import Header from './Header'
import Body from './Body'



export default function Layout(props) {
  return (
	  <div>
	  <nav>   
   	<Header/>
	  </nav>
	  
	 <main>	
			<Body/>
	  </main>
	   </div>
  )
}
// JavaScript Document