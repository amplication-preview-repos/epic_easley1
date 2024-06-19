import { ReviewReplyWhereInput } from "./ReviewReplyWhereInput";
import { ReviewReplyOrderByInput } from "./ReviewReplyOrderByInput";

export type ReviewReplyFindManyArgs = {
  where?: ReviewReplyWhereInput;
  orderBy?: Array<ReviewReplyOrderByInput>;
  skip?: number;
  take?: number;
};
