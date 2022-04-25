export interface getUserRequestDto {
  userId: string;
  stripId: string;
}

export const users: getUserRequestDto[] = [
  { userId: '123', stripId: '34' },
  { userId: '456', stripId: '56' },
];
