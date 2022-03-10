import { useEffect, useRef} from "react";
import pagination from "tui-pagination";
import {PaginationType} from '../types/app.types'

import "tui-pagination/dist/tui-pagination.css";

type EventData = {
  page: number;
}

export default function Pagination(props: PaginationType): JSX.Element {
  const $el = useRef(null);
  const { totalItems, currentPage, itemsPerPage, updateCurrentPage } = props;

  useEffect(() => {
    const paginate = new pagination($el.current, {
      totalItems,
      itemsPerPage,
      visiblePages: 5
    });
    paginate.movePageTo(currentPage);
    paginate.on("beforeMove", (eventData:EventData) => {
      updateCurrentPage(eventData.page);
    });
  }, [currentPage, itemsPerPage, totalItems, updateCurrentPage]);

  return (
    <div
      ref={$el}
      id="tui-pagination-container"
      className="tui-pagination"
    ></div>
  );
}
