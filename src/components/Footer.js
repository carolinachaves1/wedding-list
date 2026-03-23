import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} Nosso Casamento — Obrigado pela visita!</p>
        <small>Feito com ♥ para nossa lista de presentes</small>
      </div>
    </footer>
  );
}
