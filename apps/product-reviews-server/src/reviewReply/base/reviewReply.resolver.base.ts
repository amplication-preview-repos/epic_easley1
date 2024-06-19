/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReviewReply } from "./ReviewReply";
import { ReviewReplyCountArgs } from "./ReviewReplyCountArgs";
import { ReviewReplyFindManyArgs } from "./ReviewReplyFindManyArgs";
import { ReviewReplyFindUniqueArgs } from "./ReviewReplyFindUniqueArgs";
import { DeleteReviewReplyArgs } from "./DeleteReviewReplyArgs";
import { ReviewReplyService } from "../reviewReply.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewReply)
export class ReviewReplyResolverBase {
  constructor(
    protected readonly service: ReviewReplyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ReviewReply",
    action: "read",
    possession: "any",
  })
  async _reviewRepliesMeta(
    @graphql.Args() args: ReviewReplyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ReviewReply])
  @nestAccessControl.UseRoles({
    resource: "ReviewReply",
    action: "read",
    possession: "any",
  })
  async reviewReplies(
    @graphql.Args() args: ReviewReplyFindManyArgs
  ): Promise<ReviewReply[]> {
    return this.service.reviewReplies(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ReviewReply, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ReviewReply",
    action: "read",
    possession: "own",
  })
  async reviewReply(
    @graphql.Args() args: ReviewReplyFindUniqueArgs
  ): Promise<ReviewReply | null> {
    const result = await this.service.reviewReply(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ReviewReply)
  @nestAccessControl.UseRoles({
    resource: "ReviewReply",
    action: "delete",
    possession: "any",
  })
  async deleteReviewReply(
    @graphql.Args() args: DeleteReviewReplyArgs
  ): Promise<ReviewReply | null> {
    try {
      return await this.service.deleteReviewReply(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
