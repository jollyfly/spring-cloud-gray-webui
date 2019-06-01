
export default class GrayInstance {
  get status(): Boolean {
    return this._status
  }

  set status(value: Boolean) {
    this._status = value
  }
  private _instanceId!: String
  private _serviceId!: String
  private _host!: String
  private _port!: Number
  private _instanceStatus!: InstanceStatus
  private _grayStatus!: GrayStatus
  private _status!: Boolean

  get instanceId(): String {
    return this._instanceId
  }

  set instanceId(value: String) {
    this._instanceId = value
  }

  get serviceId(): String {
    return this._serviceId
  }

  set serviceId(value: String) {
    this._serviceId = value
  }

  get host(): String {
    return this._host
  }

  set host(value: String) {
    this._host = value
  }

  get port(): Number {
    return this._port
  }

  set port(value: Number) {
    this._port = value
  }

  get instanceStatus(): InstanceStatus {
    return this._instanceStatus
  }

  set instanceStatus(value: InstanceStatus) {
    this._instanceStatus = value
  }

  get grayStatus(): GrayStatus {
    return this._grayStatus
  }

  set grayStatus(value: GrayStatus) {
    this._grayStatus = value
  }
}

export enum InstanceStatus {
  UP = 'UP',
  DOWN = 'DOWN',
  UNKNOWN = 'UNKNOWN'
}

export enum GrayStatus {
  CLOSE = 'CLOSE',
  OPEN = 'OPEN'
}
