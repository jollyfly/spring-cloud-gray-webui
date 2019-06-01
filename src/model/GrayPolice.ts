export default class GrayPolicy {
  private _id!: Number
  private _instanceId!: String
  private _alias!: String

  get id(): Number {
    return this._id
  }

  set id(value: Number) {
    this._id = value
  }

  get instanceId(): String {
    return this._instanceId
  }

  set instanceId(value: String) {
    this._instanceId = value
  }

  get alias(): String {
    return this._alias
  }

  set alias(value: String) {
    this._alias = value
  }
}
