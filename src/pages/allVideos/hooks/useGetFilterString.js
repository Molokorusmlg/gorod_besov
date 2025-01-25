export const useGetFilterString = (filterRequerst) => {
  if (!filterRequerst.length) return "";
  return filterRequerst.length === 1
    ? filterRequerst[0]
    : filterRequerst.join("||");
};
