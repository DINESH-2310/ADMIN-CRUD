import React from 'react'

function Price({ title,price,add,info,plan}) {
  return (
    <div class="col-xl-3 col-md-6 mb-4">
      <div class={`border-left-${plan} shadow h-100 py-2`}>
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              <div class={`text-xs font-weight-bold text-${plan} text-uppercase mb-1`}>
                {title}</div>
              <div class="h5 mb-0 font-weight-bold text-gray-800">{price}</div>
            </div>
            <div class="col">
              <div class={` ${add}`}>
                <div class={` ${info}`}role="progressbar"
                  style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
                  aria-valuemax="100"></div>:
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      )
}

      export default Price