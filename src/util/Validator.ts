
export let ValidateServiceId = (serviceId: String) => (target: any, name: any, descriptor: any) => {
  const method = descriptor.value
  descriptor.value = (...args: any) => {
    console.info(`(${serviceId} 正在执行：${name}(${args}) = ?`)
    let ret
    try {
      ret = method.apply(target, args)
      console.info(`(${serviceId} 成功：${name}(${args}) => ${ret})`)
    } catch (error) {
      console.error(`(${serviceId} 失败：${name}(${args}) => ${error})`)
    }
    return ret
  }
}
