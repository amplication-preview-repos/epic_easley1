import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewReplyResolverBase } from "./base/reviewReply.resolver.base";
import { ReviewReply } from "./base/ReviewReply";
import { ReviewReplyService } from "./reviewReply.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewReply)
export class ReviewReplyResolver extends ReviewReplyResolverBase {
  constructor(
    protected readonly service: ReviewReplyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
