interface ViewToggleProps {
    viewMode: "card" | "list";
    toggleView: () => void;
  }
  
  const ViewToggle = ({ viewMode, toggleView }: ViewToggleProps) => (
    <div className="view-toggle">
      <button onClick={toggleView}>
        Cambiar a {viewMode === "card" ? "Lista" : "Tarjeta"}
      </button>
    </div>
  );
  
  export default ViewToggle;
  