import { networksJusticeAtom, networksOGAAtom, networksRaizesAtom, TNetworks } from "@/src/jotai/networks.jotai"
import { TOng } from "@/src/types/signature.type";
import { useAtom } from "jotai"
import { useEffect, useState } from "react";

type Tprop = {
  ong: TOng,
  name: string;
  email: string;
  phone: string;
  job: string;
  sizeName: number;
  sizeJob: number;
  sizePhone: number;
  sizeLogo2: number;
  sizeLogo: number;
  sizeNetworks: number;
} 

export default function Signature1({ong, name, email, phone, job, sizeName, sizeJob, sizePhone, sizeLogo, sizeLogo2, sizeNetworks}: Tprop) {
  const [networksOAG] = useAtom(networksOGAAtom)
  const [networksJustice] = useAtom(networksJusticeAtom)
  const [networksRaizes] = useAtom(networksRaizesAtom)
  const [networks, setNetworks] = useState<TNetworks[]>([])

  useEffect(() => {
    if(ong == "oga") {
      setNetworks(networksOAG)
    } else if(ong == "raizes") {
      setNetworks(networksRaizes)
    } else {
      setNetworks(networksJustice)
    }
  }, [ong])

  const logoSrc = ong == 'oga'
    ? 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764621984/OGA/cropped-white-background_bzsb2h_mizr0o.png'
    : ong == 'raizes'
    ? 'URL_DA_LOGO_RAIZES' // TODO: substituir pela URL real
    : 'https://res.cloudinary.com/dia2yiu6k/image/upload/v1764664826/LANGUAGE-FOR-JUSTICE/logo_tfix4z.png'

  return (
    <div>
      <table cellPadding={0} cellSpacing={0} style={{fontFamily: "'Atkinson Hyperlegible', sans-serif", fontSize: '18px'}}>
          <tbody>
            <tr>
              <td>
                <span style={{fontSize: `${sizeName}px`}} className={`name ${name ? 'block' : 'hidden'}`}>{name}</span>
                <span style={{fontSize: `${sizeJob}px`}} className={`job ${job ? 'block' : 'hidden'}`}>{job}</span>
                <span style={{fontSize: `${sizePhone}px`}} className={`phone ${phone ? 'block' : 'hidden'}`}>{phone}</span>
              </td>
              <td style={{padding: '0 25px'}}>
                <a href="https://ogaweb.org/" target="_blank">
                  <img width={sizeLogo} src={logoSrc} alt="" />
                </a>
              </td>

              <td>                                                        
                <table>
                    <tbody>
                      <tr>
                        {
                          networks.map((x: any, i: number) => {
                            return (  
                              i < 3 &&       
                              <td key={i}>
                                <a target="_blank" className="icon-redes" key={x.uri} href={x.uri}>
                                  <img width={sizeNetworks} alt="logo" src={x.image} />
                                </a>                                                
                              </td>                               
                            )
                          })
                        }
                      </tr>
                      <tr>
                        {
                          networks.map((x: any, i: number) => {
                            return (         
                              i > 2 &&     
                              <td key={i} style={{marginRight: '3px'}}>
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
              </td>             
            </tr>
          </tbody>                   
      </table>     

      <table style={{fontFamily: "'Atkinson Hyperlegible', sans-serif", fontSize: '18px'}}>
          <tbody>
            <tr style={{width: '600px'}}>
              {
                (ong == "oga" || ong == "raizes") &&
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            width={sizeLogo2}
                            className="imagem"
                            src={
                              ong == "oga"
                                ? "https://res.cloudinary.com/dia2yiu6k/image/upload/v1764329437/OGA/OGA_Opportunities_for_Grassroots_Action_gfmova.png"
                                : "URL_DA_IMAGEM_RAIZES" // TODO: substituir pela URL real
                            }
                            alt="imagem"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              }      
            </tr>
          </tbody>                   
      </table>           
    </div>
  )
}
