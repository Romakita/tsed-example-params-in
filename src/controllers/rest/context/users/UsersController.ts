import {Controller, Inject} from "@tsed/di";
import {Get} from "@tsed/schema";
import {UsersServices} from "../../../../services/UsersServices";

@Controller("/users")
export class UsersController {
  @Inject()
  protected usersService: UsersServices;

  @Get("/")
  getAll() {
    // call service to retrieve all users according to the $ctx.get('contextId')
    return this.usersService.findAll()
  }
}
