import React, { useState } from 'react';
import PixModal from './PixModal';

export default function PresentCard({ name, price, emoji }) {
  const [open, setOpen] = useState(false);
  const formatted = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <>
      <div className="present-card">
        <div className="present-emoji" aria-hidden>
          {emoji}
        </div>
        <h3 className="present-name">{name}</h3>
        <p className="present-price">{formatted}</p>
        <button className="btn-present" aria-label={`Presentear ${name}`} onClick={() => setOpen(true)}>
          🎁 Presentear
        </button>
      </div>

  <PixModal open={open} onOpenChange={setOpen} giftName={name} price={price} />
    </>
  );
}
