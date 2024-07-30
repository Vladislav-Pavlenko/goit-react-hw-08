import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={css.loader_row_one}>
        <Skeleton width={251} height={74} />
        <Skeleton width={230} height={74} />
        <Skeleton width={250} height={74} />
        <Skeleton width={210} height={74} />
        <Skeleton width={240} height={74} />
        <Skeleton width={200} height={74} />
      </div>
      <div className={css.loader_row_two}>
        <Skeleton width={251} height={74} />
        <Skeleton width={260} height={74} />
        <Skeleton width={240} height={74} />
        <Skeleton width={210} height={74} />
        <Skeleton width={230} height={74} />
      </div>
      <div className={css.loader_row_three}>
        <Skeleton width={251} height={74} />
        <Skeleton width={220} height={74} />
        <Skeleton width={250} height={74} />
        <Skeleton width={240} height={74} />
        <Skeleton width={230} height={74} />
        <Skeleton width={200} height={74} />
      </div>
    </>
  );
}
