import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { DetailCellRenderer } from './detailCellRenderer';
import { Observable, of } from 'rxjs';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-inventory-grid',
  templateUrl: './inventory-grid.component.html',
  styleUrls: ['./inventory-grid.component.scss']
})
export class InventoryGridComponent implements OnInit {

  public columnDefs: ColDef[] = [
    { headerCheckboxSelection: true, checkboxSelection: true, width: 50, suppressAutoSize: true },
    { headerName: 'PRODUCT',
      field: 'product',
      width: 220,
      filter: 'agTextColumnFilter',
      sortable: false,
      cellRenderer: 'agGroupCellRenderer'
    },
    { headerName: 'RATING',
      field: 'rating',
      width: 120,
      filter: 'agTextColumnFilter',
      cellRenderer: (rowData: any) => {
        return `<div>
        <button class="btn btn-sm btn-light color-detail-preimary bg-detail-preimary fs-11 fw-600">${rowData.value}</button></div>`
      }
    },
    { headerName: 'VINTAGE',
      field: 'vintage',
      width: 120,
      filter: 'agTextColumnFilter',
      suppressAutoSize: true,
      cellRenderer: (rowData: any) => {
        return `<span class="text-muted">${rowData.value}</span>`
      }
     },
    { headerName: 'QTY',
      field: 'quantity',
      width: 90,
      filter: 'agTextColumnFilter',
      suppressAutoSize: true,
      cellRenderer: (rowData: any) => {
        return `<span class="text-muted">${rowData.value.toString().padStart(2, 0)}</span>`
      }
     },
    { headerName: 'VOLUME',
      field: 'volume',
      width: 170,
      filter: 'agTextColumnFilter',
      cellRenderer: (rowData: any) => {
        return `<span class="text-muted">${rowData.value}</span>`
      }
     },
    { headerName: 'COST',
      field: 'cost',
      width: 90,
      filter: 'agTextColumnFilter',
      suppressAutoSize: true,
      cellRenderer: (rowData: any) => {
        return `<span class="text-muted">$${rowData.value}</span>`
      } 
    },
    { headerName: 'PRICE',
      field: 'price',
      width: 90,
      filter: 'agTextColumnFilter',
      suppressAutoSize: true,
      cellRenderer: (rowData: any) => {
        return `<span>$${rowData.value.toFixed(2)}</span>`
      },
     }
  ];
 
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  public data: any = [
    { id: 1, image: '', product: "Staglin Family Vineyard", rating: "RP 95", vintage: "1950's", quantity: 4, volume: 'Standard(750 mL)', cost: 56.95, price: 59.95},
    { id: 2, image: '', product: "Bibi Graetz Testamatta", rating: "RP 95", vintage: "2015", quantity: 32, volume: 'Magnum(1500 mL)', cost: 71.95, price: 72.95},
    { id: 3, image: '', product: "Cayuse Syrah en Chamber", rating: "RP 95", vintage: "2012", quantity: 12, volume: 'Standard(750 mL)', cost: 139.95, price: 150.00},
    { id: 4, image: '', product: "Staglin Family Vineyard", rating: "RP 95", vintage: "2010", quantity: 4, volume: 'Odd Ball(5000 mL)', cost: 56.95, price: 59.95},
    { id: 5, image: '', product: "K Vintners Syrah Cattle King", rating: "RP 95", vintage: "2015", quantity: 25, volume: 'Magnum(1500 mL)', cost: 79.95, price: 92.95},
    { id: 6, image: '', product: "L'Encole No.41 Ferguson", rating: "RP 95", vintage: "2004", quantity: 4, volume: 'Odd Ball(5000 mL)', cost: 54.95, price: 59.95},
    { id: 7, image: '', product: "Staglin Family Vineyard", rating: "RP 95", vintage: "1950's", quantity: 22, volume: 'Regular(750 mL)', cost: 56.95, price: 59.95}
  ];

 public rowData$!: Observable<any[]>;

 public gridOptions = {
  detailRowHeight: 300,
  detailCellRenderer: DetailCellRenderer,
  detailCellRendererParams: {},
  getRowNodeId: (row: any) => {
    return row.id;
  }
 }; 

 public detailCellRendererParams: any = {
  detailGridOptions: {
    defaultColDef: {
      flex: 1,
    },
  }
}

 // For accessing the Grid's API
 @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

 constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = of(this.data);
  }

  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  onFirstDataRendered(params: any) {
    if(params) {
      params.api.sizeColumnsToFit();
    }
  }

  ngOnInit(): void {
  }

}
