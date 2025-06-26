import React from "react";
import { ListData } from "./List.interface";
import styles from "./list.module.css";

function ListInner<T extends React.Key>(
  { elements, renderItem, getKey }: ListData<T>,
  ref: React.ForwardedRef<HTMLUListElement>,
): React.ReactElement {
  return (
    <ul ref={ref} className={styles.listWrapper}>
      {elements.map(
        (item: T, index: number): React.ReactElement => (
          <li key={getKey ? getKey(item, index) : index}>{renderItem(item)}</li>
        ),
      )}
    </ul>
  );
}

const List = React.forwardRef<HTMLUListElement, ListData>(ListInner);

export default List;
