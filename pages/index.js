import MenuLayout from '../components/Home/MyLayout.js'
import { useEffect } from 'react'


export default function Index() {
	useEffect(() => {
    // Update the document title using the browser API
  const test =  document.getElementsByClassName("Eigenprojekt");

			
	
		const untendingsi = document.getElementById("__next-prerender-indicator");
		untendingsi.style.backgroundColor = "none";
	
		
			if(window.innerWidth >= 2000){alert("This website isnt opitimzied for 4k yet please change the zoom in your browser or consider another screen");}
			
  });	
	
  return (
    <MenuLayout>
     

    </MenuLayout>
	  
  )
	
}
