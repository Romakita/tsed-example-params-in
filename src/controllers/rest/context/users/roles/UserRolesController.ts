import {Controller, Inject} from "@tsed/di";
import {Get} from "@tsed/schema";
import {PathParams} from "@tsed/platform-params";
import {UsersService} from "../../../../../services/UsersService";

@Controller("/:userId/roles")
export class UserRolesController {
  @Inject()
  protected usersService: UsersService;

  @Get("/")
  get(@PathParams("userId") userId: string) {
    return this.usersService.getRoles(userId);
  }
}
