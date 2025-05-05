import { AiFillProduct } from 'react-icons/ai';
import { BiDetail, BiMessageSquareDetail } from 'react-icons/bi';
import { FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('product').title('Products').icon(AiFillProduct),
      S.documentTypeListItem('review').title('Reviews').icon(BiDetail),
      S.documentTypeListItem('newsletter')
        .title('Newsletter Subscriptions')
        .icon(FaEnvelope),
      S.documentTypeListItem('faq').title('FAQs').icon(FaQuestionCircle),
    ]);
