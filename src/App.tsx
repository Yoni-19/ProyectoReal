import { useState } from 'react'

function App() {
  // 1. Definimos el estado con TypeScript indicando que es un número <number>
  const [valor, setValor] = useState<number>(5);

  // 2. Funciones para controlar la lógica
  const aumentar = () => {
    setValor(valor + 1);
  };

  const disminuir = () => {
    setValor(valor - 1);
  };

  return (
    <main style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contador</h1>

      {/* 3. El input ahora está "controlado" por el estado */}
      <input 
        type="text" 
        value={valor} 
        readOnly // Lo ponemos readOnly porque la edición se hace mediante botones
      />

      {/* 4. Vinculamos las funciones a los eventos onClick */}
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </main>
  );
}

export default App;
