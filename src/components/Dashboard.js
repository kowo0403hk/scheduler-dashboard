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
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    const mappedPanels = data.map((each) => {
      return (
        <Panel
          key={each.id}
          id={each.id}
          label={each.label}
          value={each.value}
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
