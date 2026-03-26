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

export default function SignatureRaizes({ name, email, phone, job, pronoun, sizeName, sizeJob, sizePhone, sizePronoun, sizeLogo, sizeNetworks }: Tprop) {
  const [networks] = useAtom(networksRaizesAtom)

  return (
    <div>
      <table cellPadding={0} cellSpacing={0} style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif" }}>
        <tbody>
          <tr>

            {/* ── COLUNA ESQUERDA ── */}
            <td style={{ paddingRight: '25px', verticalAlign: 'top' }}>

              {/* Nome */}
              {name && (
                <div style={{
                  fontSize: `${sizeName}px`,
                  fontWeight: 'bold',
                  color: '#E8A020',
                  whiteSpace: 'nowrap',
                  textAlign: 'end'
                }}>
                  {name}
                </div>
              )}

              {/* Pronome */}
              {pronoun && (
                <div style={{
                  fontSize: `${sizePronoun}px`,
                  fontStyle: 'italic',
                  color: '#E8A020',
                  textAlign: 'right',
                }}>
                  ({pronoun})
                </div>
              )}

              {/* Cargo */}
              {job && (
                <div style={{
                  fontSize: `${sizeJob}px`,
                  color: '#444444',
                  textAlign: 'end',
                  marginTop: '2px',
                }}>
                  {job}
                </div>
              )}

              {/* Ícones redes sociais */}
              <table cellPadding={0} cellSpacing={0} style={{ marginTop: '10px', width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <table cellPadding={0} cellSpacing={0} style={{ marginLeft: 'auto' }}>
                        <tbody>
                          <tr>
                            {networks.map((x: any, i: number) => (
                              <td key={i} style={{ paddingRight: '4px' }}>
                                <a target="_blank" href={x.uri}>
                                  <img width={sizeNetworks} alt="rede social" src={x.image} />
                                </a>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Site */}
              {/* <div style={{ marginTop: '8px', textAlign: 'end' }}>
                
                <a  href="https://www.raizesds.com.br"
                  target="_blank"
                  style={{
                    fontSize: `${sizeJob}px`,
                    color: '#444444',
                    textDecoration: 'underline',
                    textAlign: 'end'
                  }}
                >
                  www.raizesds.com.br
                </a>
              </div> */}
            </td>

            {/* ── DIVISOR ── */}
            <td style={{
              borderLeft: '2px solid #8B1A1A',
              paddingLeft: '0',
              width: '2px',
            }} />

            {/* ── COLUNA DIREITA ── */}
            <td style={{ paddingLeft: '25px', verticalAlign: 'top' }}>

              {/* Logo */}
              <div style={{ marginBottom: '12px' }}>
                <a href="https://raizesds.com.br/pt/" target="_blank">
                  <img
                    width={sizeLogo}
                    src="https://res.cloudinary.com/dupjcwozv/image/upload/v1774463627/WhatsApp_Image_2026-03-25_at_12.13.08__1_-removebg-preview_rwxjfl.png"
                    alt="Raízes logo"
                  />
                </a>
              </div>

              {/* Telefone */}
              {phone && (
                <div style={{
                  fontSize: `${sizePhone}px`,
                  fontWeight: 'bold',
                  color: '#2A9D8F',
                  whiteSpace: 'nowrap',
                }}>
                  {phone}
                </div>
              )}

              {/* Email */}
              {email && (
                <div style={{ marginTop: '4px' }}>
                  
                    <a href={`mailto:${email}`}
                    style={{
                      fontSize: `${sizePhone}px`,
                      fontWeight: 'bold',
                      color: '#2A7ABF',
                      textDecoration: 'underline',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {email}
                  </a>
                </div>
              )}
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}