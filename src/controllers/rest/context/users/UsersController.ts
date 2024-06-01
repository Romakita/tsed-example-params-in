import {Controller, Inject} from "@tsed/di";
import {Get} from "@tsed/schema";
import {UsersService} from "../../../../services/UsersService";
import {UserRolesController} from "./roles/UserRolesController";

@Controller({
  path: "/users",
  children: [UserRolesController]
})
export class UsersController {
  @Inject()
  protected usersService: UsersService;

  @Get("/")
  getAll() {
    // call service to retrieve all users according to the $ctx.get('contextId')
    return this.usersService.findAll();
  }
}
