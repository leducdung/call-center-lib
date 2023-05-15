import { CallToDataCenter } from "../ThirdParty/callToDataCenter";

interface IRobotInsertData {
  AreaCountryName?: number
  AreaStateName?: string // bang
  AreaProvinceId?: number //tỉnh thành
  AreaDistrictId?: number //quận huyện
  AreaWardId?: number // phường xã
  AreaStreetName?: string  //ten đường
  ContactPhoneNumber?: string
  ContactPhoneAreaCode?: string //mã vùng
  ContactPhoneProviderName?: string //nhà mạng
  ContactTypeId?: number
  ContactName?: string
  ContactDob?: string
  ContactGender?: string
  ContactPhone?: string
  ContactAddress?: string
  ContactIdentity?: string //CMND
  ContactPosition?: string //Vi tri
  ContactDomain?: number //Loai Hinh kinh doanh
  ContactJob?: number //Cong viec
  ContactCompany?: string //công ty
  ContactTaxId?: string //MST
  ContactWorkingAddress?: string //địa chỉ làm việc
  ContactEmail?: string
  ContactNeeds?: number //nhu cau
  SystemSourceName?: string //ten nguồn
  SystemSourceType?: number //loại nguồn
  SystemSourceLink?: string // link dữ liệu (unique chống trùng)
  SystemDateOfPost?: string //ngày lấy dữ liệu
  SystemNote?: string //ghi chú hệ thống
  ImageBeforeIdentityCard?: string // Hinh anh CMND
  ImageAfterIdentityCard?: string // Hinh anh
  ImageHumanIdentityCard?: string // Hinh anh của chủ CMND
  SoTaiKhoan?: string // số tài khoản ngân hàng
  TenTaiKhoan?: string // tên chủ tài khoản ngân hàng
  TenNganHang?: string // tên ngân hàng
  deviceType?: number
}

interface IRobotInsertMany {
  contactRecordsData: IRobotInsertData[]
  config: IConfigDataCenter
}

interface IConfigDataCenter {
  apiKey: string
  host: string
}

interface IRobotUpdateByPhone {
  ContactPhone: string
  contactRecordData: IRobotInsertData
  config: IConfigDataCenter
}

async function robotInsertMany(data: IRobotInsertMany) {
  return new Promise(async (resolve, reject) => {
    try {
      let customerInfo = await CallToDataCenter(
        data,
        '/ContactRecord/robot/insertMany',
        data.config.apiKey,
        data.config.host,
      )
      if (customerInfo && customerInfo.data) {
        resolve(customerInfo.data);
      } else {
        reject('failed');
      }
    } catch (e) {
      reject('failed');
    }
  });
}

async function robotUpdateByPhone(data: IRobotUpdateByPhone) {
  return new Promise(async (resolve, reject) => {
    try {
      let customerInfo = await CallToDataCenter(
        data,
        '/ContactRecord/robot/updateByPhoneNumber',
        data.config.apiKey,
        data.config.host,
        )
      if (customerInfo && customerInfo.data) {
        resolve(customerInfo.data);
      } else {
        reject('failed');
      }
    } catch (e) {
      reject('failed');
    }
  });
}


export {
  robotInsertMany,
  robotUpdateByPhone,
}