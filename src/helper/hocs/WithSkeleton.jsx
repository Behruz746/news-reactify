import { Skeleton } from "../../components";

function withSkeleton(Component, type, count, diraction) {
  return function WithSkeleton(pops) {
    const { isLoad, ...restProps } = pops;

    if (isLoad) {
      return <Skeleton type={type} count={count} diraction={diraction} />;
    }

    return <Component {...restProps} />;
  };
}

export default withSkeleton;
