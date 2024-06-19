import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReviewReplyServiceBase } from "./base/reviewReply.service.base";

@Injectable()
export class ReviewReplyService extends ReviewReplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
