export default function Suggestions({ suggestion , handleClick}) {
  return (
        <ul className="suggestions">
        {
        suggestion && suggestion.length> 0 
            ? suggestion.map((suggestion, index) => (
                <li 
                    key={index}
                    onClick={handleClick}
                >
                    {suggestion}
                </li>
            ))
            : null
        }
        </ul>
  );
}