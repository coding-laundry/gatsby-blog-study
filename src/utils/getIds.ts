import { TableItem } from "../types/postTypes";

export const getIds = (items: TableItem[]) =>
  items.reduce((acc, cur) => {
    if (cur.url) acc.push(cur.url.slice(1));
    if (cur.items) acc.push(...getIds(cur.items));

    return acc;
  }, []);
