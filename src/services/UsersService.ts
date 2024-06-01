import {Injectable, InjectContext} from "@tsed/di";
import {PlatformContext} from "@tsed/common";

@Injectable()
export class UsersService {
  @InjectContext()
  private $ctx: PlatformContext;

  findAll() {
    const contextId = this.$ctx.get("CONTEXT_ID");

    return [
      {id: 1, name: "John Doe", contextId},
      {id: 2, name: "Jane Doe", contextId}
    ];
  }

  getRoles(userId: string) {
    return [
      {id: 1, name: "admin"},
      {id: 2, name: "user"}
    ];
  }
}
