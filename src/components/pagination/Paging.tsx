import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PageButton from "./PageButton";
import { pageArray } from "@/utils/pageUtils";
type Props = {
  currentPage: number;
  pageHandler: (page: number) => void;
  totalPage: number;
};

export default function Paging({ currentPage, pageHandler, totalPage }: Props) {
  const pages = pageArray(totalPage, currentPage);
  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 3 && (
          <PaginationItem>
            <PaginationPrevious onClick={() => pageHandler(currentPage - 1)} />
          </PaginationItem>
        )}
        {pages.map((page, index) => (
          <PageButton
            key={index}
            currentPage={currentPage}
            page={page}
            pageHandler={pageHandler}
          />
        ))}
        {currentPage < totalPage - 2 && (
          <PaginationItem>
            <PaginationNext onClick={() => pageHandler(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
