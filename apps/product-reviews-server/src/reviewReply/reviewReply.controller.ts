import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewReplyService } from "./reviewReply.service";
import { ReviewReplyControllerBase } from "./base/reviewReply.controller.base";

@swagger.ApiTags("reviewReplies")
@common.Controller("reviewReplies")
export class ReviewReplyController extends ReviewReplyControllerBase {
  constructor(
    protected readonly service: ReviewReplyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
