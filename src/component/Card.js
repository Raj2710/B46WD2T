import React from 'react'

function Card(props) {
  return <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${props.input.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.input.color} text-uppercase mb-1`}>
                                {props.input.title}</div>
                            {!props.input.isProgress?<div className="h5 mb-0 font-weight-bold text-gray-800">{props.input.value}
                            </div>:<div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800" style={{marginLeft:"10px"}}>{props.input.value}%</div>
                                                </div>
                                                <div className="col">
                                                    <div className="progress progress-sm mr-2">
                                                        <div className="progress-bar bg-info" role="progressbar"
                                                            style={{width:`${props.input.value}%`,ariaValueNow:"50",ariaValueMin:"0"}}
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>}
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.input.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}

export default Card