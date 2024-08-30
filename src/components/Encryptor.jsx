import React, { useState } from 'react';
import './Encryptor.css';

const Encryptor = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isOutputVisible, setIsOutputVisible] = useState(false);

  const encryptText = (text) => text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
  const decryptText = (text) => text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  const validateInput = (text) => /^[a-z\s]*$/.test(text);

  const Encriptar = () => {
    if (validateInput(inputText)) {
      setOutputText(encryptText(inputText));
      setIsOutputVisible(true);
    } else {
      alert('Solo letras minúsculas sin acentos.');
    }
  };

  const Desncriptar = () => {
    if (validateInput(inputText)) {
      setOutputText(decryptText(inputText));
      setIsOutputVisible(true);
    } else {
      alert('Solo letras minúsculas y sin acentos.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText).then(() => alert('Texto copiado'));
  };

  return (
    <>
      <header>
        <div className="contenedor_principal">
          <img className="logo" src="/logo.png" alt="" />
        </div>
      </header>
      <main>
        <div className="body">
          <form id="myForm">
            <textarea 
              name="chain" 
              value={inputText} 
              onChange={(e) => setInputText(e.target.value)} 
              placeholder="Ingrese el texto aquí" 
            />
            <div className="condicional">
              <div className="mensaje">
                <img src="/IconoExclamacion.png" alt="" />
                <small>Solo letras minúsculas y sin acentos</small>
              </div>
              <div className="boton_orden">
                <button type="button" onClick={Encriptar}>Encriptar</button>
                <button type="button" onClick={Desncriptar}>Desencriptar</button>
              </div>
            </div>
          </form>
        </div>
        <div className={`main ${isOutputVisible ? 'active' : ''}`}>
          <article className={`resultado ${isOutputVisible ? 'active' : ''}`}>
            <img src="/Muñeco.png" alt="Decorative" />
            <h1>{outputText ? 'Mensaje Encontrado' : 'Ningún mensaje fue encontrado'}</h1>
            <p>{outputText || 'Ingresa el texto que desees encriptar o desencriptar.'}</p>
          </article>
          {outputText && (
            <article className={`resultado__menssage ${isOutputVisible ? 'active' : ''}`}>
              <p>{outputText}</p>
              <button id="copy" onClick={handleCopy}>Copiar</button>
            </article>
          )}
        </div>
      </main>
    </>
  );
};

export default Encryptor;