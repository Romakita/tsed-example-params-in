import {Middleware, UseBefore} from "@tsed/platform-middlewares";
import {Context, PathParams} from "@tsed/platform-params";
import {In, Integer, Minimum, number, Required} from "@tsed/schema";
import {PlatformContext} from "@tsed/common";
import {decorateMethodsOf, DecoratorParameters, decoratorTypeOf, DecoratorTypes, useDecorators} from "@tsed/core";
import {ControllerOptions} from "@tsed/di/lib/types/common/decorators/controller";
import {Controller} from "@tsed/di";

@Middleware()
export class ContextIdMiddleware {

  use(@PathParams("contextId")
      @Required()
      @Minimum(1)
      @Integer()
        contextId: number, @Context() $ctx: PlatformContext) {

    $ctx.set("CONTEXT_ID", contextId);
  }
}

export function ContextController(options: ControllerOptions) {
  options.children?.map((child) => {
    return UseContextId()(child);
  });

  return useDecorators(
    Controller(options),
    UseContextId()
  );
}

export function UseContextId() {
  const decorator = In("path")
    .Required(true)
    .Name("contextId").Description("Scopes request under current context")
    .Schema(number().integer().minimum(1).toJSON());

  return useDecorators(
    UseBefore(ContextIdMiddleware),
    (...args: DecoratorParameters) => {
      switch (decoratorTypeOf(args)) {
        case DecoratorTypes.METHOD:
          return decorator(...args as [any, string | symbol, number]);
        case DecoratorTypes.CLASS:
          decorateMethodsOf(args[0], decorator);
          break;
      }
    }
  );
}

