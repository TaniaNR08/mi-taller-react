import React, { useRef } from 'react';

const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nombre: ${nameRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h2>Formulario</h2>
      <input type="text" placeholder="Nombre" ref={nameRef} />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UncontrolledForm;