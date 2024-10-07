export const BentoGrid = ({ children }) => (
  <div className="grid grid-cols-3 gap-4 p-4">{children}</div>
);

export const BentoItem = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>{children}</div>
);
