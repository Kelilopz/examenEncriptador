
import './App.css'

function App() {
  return (
    <>
      <div className='Contenedor'>
        <div className='Logo'>
          <img src="/Logo.png" alt="" />
        </div>
        <div className='Contenedor_Cuerpo'>
        <div className='Contenedor_Entrante'>
        <div className='Contenedor_Texto'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem temporibus fugit sint accusamus reiciendis optio aut sed ea, excepturi omnis distinctio quis labore dolorem corrupti quasi unde soluta sapiente voluptates!</p>
        </div>
        <div className='Alerta'>
          <img src="/IconoExclamacion.png" alt="" />
          <p>Solo letras minusculas y sin acentos</p>        </div>

          <div className='Botones'>
          <a className='BotonEncriptar' href=""><button>Encriptar</button></a>
            <a className='BotonDesencriptar' href=""><button>Desencriptar</button></a>
          </div>
          </div>
      <div className='ContenedorRespuesta'>
        <img src="/Muñeco.png" alt="" />
        <h2>Ningun mensaje fue encontrado</h2>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
