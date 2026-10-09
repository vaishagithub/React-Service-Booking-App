import "./SearchBar.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search services...",
}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />

      {value && (
        <button onClick={() => onChange("")} className="clear-search">
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;
