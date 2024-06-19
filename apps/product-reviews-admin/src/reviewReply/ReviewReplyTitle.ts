import { ReviewReply as TReviewReply } from "../api/reviewReply/ReviewReply";

export const REVIEWREPLY_TITLE_FIELD = "id";

export const ReviewReplyTitle = (record: TReviewReply): string => {
  return record.id?.toString() || String(record.id);
};
