import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewReplyModuleBase } from "./base/reviewReply.module.base";
import { ReviewReplyService } from "./reviewReply.service";
import { ReviewReplyController } from "./reviewReply.controller";
import { ReviewReplyResolver } from "./reviewReply.resolver";

@Module({
  imports: [ReviewReplyModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewReplyController],
  providers: [ReviewReplyService, ReviewReplyResolver],
  exports: [ReviewReplyService],
})
export class ReviewReplyModule {}
