import Link from 'next/link'
import Anime from 'react-anime'
import { useEffect } from 'react'



export default function Audio() 
{

	
	 return ( 
	<div>
        <div className="Visuals">AUDIO</div>
		 <div className="Fulltext">
            - Protools <br/><br/>

            - Logic <br/><br/>

            - Cubase <br/><br/>

            
             
         </div>
	 <style jsx>{`

@media screen and (max-width: 2100px) 
{

}

@media screen and (max-width: 2000px) 
{
    .Visuals
    {
        color: #296996;
        margin-bottom: 5%;
        font-family:Sk-Modernist;
        font-weight: bold;
       font-family:Sk-Modernist Mono;
       font-size: 45px;
    }

    .Fulltext
    {
        color: #296996;
        font-family:Sk-Modernist;
        font-size: 18px;

    }

}

@media screen and (max-width: 1024px) 
{

}

@media screen and (max-width: 450px) 
{
}

@media screen and (max-width: 360px) 
{

}
`}</style>
	</div>

	
	)
}