"use client";

import { networksOGAAtom, networksJusticeAtom } from "@/src/jotai/networks.jotai"
import { useAtom } from "jotai"
import { useState } from "react";

type Tprop = {
  ong: "oga" | "language",
  name: string;
  email: string;
  phone: string;
  job: string;
  pronoun: string;
  sizeName: number;
  sizeJob: number;
  sizePhone: number;
  sizePronoun: number;
  sizeLogo: number;
  sizeNetworks: number;
} 

export default function Signature1({ong, name, email, phone, job, pronoun, sizeName, sizeJob, sizePhone, sizePronoun, sizeLogo, sizeNetworks}: Tprop) {
    const [networksOAG] = useAtom(networksOGAAtom)
    const [networksJustice] = useAtom(networksJusticeAtom)
    const [networks] = useState([])
    

  return (
    <div>
        <table cellPadding={0} cellSpacing={0} style={{fontFamily: "'Atkinson Hyperlegible', sans-serif", fontSize: '18px'}}>
          <tbody>
            <tr>
                <td style={{paddingRight: '25px'}}>
                    <span style={{fontSize: `${sizeName}px`}} className={`name ${name ? 'block' : 'hidden'}`}>{name}</span>
                    <span style={{fontSize: `${sizePronoun}px`}} className={`pronoun ${pronoun ? 'block' : 'hidden'}`}>({pronoun})</span>
                    <span style={{fontSize: `${sizeJob}px`}} className={`job ${job ? 'block' : 'hidden'}`}>{job}</span>                    
                    <span style={{fontSize: `${sizePhone}px`}} className={`phone ${phone ? 'block' : 'hidden'}`}>{phone}</span>
                    <span>
                        <table>
                            <tbody>
                            <tr>
                                {
                                networks.map((x: any, i: number) => {
                                  return (                                   
                                    <td key={i}>
                                      <a target="_blank" className="icon-redes" key={x.uri} href={x.uri}>
                                        <img width={sizeNetworks} alt="logo" src={x.image} />
                                      </a>                                                
                                    </td>                               
                                  )
                                })
                                }
                            </tr>
                            </tbody>
                        </table>                 
                    </span>                    
                </td>
                <td className="container-division"></td>
                <td style={{paddingLeft: '25px'}}>
                  <a href="https://ogaweb.org/" target="_blank">
                    <img width={sizeLogo} src={ong == 'oga' ? 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764621984/OGA/cropped-white-background_bzsb2h_mizr0o.png' : 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764664826/LANGUAGE-FOR-JUSTICE/logo_tfix4z.png'} alt="" />
                  </a>
                  <span className="email">{email}</span>
                </td>             
            </tr>
          </tbody>                   
         </table>     
    </div>
  )
}