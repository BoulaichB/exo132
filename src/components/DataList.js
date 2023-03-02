import React from 'react'

const DataList = (props) => {
  return (
    <ul>
        <li>{props.datas.id}</li>
        <li>{props.datas.city}</li>
        <li>{props.datas.conference}</li>
        <li>{props.datas.division}</li>
        <li>{props.datas.full_name}</li>
        <li>{props.datas.name}</li>
    </ul>
                   
  )
}

export default DataList