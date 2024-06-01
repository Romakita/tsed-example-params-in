import {Injectable, InjectContext} from "@tsed/di";
import {PlatformContext} from "@tsed/common";

@Injectable()
export class UsersServices {
  @InjectContext()
  private $ctx: PlatformContext;

  findAll() {
    const contextId = this.$ctx.get("CONTEXT_ID");

    return [
      {id: 1, name: "John Doe", contextId},
      {id: 2, name: "Jane Doe", contextId}
    ];
  }
}
