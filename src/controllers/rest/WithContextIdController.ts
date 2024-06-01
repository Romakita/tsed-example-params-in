import {Controller} from "@tsed/di";
import {UseContextId} from "../../middlewares/ContextIdMiddleware";
import {Get, In, number} from "@tsed/schema";
import {Context} from "@tsed/platform-params";


@Controller("/:contextId/with-context-id")
export class WithContextIdController {
  @Get("/")
  @UseContextId()
  get(@Context("contextId") contextId: number) {
    return {contextId};
  }
}
