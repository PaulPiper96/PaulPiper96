import Header from './Header'
import HellomyNameisPaul from './HellomyNameisPaul'


const layoutStyle = {
  padding: '2rem',
	marginLeft: -5,
	

}

export default function Layout(props) {
  return (
	  <div>
	  <nav>   
   	<Header/>
	  </nav>
	  
	 <main>
		<div>
	  <HellomyNameisPaul/>
	 </div>
	  
	  
	   <style jsx>{`

`}</style>
	  </main>
	   </div>
  )
}
// JavaScript Document