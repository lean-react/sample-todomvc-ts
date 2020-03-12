import React from 'react';

class TodosItem extends React.Component {
  render() {
    return (
      <li className="completed">
        { /*
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      */}
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={true}/>
          <label>Taste JavaScript</label>
          <button className="destroy"/>
        </div>
        <input className="edit" defaultValue="Create a TodoMVC template"/>
      </li>
    );
  }
}

export default TodosItem;
