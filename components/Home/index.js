import MenuLayout from '../components/Home/MyLayout.js'
import { useEffect } from 'react'


export default function Index() {
	useEffect(() => {
			if(window.innerWidth >= 2000){alert("This website isnt opitimzied for 4k yet please change the zoom in your browser or consider another screen");}
			
  });	
	
  return (
    <MenuLayout>
     

    </MenuLayout>
	  
  )
	
}
