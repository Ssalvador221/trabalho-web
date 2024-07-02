import React from 'react'

const PaginationComponent = ({ table }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {'<'}
      </button>
      <span>
        Page{' '}
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {'>'}
      </button>
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => table.setPageSize(Number(e.target.value))}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Mostrar {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PaginationComponent
