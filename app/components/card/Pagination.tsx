interface PaginationProps {
    currentPage: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
  }
  
  const Pagination = ({ currentPage, totalPages, nextPage, prevPage }: PaginationProps) => (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
  
  export default Pagination;
  