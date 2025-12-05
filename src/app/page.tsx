"use client";

import { useEffect, useState, useRef } from "react";
import Signature1 from "../components/Signature1/Signature1";
import Signature2 from "../components/Signature2/Signature2";



export default function Home() {
  const [ong, setOng] = useState<"oga" | "language">("oga");
  const [typeModel, setTypeModel] = useState<string>("1");
  const [name, setName] = useState<string>("Anna Ferreira");
  const [job, setJob] = useState<string>("Co-Founder & President");
  const [phone, setPhone] = useState<string>("+34 691 377 424");
  const [email, setEmail] = useState<string>("");
  const [pronoun, setPronoun] = useState<string>("she/her");
  const [sizeIcon, setSizeIcon] = useState(20);
  const [component, setComponent] = useState("");
  const [sizeName, setSizeName] = useState(16);
  const [sizeJob, setSizeJob] = useState(15);
  const [sizePhone, setSizePhone] = useState(15);
  const [sizeEmail, setSizeEmail] = useState(15);
  const [sizePronoun, setSizePronoun] = useState(15);
  const [sizeLogo, setSizeLogo] = useState(90);
  const [sizeLogo2, setSizeLogo2] = useState(400);
  const main = useRef<HTMLDivElement>(null);


  useEffect(() => {
    main.current?.setAttribute("data-ong", ong);
  }, [ong]);

  const changeSize = (e: any) => {
    const size = parseInt(e)
    switch(component) {
      case "name": setSizeName(size); break;
      case "job": setSizeJob(size); break;
      case "phone": setSizePhone(size); break;
      case "email": setSizeEmail(size); break;
      case "pronum": setSizePronoun(size); break;
      case "logo": setSizeLogo(size); break;
      case "logo2": setSizeLogo2(size); break;
    }
  }
  
  return (
    <main ref={main} className="main">
        <form className="form">
          <div className="group">
            <label htmlFor="ong">ONG</label>
            <select onChange={(e: any) => setOng(e.target.value)} name="ong" id="ong">
              <option value="oga">OGA</option>
              <option value="language">Language For Justice</option>
            </select>
          </div>

          <div className="group">
            <label htmlFor="typeModel">Modelo</label>
            <select onChange={(e: any) => setTypeModel(e.target.value)} name="typeModel" id="typeModel">
              <option value="1">Assinatura 1</option>
              <option value="2">Assinatura 2</option>
            </select>
          </div>
          
          <div className="group">
            <label htmlFor="name">Nome</label>
            <input value={name} onInput={(e: any) => setName(e.target.value)} placeholder="Digite o nome" id="name" type="text"/>
          </div>
          
          {
            typeModel == "2" &&
            <div className="group">
              <label htmlFor="pronoun">Pronome</label>
              <input value={pronoun} onInput={(e: any) => setPronoun(e.target.value)} placeholder="Digite o pronome" id="pronoun" type="text"/>
            </div>
          }

          <div className="group">
            <label htmlFor="job">Cargo</label>
            <input value={job} onInput={(e: any) => setJob(e.target.value)} placeholder="Digite o cargo" id="job" type="text"/>
          </div>

          <div className="group">
            <label htmlFor="phone">Telefone</label>
            <input value={phone} onInput={(e: any) => setPhone(e.target.value)} placeholder="Digite o telefone" id="phone" type="text"/>
          </div>

          <div className="group">
            <label htmlFor="email">E-mail</label>
            <input value={email} onInput={(e: any) => setEmail(e.target.value)} placeholder="Digite o e-mail" id="email" type="text"/>
          </div>            
        </form>
        
        <div className="container-style">
          <h1 className="title">Estilizar</h1>

          <form className="grid grid-cols-3 gap-4">
            <div className="group">
              <label htmlFor="component">Componente</label>
              <select onChange={(e: any) => setComponent(e.target.value)} name="component" id="component">
                <option value="">Selecione</option>
                <option value="name">Nome</option>
                <option value="pronoun">Pronome</option>
                <option value="job">Cargo</option>
                <option value="phone">Telefone</option>
                <option value="email">E-mail</option>
                <option value="logo">Logo</option>
                {
                  ong == "oga" &&
                  <option value="logo2">Imagem</option>
                }
              </select>
            </div>

            {
              component != "" &&
              <div className="group">
                <label>Tamanho Texto</label>
                <input onInput={(e: any) => changeSize(e.target.value)} placeholder="Digite o tamanho" type="text"/>
              </div>
            }
          </form>
        </div>       

        <div className="container-signature">
          {
            typeModel == "1" ? 
            <Signature1 
              ong={ong} name={name} email={email} phone={phone} job={job} 
              sizeIcon={sizeIcon} 
              sizeName={sizeName}
              sizeJob={sizeJob}
              sizePhone={sizePhone}
              sizeLogo={sizeLogo}
              sizeLogo2={sizeLogo2}
            />           
            :
            <Signature2 
            ong={ong} name={name} email={email} phone={phone} job={job} pronoun={pronoun} 
            sizeIcon={sizeIcon}
            sizeName={sizeName}
            sizeJob={sizeJob}
            sizePhone={sizePhone}
            sizeLogo={sizeLogo}
            sizePronoun={sizePronoun}
            />           
          }
        </div>
    </main>
  );
}
