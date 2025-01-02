interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
  }
  
  const Card = ({ title, children, className = '' }: CardProps) => {
    return (
      <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
        {title && (
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </div>
    );
  };
  
  export default Card;