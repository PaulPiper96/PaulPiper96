import Link from 'next/link'
import Anime from 'react-anime'
import { useEffect } from 'react'



export default function SkillsVsiauls() 
{

	
	 return ( 
	<div>
        <div className="Visuals">VISUALS</div>
		 <div className="Fulltext">
            - Whole Creative Cloud -> Photoshop, Lightroom, Indesign, Illustrator, Adobe Xd, etc.... <br/><br/>

            - Various 3D Software -> Maya, Substance Painter, Element 3D, Blender (currently learning), Substance Designer  <br/><br/>

            - Camera handling for either Filmmaking or Photography, also basic knowledge about Analouge, but digital most comfortable (Sony Alpha series preferred)<br/><br/>

            - Motion Graphics -> Premiere, After Effects, DaVinci Resolve, Avid Media Composer (but not super comfortable)
            
             
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