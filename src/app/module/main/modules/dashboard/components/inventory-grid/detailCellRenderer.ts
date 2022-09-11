import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

export class DetailCellRenderer implements ICellRendererComp {
  eGui!: HTMLElement;

  init(params: ICellRendererParams) {
    // var firstRecord = params.data.callRecords[0];

    this.eGui = document.createElement('div');
    this.eGui.innerHTML =
      `
      <div class="row inventory mt-4">
    <div class="row" style="padding-right: 0;">
        <div class="col-4 row">
            <div class="col-12">
                <span class="fs-11 fw-600">Staglin Family Vineyard INEO Red Wine</span>
            </div>
            <div class="col-12 fs-11 fw-600">
                Region: <Span class="region text-muted">
                    United States
                    <span class="dot text-muted">.</span>
                    California
                    <span class="dot text-muted">.</span>
                    Blends
                </Span>
            </div>
          </div>
          <div class="col vintage fs-11 fw-600">
            <span class="label">Vintage: </span>
            <span class="value text-muted">2010</span>
          </div>
          <div class="col col-lg-2 fs-12 fw-600" style="display: flex;justify-content: center;">
            <span class="view-wine">
                <a class="danger">View wine</a>
            </span>
            <span class="icon">
                <i class="fa fa-pencil-square-o fs-14" aria-hidden="true"></i>
            </span>
            <span class="trash-icon">
                <i class="fa fa-trash-o disabled fs-14" aria-hidden="true"></i>
            </span>
          </div>
    </div>
    <div class="col-12">
        <hr>
    </div>
    <div class="col-12 row">
        <div class="col">
            <div class="header text-muted fs-11 mb-2 fw-600">RATING</div>
            <div class="row row-cols-3">
                <div class="col">
                    <div class="fs-12 fw-600">
                        James Suckling's
                    </div>
                    <div>
                        <button class="btn btn-sm btn-light color-detail-preimary bg-detail-preimary fs-11 fw-600">JS 95</button>
                    </div>
                </div>
                <div class="col">
                    <div class="fs-12 fw-600">
                        James Suckling's
                    </div>
                    <div>
                        <button class="btn btn-sm btn-light color-detail-preimary bg-detail-preimary fs-11 fw-600">RP 80</button>
                    </div>
                </div>
                <div class="col">
                    <div class="fs-12 fw-600">
                        James Suckling's
                    </div>
                    <div>
                        <button class="btn btn-sm btn-light color-detail-preimary bg-detail-preimary fs-11 fw-600">---</button>
                    </div>
                </div>
                <div class="col mt-4">
                    <div class="fs-12 fw-600">
                        James Suckling's
                    </div>
                    <div>
                        <button class="btn btn-sm btn-light color-detail-preimary bg-detail-preimary fs-11 fw-600">WS 79</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="header text-muted fs-11 mb-2 fw-600">STOCK</div>
            <div class="row row-cols-3">
                <div class="col">
                    <div class="fs-12 fw-600">
                        Possimus
                    </div>
                    <div>
                        <button class="btn btn-sm btn-light color-detail-danger bg-detail-danger fs-11 fw-600">43 units</button>
                    </div>
                </div>
                <div class="col">
                    <div class="fs-12 fw-600">
                        Downtown Condo
                    </div>
                    <div>
                        <button class="btn btn-sm btn-light color-detail-danger bg-detail-danger fs-11 fw-600">95 units</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}