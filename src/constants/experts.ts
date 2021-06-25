export const defaultCount = 3 as const;

export const filterItems = [
  { label: '평점 높은 순', key: 'rates' },
  { label: '후기 많은 순', key: 'reviews' },
  { label: '상담진행 많은 순', key: 'sessions' }
];

// Mapping Route Query -> Payload Query
export const queryMapping: any = {
  section: 'rootId',
  mCate: 'subId',
  keywords: 'leafId'
};
export const baseUrl: string = 'https://connects-static.a-ha.io';