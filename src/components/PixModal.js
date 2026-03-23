import React, { useEffect, useState } from 'react';

function generatePixCode(price) {
  // Simple client-side pseudo Pix code generator
  const token = Math.random().toString(36).slice(2, 10).toUpperCase();
  const value = Number(price).toFixed(2).replace('.', '');
  return `00020126580014br.gov.bcb.pix01${token}5204000053039865404${value}5802BR5925LISTA DE CASAMENTO6009SAO PAULO62070503***6304`;
}

export default function PixModal({ open, onOpenChange, giftName, price }) {
  const [copied, setCopied] = useState(false);
  const [pixCode, setPixCode] = useState('');

  useEffect(() => {
    if (open) {
      setPixCode(generatePixCode(price));
      setCopied(false);
      // prevent body scroll when modal open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, price]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      console.error('Clipboard copy failed', e);
    }
  };

  if (!open) return null;

  return (
    <div className="pix-modal-overlay" onMouseDown={() => onOpenChange(false)}>
      <div className="pix-modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="pix-close" aria-label="Fechar" onClick={() => onOpenChange(false)}>×</button>

        <header className="pix-header">
          <h3>Presentear com {giftName}</h3>
          <div className="pix-price">{Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
        </header>

        <div className="pix-body">
          <div className="pix-code-box">
            <div className="pix-code-label">CÓDIGO PIX COPIA E COLA</div>
            <pre className="pix-code">{pixCode}</pre>
          </div>

          <button className={`pix-copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
            {copied ? 'Código Copiado!' : '📋 Copiar Código'}
          </button>

          <div className="pix-instructions">
            <div className="pix-instr-icon">📱</div>
            <p>
              Após copiar o código, abra o <strong>aplicativo do seu banco</strong>, vá na opção <strong>Pix → Pagar com Copia e Cola</strong> e cole o código para realizar o pagamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
