import Header from './Header'
import Body from './Body'


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
		<Body/>
	 </div>
	  
	  
	   <style jsx>{`

`}</style>
	  </main>
	   </div>
  )
}
// JavaScript Document