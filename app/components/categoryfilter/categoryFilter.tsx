import { useState, useEffect } from 'react';

interface CategoryFilterProps {
  onCategoryChange: (selectedCategories: number[]) => void; // Define la prop
}

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]); // Estado para las categorías

  // Función para obtener las categorías desde la API
  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/ganado/categoria'); // Ajusta la ruta según tu API
      const data = await response.json();
      // Supongamos que la API devuelve un objeto con una propiedad `categorias`
      setCategories(data.categorias.map((cat: string, index: number) => ({ id: index + 1, name: cat }))); // Asignar ID basado en el índice
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories(); // Llamar a la función al cargar el componente
  }, []);

  const handleCategoryChange = (categoryId: number) => {
    let updatedCategories = [];
    if (selectedCategories.includes(categoryId)) {
      updatedCategories = selectedCategories.filter(id => id !== categoryId);
    } else {
      updatedCategories = [...selectedCategories, categoryId];
    }

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories); // Llamar a la prop onCategoryChange
  };

  const applyFilters = () => {
    console.log('Selected Categories:', selectedCategories);
    setIsDropdownOpen(false); // Cerrar el menú después de aplicar
  };

  return (
    <div className="category-filter">
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="dropdown-btn">
        {isDropdownOpen ? 'Cerrar Categoría' : 'Categoría'}
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          {categories.map(category => (
            <label key={category.id} className="dropdown-item">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              {category.name}
            </label>
          ))}

          <button onClick={applyFilters} className="apply-btn">
            Aplicar
          </button>
        </div>
      )}

      <style jsx>{`
        .category-filter {
          position: relative;
          display: inline-block;
        }
        .dropdown-btn {
          background-color: #2ecc71;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          cursor: pointer;
        }
        .dropdown-menu {
          display: flex;
          flex-direction: column;
          position: absolute;
          background-color: #f1f1f1;
          min-width: 200px;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          z-index: 1;
          padding: 10px;
        }
        .dropdown-item {
          padding: 8px 0;
        }
        .apply-btn {
          background-color: #3498db;
          color: white;
          padding: 8px 12px;
          border: none;
          cursor: pointer;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
