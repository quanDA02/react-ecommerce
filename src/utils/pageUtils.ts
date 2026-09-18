export function pageArray(totalPage: number, currentPage: number): number[] {
  let pageArr = new Array<number>(totalPage).fill(0);

  pageArr[currentPage - 1] = currentPage;
  for (let i = 0; i < pageArr.length; i++) {
    if (pageArr[i] === currentPage) {
      pageArr[i - 1] = currentPage - 1;
      pageArr[i - 2] = currentPage - 2;
      if (currentPage < totalPage) {
        pageArr[i + 1] = currentPage + 1;
        if (currentPage < totalPage - 1) {
          pageArr[i + 2] = currentPage + 2;
        }
      }
    }
  }
  //remove all value 0
  pageArr = pageArr.filter((page) => page);
  if (pageArr[0] > 1) {
    pageArr.unshift(0);
    pageArr.unshift(1);
  }
  if (pageArr[pageArr.length - 1] < totalPage) {
    pageArr.push(0);
    pageArr.push(totalPage);
  }

  return pageArr;
}

type Page = number | string;
