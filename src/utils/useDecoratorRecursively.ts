import {Type} from "@tsed/core";
import {GlobalProviders} from "@tsed/common";

/**
 * Use a decorator recursively on a target and its children.
 * Works only for Controller.
 * @param target
 * @param decorator
 */
export function useDecoratorRecursively(target: Type, decorator: any) {
  const provider = GlobalProviders.get(target);

  if (provider) {
    provider.children.forEach((child) => {
      useDecoratorRecursively(child, decorator);
    });
  }

  return decorator()(target);
}
