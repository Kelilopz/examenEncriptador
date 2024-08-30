
import './App.css'

function App() {
  return (
    <>
      <div className='Contenedor'>
        <div className='Logo'>
          <img src="/Logo.png" alt="" />
        </div>

        <div className='Contenedo_Texto'>
          <p>ingrese el texto aqui</p>
        </div>
        <div className='Alerta'>
          <img src="/IconoExclamacion.png" alt="" />
          <p>Solo letras minusculas y sin acentos</p>        </div>

          <div className='Botones'>
          <a className='BotonEncriptar' href=""><button>Encriptar</button></a>
            <a className='BotonDesencriptar' href=""><button>Desencriptar</button></a>
          </div>
      
      <div className='ContenedorRespuesta'>
        <img src="/Muñeco.png" alt="" />
        <h2>Ningun mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
      </div>
      </div>
    </>
  )
}

export default App
