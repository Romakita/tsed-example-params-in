import {Get} from "@tsed/schema";
import {ContextController} from "../../../middlewares/ContextIdMiddleware";
import {Context} from "@tsed/platform-params";
import {UsersController} from "./users/UsersController";

@ContextController({
  path: "/:contextId",
  children: [
    UsersController
  ]
})
export class ManageContextController {

  @Get("/")
  get(@Context("contextId") contextId: number) {
    return {contextId};
  }
}
