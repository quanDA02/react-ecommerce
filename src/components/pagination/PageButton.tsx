import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

type Props = {
  currentPage: number;
  page: number;
  pageHandler: (page: number) => void;
};

export default function PageButton({ currentPage, page, pageHandler }: Props) {
  return (
    <PaginationItem>
      {page === 0 ? (
        <PaginationEllipsis />
      ) : (
        <PaginationLink
          isActive={page === currentPage}
          className="active"
          onClick={() => pageHandler(page)}
        >
          {page}
        </PaginationLink>
      )}
    </PaginationItem>
  );
}
