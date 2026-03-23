import React, { useEffect, useState } from 'react';

function generatePixCode(price) {
  return `00020101021126330014br.gov.bcb.pix0111095954336835204000053039865802BR5919VICTOR M R OLIVEIRA6006SABARA62070503***6304B115`;
}

export default function PixModal({ open, onOpenChange, giftName, price }) {
  const [copied, setCopied] = useState(false);
  const [pixCode, setPixCode] = useState('');

  useEffect(() => {
    if (open) {
      setPixCode(generatePixCode(price));
      setCopied(false);
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
          <span className='pix-note'>Imagem e valor simbólico. Sinta-se à vontade para escolher um valor.</span>
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
