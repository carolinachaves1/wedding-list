import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1>Lista de Presentes</h1>
        <nav aria-label="main navigation">
          <a href="#presentes" style={{ marginRight: 12 }}>Presentes</a>
          <a href="#informacoes">Informações</a>
        </nav>
      </div>
    </header>
  );
}
