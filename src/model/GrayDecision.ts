
export default class GrayDecision {
  private _id!: Number

  private _instanceId!: string

  private _policyId!: Number

  private _name!: string

  private _infos!: string

  get id(): Number {
    return this._id
  }

  set id(value: Number) {
    this._id = value
  }

  get instanceId(): string {
    return this._instanceId
  }

  set instanceId(value: string) {
    this._instanceId = value
  }

  get policyId(): Number {
    return this._policyId
  }

  set policyId(value: Number) {
    this._policyId = value
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get infos(): string {
    return this._infos
  }

  set infos(value: string) {
    this._infos = value
  }
}
