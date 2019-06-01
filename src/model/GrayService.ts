
export default class GrayService {
  private _serviceId!: String | null
  private _serviceName!: String | null
  private _instanceNumber!: Number | null
  private _grayInstanceNumber!: Number | null
  private _describe!: String | null

  get serviceId(): String | null {
    return this._serviceId
  }

  set serviceId(value: String | null) {
    this._serviceId = value
  }

  get serviceName(): String | null {
    return this._serviceName
  }

  set serviceName(value: String | null) {
    this._serviceName = value
  }

  get instanceNumber(): Number | null {
    return this._instanceNumber
  }

  set instanceNumber(value: Number | null) {
    this._instanceNumber = value
  }

  get grayInstanceNumber(): Number | null {
    return this._grayInstanceNumber
  }

  set grayInstanceNumber(value: Number | null) {
    this._grayInstanceNumber = value
  }

  get describe(): String | null {
    return this._describe
  }

  set describe(value: String | null) {
    this._describe = value
  }
}
