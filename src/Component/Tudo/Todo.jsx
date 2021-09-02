import React, { Component } from "react";

class Todo extends Component {
  state = {
    taskList: [],
    currTask: "",
  };

  handleSubmitTAsk = () => {
    // let prevTaskList = this.state.taskList;
    let currTask = this.state.currTask;
    if (currTask.length == 0) {
      return;
    }
    // let obj = {
    //   value: currTask,
    //   id: prevTaskList.length,
    // };

    let prevTaskList = [
      ...this.state.taskList,
      { task: currTask, id: this.state.taskList.length },
    ];
    // prevTaskList.push(obj);

    // console.log(this.state.currTask + "first");
    this.setState({
      taskList: prevTaskList,
      currTask: "",
    });

    // console.log(this.state.currTask + "second");
  };
  HandleCurrenTask = (e) => {
    let Newcurrtask = e.target.value;

    this.setState({
      currTask: Newcurrtask,
    });
  };
  render() {
    return (
      <div>
        <div className="Input-container">
          <input
            type="text"
            value={this.state.currTask}
            onChange={this.HandleCurrenTask}
          ></input>
          <button onClick={this.handleSubmitTAsk}>Submit Button</button>
        </div>
        <div>taskLIst</div>

        <ul>
          {this.state.taskList.map((taskobj) => {
            return (
              <li key={taskobj.id}>
                <p>{taskobj.task} </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
