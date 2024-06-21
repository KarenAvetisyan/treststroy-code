import React from 'react'
import './Pagination.css'

export default function Pagination() {
  return (
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a className='active' href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">7</a>
        <a href="#">8</a>
        <a href="#">9</a>
        <a href="#">10</a>
        <a href="#">...</a>
        <a href="#">1835</a>
        <a href="#">1836</a>
        <a href="#">&raquo;</a>
    </div>
  )
}
