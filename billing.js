import React, { useState, useMemo, useEffect, forwardRef, useRef } from "react";
//import { usePagination, useTable, useSortBy, useRowSelect } from "react-table";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import axiosInstance from "@services/httpService";
import EditInvoiceForm from "../Forms/EditInvoice"; // Assuming this handles its own submission/redux dispatch
import ViewBillingModal from "../Modals/ViewBillingModal";
import importedBaseColumns from "./BillingTableColumns"; // Import base column definitions

import "react-datepicker/dist/react-datepicker.css";
import "@styles/PMSTabStyles/Billing/BillingTable.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  setInvoices as setReduxInvoices,
  selectInvoices,
} from "@redux/features/invoiceSlice";

// Pdf viewer related (if needed within this component, otherwise remove)
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Status formatter (can be moved to utils if used elsewhere)
export const formatStatus = (status) => {
  switch (status) {
    case "Paid":
      return <span className="badge bg-success text-white">{status}</span>; // Changed Paid to green
    case "Draft":
      return <span className="badge bg-secondary">{status}</span>; // Changed Draft to grey
    case "Issued":
      return <span className="badge bg-info text-dark">{status}</span>;
    case "Cancelled":
      return <span className="badge bg-danger">{status}</span>;
    case "Overdue":
      return <span className="badge bg-warning text-dark">{status}</span>; // Added Overdue
    default:
      return (
        <span className="badge bg-light text-dark">{status || "N/A"}</span>
      );
  }
};

// IndeterminateCheckbox for row selection
const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = indeterminate;
    }
  }, [resolvedRef, indeterminate]);

  return (
    <Form.Check
      type="checkbox"
      ref={resolvedRef}
      {...rest}
      id={`checkbox-${Math.random()}`}
    />
  );
});

const BillingTable = ({ invoices: propInvoices }) => {
  const dispatch = useDispatch();
  const allInvoicesFromRedux = useSelector(selectInvoices); // For operations like delete

  const [editInvoiceModalShow, setEditInvoiceModalShow] = useState(false);
  const [selectedInvoiceForEdit, setSelectedInvoiceForEdit] = useState(null);
  const [isViewBillingModalOpen, setIsViewBillingModalOpen] = useState(false);
  const [currentInvoiceForView, setCurrentInvoiceForView] = useState(null);

  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'paid', 'unpaid'

  const filteredDataByStatus = useMemo(() => {
    let dataToFilter = propInvoices || [];
    if (activeFilter === "paid") {
      return dataToFilter.filter((inv) => inv.payment_status === "Paid");
    }
    if (activeFilter === "unpaid") {
      // Unpaid: Not 'Paid' and not 'Cancelled'. Includes 'Draft', 'Issued', 'Overdue'.
      return dataToFilter.filter(
        (inv) =>
          inv.payment_status !== "Paid" && inv.payment_status !== "Cancelled"
      );
    }
    return dataToFilter;
  }, [propInvoices, activeFilter]);

  const handleOpenViewBillingModal = (invoiceObject) => {
    setCurrentInvoiceForView(invoiceObject);
    setIsViewBillingModalOpen(true);
  };

  const handleCloseViewBillingModal = () => {
    setIsViewBillingModalOpen(false);
    setCurrentInvoiceForView(null);
  };

  const handleEditInvoiceModal = (invoiceId) => {
    const invoice = (propInvoices || []).find((inv) => inv.id === invoiceId);
    if (invoice) {
      setSelectedInvoiceForEdit(invoice);
      setEditInvoiceModalShow(true);
    } else {
      Swal.fire("Error", "Could not find invoice details.", "error");
    }
  };

  const handleCloseEditModal = () => {
    setEditInvoiceModalShow(false);
    setSelectedInvoiceForEdit(null);
  };

  const handleDeleteInvoice = async (invoiceId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this invoice. This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`/pms/invoices/${invoiceId}/`);
          const updatedList = (allInvoicesFromRedux || []).filter(
            (inv) => inv.id !== invoiceId
          );
          dispatch(setReduxInvoices(updatedList));
          Swal.fire("Deleted!", "The invoice has been deleted.", "success");
        } catch (error) {
          const errorMsg =
            error.response?.data?.detail ||
            error.message ||
            "Failed to delete invoice.";
          Swal.fire("Error", errorMsg, "error");
          console.error("Error deleting invoice:", error);
        }
      }
    });
  };

  const tableColumns = useMemo(() => {
    const selectionColumn = {
      id: "selection",
      header: ({ table }) => (
        
          <IndeterminateCheckbox 
          {...{
            checked: table.getIsAllPageRowsSelected(),
            indeterminate: table.getIsSomePageRowsSelected(),
            onChange: table.getToggleAllPageRowsSelectedHandler()

          }}
           />
        
      ),
      cell: ({ row }) => (
        
          <IndeterminateCheckbox 
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),

          }}
          />
        
      ),
      //disableSortBy: true,
    };

    const processedBaseColumns = importedBaseColumns.map((col) => {
      let cell = undefined;
      if (col.accessor === "payment_status") {
        cell = ({geValue}) => formatStatus(value)
        
      } else if (["total_amount", "amount"].includes(col.accessor)){ 
        cell = ({ getValue }) => `$${parseFloat(getValue() || 0).toFixed(2)}`;
        

      } else if (["date_issued", "due_date", "date"].includes(col.accessor)){
        getValue() ? new Date(getValue()).toLocaleDateString() : "N/A";
      } else if (col.id === 'actions') {
        cell = ({ row }) => {
          const invoice = row.original;
          return (
            <Dropdown as={ButtonGroup}>
              <Button variant="secondary" onClick={() => handleOpenViewBillingModal(invoice)}>
                <i className="bi bi-eye-fill"></i>
              </Button>
              <Dropdown.Toggle split variant="outline-secondary" />
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleEditInvoiceModal(invoice.id)}>
                  <i className="bi bi-pencil-fill me-2"></i> Edit Invoice
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => handleDeleteInvoice(invoice.id)} className="text-danger">
                  <i className="bi bi-trash-fill me-2"></i> Delete
                </Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown>
          )
        }
      }
      return {
        ...col,
        cell,
        enableSorting: col.id !== "actions",
      }

    });

    return [selectionColumn, ...processedBaseColumns];
  }, []);

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   page,
  //   prepareRow,
  //   canPreviousPage,
  //   canNextPage,
  //   pageOptions,
  //   pageCount,
  //   gotoPage,
  //   nextPage,
  //   previousPage,
  //   setPageSize,
  //   state: { pageIndex, pageSize, selectedRowIds },
  //   selectedFlatRows,
  //   toggleAllRowsSelected, // Helper to deselect all rows
  // } = useTable(
  //   {
  //     columns: tableColumns,
  //     data: filteredDataByStatus,
  //     initialState: { pageIndex: 0, pageSize: 10 },
  //     autoResetPage: true, // Reset page when data changes
  //     autoResetSelectedRows: true, // Reset selection when data changes
  //   },
  //   useSortBy,
  //   usePagination,
  //   useRowSelect
  // );

  const table = useReactTable({
    data: filteredDataByStatus,
    columns: tableColumns,
    state: {
      pagination: { pageIndex: 0, pageSize: 10 },
      rowSelection
    },
    getRowId: row => row.id,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    getFilteredRowModel: getFilteredRowModel(),
    enableRowSelection: true,
    autoResetPageIndex: true,

  })
  const selectedFlatRows = useMemo(() => table.getFilteredSelectedRowModel().rows, [table])

  const handleDeleteSelected = async () => {
    const selectedIds = selectedFlatRows.map((row) => row.original.id);
    if (selectedIds.length === 0) {
      Swal.fire("No Selection", "Please select invoices to delete.", "info");
      return;
    }

    Swal.fire({
      title: `Delete ${selectedIds.length} invoice(s)?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete them!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Implement batch delete if API supports it, otherwise loop
          for (const id of selectedIds) {
            await axiosInstance.delete(`/pms/invoices/${id}/`);
          }
          const updatedList = (allInvoicesFromRedux || []).filter(
            (inv) => !selectedIds.includes(inv.id)
          );
          dispatch(setReduxInvoices(updatedList));
          toggleAllRowsSelected(false); // Deselect rows after deletion
          Swal.fire(
            "Deleted!",
            `${selectedIds.length} invoice(s) have been deleted.`,
            "success"
          );
        } catch (error) {
          const errorMsg =
            error.response?.data?.detail ||
            error.message ||
            "Failed to delete selected invoices.";
          Swal.fire("Error", errorMsg, "error");
          console.error("Error deleting selected invoices:", error);
        }
      }
    });
  };

  const styles = {
    tableContainer: { overflowX: "auto", maxWidth: "100%" },
    table: { width: "100%", borderCollapse: "collapse" },
  };

  const sortableHeaders = ["Due Date", "Amount"]; // Adjust based on your headers

  return (
    <div className="d-flex" style={{ height: "100%", overflow: "hidden" }}>
      <div className="col-12" style={{ overflowY: "auto" }}>
        <div style={{ flexGrow: 1 }}>
          <Card className="mt-2 h-100">
            <Card.Header>
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                <ButtonGroup className="mb-2 mb-md-0">
                  <Button
                    variant={activeFilter === "all" ? "primary" : "secondary"}
                    onClick={() => setActiveFilter("all")}
                  >
                    All
                  </Button>
                  <Button
                    variant={activeFilter === "paid" ? "success" : "secondary"}
                    onClick={() => setActiveFilter("paid")}
                  >
                    Paid
                  </Button>
                  <Button
                    variant={
                      activeFilter === "unpaid" ? "warning" : "secondary"
                    }
                    onClick={() => setActiveFilter("unpaid")}
                  >
                    Unpaid
                  </Button>
                </ButtonGroup>

                {selectedFlatRows.length > 0 && (
                  <div className="ms-md-auto">
                    {" "}
                    {/* ms-md-auto for spacing */}
                    <span className="me-2 text-muted">
                      {selectedFlatRows.length} selected
                    </span>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={handleDeleteSelected}
                    >
                      <i className="bi bi-trash-fill"></i> Delete Selected
                    </Button>
                    {/* Add other bulk actions here if needed */}
                  </div>
                )}
              </div>
            </Card.Header>
            <Card.Body style={styles.tableContainer}>
              {filteredDataByStatus.length === 0 ? (
                <p className="text-center p-3">
                  {propInvoices &&
                  propInvoices.length === 0 &&
                  activeFilter === "all"
                    ? "No invoices from the Database."
                    : "No invoices match the selected filter."}
                </p>
              ) : (
                <table
                  className="table table-striped table-hover" // Removed table-responsive as container handles scroll
                  style={styles.table}
                >
                  <thead className="table-header-custom">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                          const isSortableHeader = sortableHeaders.includes(
                            header.column.columnDef.header
                          );

                          return (
                            <th
                              key={header.id}
                              colSpan={header.colSpan}
                              className={
                                header.column.id === "selection" ? "text-center" : ""
                              }
                              onClick={
                                isSortableHeader && header.column.getCanSort()
                                ? header.column.getToggleSortingHandler()
                                : undefined
                              }
                            style={{ cursor: isSortableHeader ? "pointer" : "default" }}
                            >
                              {flexRender(header.column.columnDef.header, header.getContext())}
                              <span className="ms-1">
                                {header.column.getIsSorted() === "asc" && <i className="bi bi-sort-up" />}
                                {header.column.getIsSorted() === "desc" && <i className="bi bi-sort-down" />}
                                {!header.column.getIsSorted() && isSortableHeader && <i className="bi bi-filter" />}
                              </span>
                            </th>
                          );
                        })}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="tableBody-custom">
                    {table.getVisibleCells().map((row) => {
                        <tr key={row.id}>
                          {row.getVisibleCells().map((cell) => (
                            <td
                            key={cell.id}
                              
                              className={
                                cell.column.id === "selection"
                                  ? "text-center"
                                  : ""
                              }
                            >
                              {cell.column.id === "actions" ? (
                                <Dropdown as={ButtonGroup}>
                                  <Button
                                    variant="secondary"
                                    onClick={() =>
                                      handleOpenViewBillingModal(row.original)
                                    }
                                  >
                                    <i className="bi bi-eye-fill"></i>
                                  </Button>
                                  <Dropdown.Toggle
                                    split
                                    variant="outline-secondary"
                                    id={`action-dropdown-${row.original.id}`}
                                  />
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      onClick={() =>
                                        handleEditInvoiceModal(row.original.id)
                                      }
                                    >
                                      <i className="bi bi-pencil-fill me-2"></i>{" "}
                                      Edit Invoice
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                      onClick={() =>
                                        handleDeleteInvoice(row.original.id)
                                      }
                                      className="text-danger"
                                    >
                                      <i className="bi bi-trash-fill me-2"></i>{" "}
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              ) : (
                                flexRender(cell.column.columnDef.cell, cell.getContext() )
                                
                              )}
                            </td>
                          ))}
                        </tr>
                      
                    })}
                  </tbody>
                </table>
              )}
            </Card.Body>
            {/* Pagination Controle*/}
            {/* {filteredDataByStatus.length > 0 && (
              <Card.Footer>
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                  <Button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    size="sm"
                  >
                    <i className="bi bi-arrow-left me-1"></i> Previous
                  </Button>
                  <span className="text-muted">
                    Page{" "}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>
                  </span>
                  <InputGroup size="sm" style={{ width: "160px" }}>
                    <InputGroup.Text>Go to:</InputGroup.Text>
                    <Form.Control
                      type="number"
                      min="1"
                      max={pageOptions.length}
                      defaultValue={pageIndex + 1}
                      onChange={(e) => {
                        const pageNum = e.target.value
                          ? Number(e.target.value) - 1
                          : 0;
                        gotoPage(pageNum);
                      }}
                      style={{ textAlign: "center" }}
                    />
                  </InputGroup>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      id="rows-per-page-dropdown"
                      size="sm"
                    >
                      Rows: {pageSize}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {[10, 20, 30, 50, 100].map((pSize) => (
                        <Dropdown.Item
                          key={pSize}
                          onClick={() => setPageSize(pSize)}
                        >
                          {pSize}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    size="sm"
                  >
                    Next <i className="bi bi-arrow-right ms-1"></i>
                  </Button>
                </div>
              </Card.Footer>
            )} */}
          </Card>

          <Modal
            show={editInvoiceModalShow}
            onHide={handleCloseEditModal}
            size="lg"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Invoice</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedInvoiceForEdit && (
                <EditInvoiceForm
                  invoiceDetails={selectedInvoiceForEdit}
                  onHide={handleCloseEditModal}
                  // EditInvoiceForm should handle its own save and Redux dispatch
                />
              )}
            </Modal.Body>
          </Modal>
        </div>
      </div>

      {isViewBillingModalOpen && currentInvoiceForView && (
        <ViewBillingModal
          show={isViewBillingModalOpen}
          onHide={handleCloseViewBillingModal}
          billingData={currentInvoiceForView}
        />
      )}
    </div>
  );
};

export default BillingTable;
