import React from 'react';

export default ({ task }) => {
  return(
    <li className="list-group-item">
      {task.title}
    </li>
  )
}
