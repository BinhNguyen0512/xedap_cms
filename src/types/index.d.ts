import { AuthStateType } from "../stores/auth";
import { DanhMucStateType } from "../stores/danhmuc";

type AppDispatch = typeof store.dispatch;

interface ApplicationRootState {
  readonly auth: AuthStateType;
  readonly danhmuc: DanhMucStateType;
}
