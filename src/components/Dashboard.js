import React, { Component } from "react";
import classnames from "classnames";

import Loading from "./Loading";
import Panel from "./Panel";

//Mock Data
const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6,
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm",
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday",
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3",
  },
];

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null,
  };

  selectPanel = (id) => {
    this.setState((prev) => ({
      focused: !prev.focused ? id : null,
    }));
  };

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused,
    });

    const mappedPanels = (
      this.state.focused
        ? data.filter((panel) => panel.id === this.state.focused)
        : data
    ).map((panel) => {
      return (
        <Panel
          key={panel.id}
          id={panel.id}
          label={panel.label}
          value={panel.value}
          onSelect={this.selectPanel}
        />
      );
    });

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses}>{mappedPanels}</main>;
  }
}

export default Dashboard;
