import { AuthStateType } from "../stores/auth";
import { DanhMucStateType } from "../stores/danhmuc";
import { KhachHangStateType } from "../stores/khachhang";
import { NhaCungCapStateType } from "../stores/nhacungcap";
import { NhanVienStateType } from "../stores/nhanvien";
import { SanPhamStateType } from "../stores/sanpham";
import { ThuongHieuStateType } from "../stores/thuonghieu";

type AppDispatch = typeof store.dispatch;

interface ApplicationRootState {
  readonly auth: AuthStateType;
  readonly danhmuc: DanhMucStateType;
  readonly thuonghieu: ThuongHieuStateType;
  readonly nhacungcap: NhaCungCapStateType;
  readonly nhanvien: NhanVienStateType;
  readonly khachhang: KhachHangStateType;
  readonly sanpham: SanPhamStateType;
}
