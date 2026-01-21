import { useState } from 'react'
import './App.css'


function App() {

  const [valor, setValor] = useState<number>(0);

  const [inputValue, setInputValue] = useState<string>('');
  const [url, setUrl] = useState<string>('');


  const aumentar = () => setValor(valor + 1);
  const disminuir = () => setValor(valor - 1);
  const resetear = () => setValor(0);




  const enviar = async () => {

    if (inputValue.trim() !== '') {

      try {
        const response = await fetch('http://localhost:3000/counter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ valor: inputValue }),
        });

        if (response.ok) {  

          const data = await response.json();

          // console.log(data.valorDuplicado);
          // console.log(data.pokemon);
          // console.log(data.pokemon.sprites.front_default);
          
          let enlace = data.pokemon.sprites.front_default;
          setUrl(enlace);

          setValor(data.valorDuplicado);


          setInputValue('');

        } else {
          console.error('Error en la respuesta del servidor');
        }
      } catch (error) {
        console.error('Error al enviar datos:', error);
      }
    }
  };

  return (
    <main className="container">
      <div className="card">
        <h1 className="title">Contador</h1>
        
        <div className="display">
          <span className="counter-value">{valor}</span>
        </div>

        <div className="input-group">
          <input 
            type="number" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingresa un número"
            className="input"
          />
          <button className="btn btn-submit" onClick={enviar}>Enviar</button>
        </div>

        <div className="button-group">
          <button className="btn btn-secondary" onClick={disminuir}>−</button>
          <button className="btn btn-primary" onClick={aumentar}>+</button>
          <button className="btn btn-reset" onClick={resetear}>Reiniciar</button>
          <img src={url} alt="" />
        </div>
      </div>
    </main>
  );
}

export default App;
