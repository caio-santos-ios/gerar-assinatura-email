"use client";

import { networksRaizesAtom, TNetworks } from "@/src/jotai/networks.jotai"
import { TOng } from "@/src/types/signature.type";
import { useAtom } from "jotai"

type Tprop = {
  ong: TOng,
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

export default function SignatureRaizes({name, email, phone, job, pronoun, sizeName, sizeJob, sizePhone, sizePronoun, sizeLogo, sizeNetworks}: Tprop) {
  const [networks] = useAtom(networksRaizesAtom)

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
                <a href="https://raizes.org/" target="_blank">
                  <img width={sizeLogo} src="https://res.cloudinary.com/dupjcwozv/image/upload/v1774463627/WhatsApp_Image_2026-03-25_at_12.13.08__1_-removebg-preview_rwxjfl.png" alt="" />
                </a>
                <span className="email">{email}</span>
              </td>             
            </tr>
          </tbody>                   
        </table>     
    </div>
  )
}
