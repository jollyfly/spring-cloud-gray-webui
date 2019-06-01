import axios, { AxiosPromise } from 'axios'
import { Message } from 'element-ui'

export enum URL {
  INSTANCE = '/gray/instance',
  DECISION = '/gray/decision',
  SERVICE = '/gray/service'
}

interface ResponseCommand<T, P> {

  getResponse (params: P, url: URL): AxiosPromise<T>

}

export class ResponseCommands {
  public static listCommand <T>(): ResponseCommand<T, Object> {
    return new class implements ResponseCommand<T, Object> {
      getResponse(params: Object, url: URL): AxiosPromise<T> {
        return service.get(url, {
          params: params
        })
      }
    }()
  }

  public static pageCommand<T>(): ResponseCommand<T, Object> {
    return new class implements ResponseCommand<T, Object> {
      getResponse(params: Object, url: URL): AxiosPromise<T> {
        return service.get(url + '/page', {
          params: params,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'pagination-request': true
          }
        })
      }
    }()
  }

  public static oneGetCommand <T>(): ResponseCommand<T, Object> {
    return new class implements ResponseCommand<T, Number> {
      getResponse(params: Object, url: URL): AxiosPromise<T> {
        return service.get(url, {
          params: params
        })
      }
    }()
  }

  public static oneDeleteCommand(): ResponseCommand<void, Number> {
    return new class implements ResponseCommand<void, Number> {
      getResponse(id: Number, url: URL): AxiosPromise<void> {
        return service.delete(url + '/' + id)
      }
    }()
  }

  public static oneSaveCommand <T>(): ResponseCommand<void, T> {
    return new class implements ResponseCommand<void, T> {
      getResponse(params: T, url: URL): AxiosPromise<void> {
        return service.post(url, params, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    }()
  }
}

const service = axios.create({
  baseURL: process.env.VUE_APP_MOCK_API,
  timeout: 5000
})

// Response interceptors
service.interceptors.response.use((response) => {
  if (response.config.headers['pagination-request']) {
    const totalCount = parseInt(response.headers['x-total-count'])
    return {
      data: response.data,
      totalCount: totalCount
    }
  }
  return response.data
},
(error) => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
}
)

export default service
