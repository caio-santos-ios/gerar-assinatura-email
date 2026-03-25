"use client";

import { useEffect, useState, useRef } from "react";
import Signature1 from "../components/Signature1/Signature1";
import Signature2 from "../components/Signature2/Signature2";
import SignatureRaizes from "../components/SignatureRaizes/SignatureRaizes";
import { TOng } from "../types/signature.type";

export default function Home() {
  const [ong, setOng] = useState<TOng>("oga");
  const [typeModel, setTypeModel] = useState<string>("1");
  const [name, setName] = useState<string>("Anna Ferreira");
  const [job, setJob] = useState<string>("Co-Founder & President");
  const [phone, setPhone] = useState<string>("+34 691 377 424");
  const [email, setEmail] = useState<string>("");
  const [pronoun, setPronoun] = useState<string>("she/her");
  const [component, setComponent] = useState("");
  const [sizeName, setSizeName] = useState(16);
  const [sizeJob, setSizeJob] = useState(15);
  const [sizePhone, setSizePhone] = useState(15);
  const [sizeEmail, setSizeEmail] = useState(15);
  const [sizePronoun, setSizePronoun] = useState(15);
  const [sizeLogo, setSizeLogo] = useState(90);
  const [sizeLogo2, setSizeLogo2] = useState(400);
  const [sizeNetworks, setSizeNetworks] = useState(15);
  const main = useRef<HTMLDivElement>(null);

  useEffect(() => {
    main.current?.setAttribute("data-ong", ong);
  }, [ong]);

  const changeSize = (e: any) => {
    const size = parseInt(e);
    switch (component) {
      case "name": setSizeName(size); break;
      case "job": setSizeJob(size); break;
      case "phone": setSizePhone(size); break;
      case "email": setSizeEmail(size); break;
      case "pronum": setSizePronoun(size); break;
      case "logo": setSizeLogo(size); break;
      case "logo2": setSizeLogo2(size); break;
      case "networks": setSizeNetworks(size); break;
    }
  };

  const currentSize = () => {
    switch (component) {
      case "name": return sizeName;
      case "job": return sizeJob;
      case "phone": return sizePhone;
      case "email": return sizeEmail;
      case "pronum": return sizePronoun;
      case "logo": return sizeLogo;
      case "logo2": return sizeLogo2;
      case "networks": return sizeNetworks;
      default: return "";
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #f5f3ef;
          font-family: 'DM Sans', sans-serif;
          color: #1a1a18;
          min-height: 100vh;
        }

        .page-wrapper {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 380px 1fr;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          background: #1a1a18;
          color: #f5f3ef;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          scrollbar-width: none;
        }
        .sidebar::-webkit-scrollbar { display: none; }
        
        .sidebar-header {
          padding: 36px 32px 28px;
          border-bottom: 1px solid rgba(245,243,239,0.1);
        }

        .sidebar-header .eyebrow {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245,243,239,0.4);
          margin-bottom: 8px;
          font-weight: 500;
        }

        .sidebar-header h1 {
          font-family: 'DM Serif Display', serif;
          font-size: 26px;
          line-height: 1.2;
          font-weight: 400;
          color: #f5f3ef;
        }

        .sidebar-header h1 em {
          font-style: italic;
          color: #c9b99a;
        }

        .sidebar-body {
          padding: 28px 32px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .sidebar-body::-webkit-scrollbar {
          width: 3px;
        }
        .sidebar-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .sidebar-body::-webkit-scrollbar-thumb {
          background: rgba(201,185,154,0.25);
          border-radius: 100px;
        }
        .sidebar-body:hover::-webkit-scrollbar-thumb {
          background: rgba(201,185,154,0.55);
        }

        .section-label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,243,239,0.35);
          font-weight: 600;
          margin-bottom: 14px;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: rgba(245,243,239,0.5);
          text-transform: uppercase;
        }

        .field input,
        .field select {
          background: rgba(245,243,239,0.06);
          border: 1px solid rgba(245,243,239,0.12);
          border-radius: 8px;
          padding: 10px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          color: #f5f3ef;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
        }

        .field select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23a09070' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 32px;
          cursor: pointer;
        }

        .field select option {
          background: #2a2a26;
          color: #f5f3ef;
        }

        .field input::placeholder {
          color: rgba(245,243,239,0.2);
        }

        .field input:focus,
        .field select:focus {
          border-color: #c9b99a;
          background: rgba(201,185,154,0.08);
        }

        .divider {
          height: 1px;
          background: rgba(245,243,239,0.08);
        }

        /* Style section inside sidebar */
        .style-section {
          background: rgba(245,243,239,0.04);
          border: 1px solid rgba(245,243,239,0.08);
          border-radius: 12px;
          padding: 18px;
        }

        .style-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-items: end;
        }

        .size-display {
          font-size: 11px;
          color: rgba(245,243,239,0.4);
          margin-top: 4px;
          text-align: right;
        }

        /* ── PREVIEW AREA ── */
        .preview-area {
          background: #f5f3ef;
          display: flex;
          flex-direction: column;
          padding: 48px;
        }

        .preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
        }

        .preview-header .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #1a1a18;
          color: #f5f3ef;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          padding: 6px 12px 6px 10px;
          border-radius: 100px;
        }

        .preview-header .badge::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #7ec98c;
          border-radius: 50%;
          display: block;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        .preview-title {
          font-family: 'DM Serif Display', serif;
          font-size: 13px;
          color: #888;
          font-weight: 400;
        }

        .preview-canvas {
          flex: 1;
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e4e0d8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 56px;
          box-shadow: 0 2px 24px rgba(26,26,24,0.06), 0 1px 4px rgba(26,26,24,0.04);
          min-height: 320px;
          position: relative;
          overflow: hidden;
        }

        .preview-canvas::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 23px,
            rgba(0,0,0,0.025) 23px,
            rgba(0,0,0,0.025) 24px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 23px,
            rgba(0,0,0,0.025) 23px,
            rgba(0,0,0,0.025) 24px
          );
          pointer-events: none;
        }

        .preview-canvas > * {
          position: relative;
          z-index: 1;
        }

        .preview-hint {
          position: absolute;
          bottom: 16px;
          right: 20px;
          font-size: 11px;
          color: rgba(26,26,24,0.3);
          letter-spacing: 0.04em;
          font-weight: 500;
          pointer-events: none;
          z-index: 2;
        }

        /* ONG chips */
        .ong-chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .chip {
          padding: 7px 14px;
          border-radius: 100px;
          border: 1px solid rgba(245,243,239,0.15);
          font-size: 12px;
          font-weight: 500;
          color: rgba(245,243,239,0.55);
          cursor: pointer;
          transition: all 0.18s;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
        }

        .chip:hover {
          border-color: rgba(201,185,154,0.5);
          color: #c9b99a;
        }

        .chip.active {
          background: #c9b99a;
          border-color: #c9b99a;
          color: #1a1a18;
        }

        /* Model chips */
        .model-chips {
          display: flex;
          gap: 6px;
        }

        .model-chip {
          flex: 1;
          padding: 8px;
          border-radius: 8px;
          border: 1px solid rgba(245,243,239,0.1);
          font-size: 12px;
          font-weight: 500;
          color: rgba(245,243,239,0.45);
          cursor: pointer;
          transition: all 0.18s;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          text-align: center;
        }

        .model-chip:hover {
          border-color: rgba(201,185,154,0.4);
          color: rgba(245,243,239,0.8);
        }

        .model-chip.active {
          background: rgba(201,185,154,0.15);
          border-color: rgba(201,185,154,0.5);
          color: #c9b99a;
        }

        @media (max-width: 900px) {
          .page-wrapper {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: relative;
            height: auto;
            min-height: unset;
          }
          .preview-area {
            padding: 24px;
          }
        }
      `}</style>

      <div className="page-wrapper" ref={main} data-ong={ong}>
        {/* ── SIDEBAR ── */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <p className="eyebrow">Gerador de Assinaturas</p>
            <h1>Email <em>Signature</em><br />Builder</h1>
          </div>

          <div className="sidebar-body max-h-[calc(100dvh-10rem)] overflow-y-auto">
            {/* ONG */}
            <div>
              <p className="section-label">Organização</p>
              <div className="ong-chips">
                {[
                  { value: "oga", label: "OGA" },
                  { value: "language", label: "Language for Justice" },
                  { value: "raizes", label: "Raízes" },
                ].map((o) => (
                  <button
                    key={o.value}
                    className={`chip ${ong === o.value ? "active" : ""}`}
                    onClick={() => setOng(o.value as TOng)}
                    type="button"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Model */}
            <div>
              <p className="section-label">Modelo</p>
              <div className="model-chips">
                <button
                  className={`model-chip ${typeModel === "1" ? "active" : ""}`}
                  onClick={() => setTypeModel("1")}
                  type="button"
                >
                  Assinatura 1
                </button>
                <button
                  className={`model-chip ${typeModel === "2" ? "active" : ""}`}
                  onClick={() => setTypeModel("2")}
                  type="button"
                >
                  Assinatura 2
                </button>
              </div>
            </div>

            <div className="divider" />

            {/* Fields */}
            <div>
              <p className="section-label">Dados Pessoais</p>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="name">Nome</label>
                  <input
                    value={name}
                    onInput={(e: any) => setName(e.target.value)}
                    placeholder="Digite o nome"
                    id="name"
                    type="text"
                  />
                </div>

                {typeModel === "2" && (
                  <div className="field">
                    <label htmlFor="pronoun">Pronome</label>
                    <input
                      value={pronoun}
                      onInput={(e: any) => setPronoun(e.target.value)}
                      placeholder="ex: she/her"
                      id="pronoun"
                      type="text"
                    />
                  </div>
                )}

                <div className="field">
                  <label htmlFor="job">Cargo</label>
                  <input
                    value={job}
                    onInput={(e: any) => setJob(e.target.value)}
                    placeholder="Digite o cargo"
                    id="job"
                    type="text"
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    value={phone}
                    onInput={(e: any) => setPhone(e.target.value)}
                    placeholder="+55 (11) 99999-9999"
                    id="phone"
                    type="text"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <input
                    value={email}
                    onInput={(e: any) => setEmail(e.target.value)}
                    placeholder="nome@org.com"
                    id="email"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="divider" />

            <div>
              <p className="section-label">Estilizar</p>
              <div className="style-section">
                <div className="style-row">
                  <div className="field">
                    <label>Componente</label>
                    <select
                      onChange={(e: any) => setComponent(e.target.value)}
                      value={component}
                    >
                      <option value="">Selecione</option>
                      <option value="name">Nome</option>
                      <option value="pronoun">Pronome</option>
                      <option value="job">Cargo</option>
                      <option value="phone">Telefone</option>
                      <option value="email">E-mail</option>
                      <option value="logo">Logo</option>
                      {(ong === "oga" || ong === "raizes") && (
                        <option value="logo2">Imagem</option>
                      )}
                      <option value="networks">Redes Sociais</option>
                    </select>
                  </div>

                  {component !== "" && (
                    <div className="field">
                      <label>Tamanho</label>
                      <input
                        value={currentSize()}
                        onInput={(e: any) => changeSize(e.target.value)}
                        placeholder="px"
                        type="number"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="preview-area">
          <div className="preview-header">
            <span className="preview-title">Pré-visualização</span>
            <span className="badge">Ao vivo</span>
          </div>

          <div className="preview-canvas">
            {ong === "raizes" && (
              <SignatureRaizes
                ong={ong} name={name} email={email} phone={phone} job={job} pronoun={pronoun}
                sizeName={sizeName} sizeJob={sizeJob} sizePhone={sizePhone}
                sizeLogo={sizeLogo} sizePronoun={sizePronoun} sizeNetworks={sizeNetworks}
              />
            )}
            {ong !== "raizes" && typeModel === "1" && (
              <Signature1
                ong={ong} name={name} email={email} phone={phone} job={job}
                sizeName={sizeName} sizeJob={sizeJob} sizePhone={sizePhone}
                sizeLogo={sizeLogo} sizeLogo2={sizeLogo2} sizeNetworks={sizeNetworks}
              />
            )}
            {ong !== "raizes" && typeModel === "2" && (
              <Signature2
                ong={ong} name={name} email={email} phone={phone} job={job} pronoun={pronoun}
                sizeName={sizeName} sizeJob={sizeJob} sizePhone={sizePhone}
                sizeLogo={sizeLogo} sizePronoun={sizePronoun} sizeNetworks={sizeNetworks}
              />
            )}
            <span className="preview-hint">Prévia em tempo real</span>
          </div>
        </main>
      </div>
    </>
  );
}