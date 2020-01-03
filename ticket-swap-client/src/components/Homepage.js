import React from "react";
import { fetchEvents } from "../store/events/actions";
import { connect } from "react-redux";
import EventsList from "./EventsList";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Homepage extends React.Component {
  // state = { pager: {} };

  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.events !== prevProps.events) {
  //     this.setPage(1);
  //   }
  // }

  // setPage(page) {
  //   var items = this.props.events;
  //   var pager = this.state.pager;
  //   if (page < 1 || page > pager.totalPages) {
  //     return;
  //   }
  //   // get new pager object for specified page
  //   pager = this.getPager(items.length, page);
  //   // get new page of items from items array
  //   var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
  //   // update state
  //   this.setState({ pager: pager });
  //   // call change page function in parent component
  // }

  // getPager(totalItems, currentPage, pageSize) {
  //   // default to first page
  //   currentPage = currentPage || 1;
  //   // default page size is 9
  //   pageSize = pageSize || 9;
  //   // calculate total pages
  //   var totalPages = Math.ceil(totalItems / pageSize);
  //   var startPage, endPage;
  //   if (totalPages <= 10) {
  //     // less than 10 total pages so show all
  //     startPage = 1;
  //     endPage = totalPages;
  //   } else {
  //     // more than 10 total pages so calculate start and end pages
  //     if (currentPage <= 6) {
  //       startPage = 1;
  //       endPage = 10;
  //     } else if (currentPage + 4 >= totalPages) {
  //       startPage = totalPages - 9;
  //       endPage = totalPages;
  //     } else {
  //       startPage = currentPage - 5;
  //       endPage = currentPage + 4;
  //     }
  //   }
  //   // calculate start and end item indexes
  //   var startIndex = (currentPage - 1) * pageSize;
  //   var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  //   // create an array of pages to ng-repeat in the pager control
  //   var pages = [...Array(endPage + 1 - startPage).keys()].map(
  //     i => startPage + i
  //   );
  //   // return object with all pager properties required by the view
  //   return {
  //     totalItems: totalItems,
  //     currentPage: currentPage,
  //     pageSize: pageSize,
  //     totalPages: totalPages,
  //     startPage: startPage,
  //     endPage: endPage,
  //     startIndex: startIndex,
  //     endIndex: endIndex,
  //     pages: pages
  //   };
  // }

  render() {
    // var pager = this.state.pager;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/event/edit/0"
        >
          Add new Event
        </Button>
        {this.props.events.map((event, i) => (
          <EventsList key={i} data={event} />
        ))}
        {/* {pager.pages && pager.pages.length > 1 && (
          <ul className="pagination">
            <li className={pager.currentPage === 1 ? "disabled" : ""}>
              <a onClick={() => this.setPage(1)}>First</a>
            </li>
            <li className={pager.currentPage === 1 ? "disabled" : ""}>
              <a onClick={() => this.setPage(pager.currentPage - 1)}>
                Previous
              </a>
            </li>
            {pager.pages.map((page, index) => (
              <li
                key={index}
                className={pager.currentPage === page ? "active" : ""}
              >
                <a onClick={() => this.setPage(page)}>{page}</a>
              </li>
            ))}
            <li
              className={
                pager.currentPage === pager.totalPages ? "disabled" : ""
              }
            >
              <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
            </li>
            <li
              className={
                pager.currentPage === pager.totalPages ? "disabled" : ""
              }
            >
              <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
            </li>
          </ul> */}
        {/* )} */}
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  console.log("something ", reduxState.events);
  return {
    events: reduxState.events.events
  };
};
export default connect(mapStateToProps)(Homepage);
