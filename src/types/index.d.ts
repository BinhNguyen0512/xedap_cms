import { AuthStateType } from "../stores/auth";
import { DanhMucStateType } from "../stores/danhmuc";
import { ThuongHieuStateType } from "../stores/thuonghieu";

type AppDispatch = typeof store.dispatch;

interface ApplicationRootState {
  readonly auth: AuthStateType;
  readonly danhmuc: DanhMucStateType;
  readonly thuonghieu: ThuongHieuStateType;
}
