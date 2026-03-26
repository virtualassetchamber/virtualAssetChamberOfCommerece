import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-32">
          <h2 className="text-primary font-bold text-xl tracking-tight mb-8 font-(family-name:--font-poppins)">
            V.A.C.C.
          </h2>
          <p className="max-w-xs text-text-secondary/70 text-sm leading-relaxed font-(family-name:--font-inter)">
            The Virtual Asset Chamber of Commerce is dedicated to establishing the global standard for digital assets across the African continent.
          </p>
        </div>

        <div className="pt-8 border-t border-border/30">
          <p className="text-text-secondary/70  text-sm opacity-80 font-(family-name:--font-inter)">
            © {currentYear} Virtual Asset Chamber of Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;