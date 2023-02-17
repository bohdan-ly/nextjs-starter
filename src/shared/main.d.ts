type GUID = string;
type SelectItem = { id: string; title: string };
type DateRange = {
  startDate: Date;
  endDate: Date;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof import('../app/model/store').store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof import('../app/model/store').store.dispatch;
