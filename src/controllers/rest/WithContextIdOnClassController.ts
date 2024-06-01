import {Controller} from "@tsed/di";
import {UseContextId} from "../../middlewares/ContextIdMiddleware";
import {Get} from "@tsed/schema";
import {Context} from "@tsed/platform-params";


@Controller("/:contextId/with-context-id-on-class")
@UseContextId()
export class WithContextIdOnClassController {
  @Get("/")
  get(@Context("contextId") contextId: number) {
    return {contextId};
  }
}
