enum cacheType {
  Loacl,
  Session,
}

class Cache {
  private stroage: Storage
  constructor(type: cacheType) {
    this.stroage =
      type === cacheType.Loacl
        ? localStorage
        : sessionStorage
  }

  setCache(key: string, value: any) {
    this.stroage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = this.stroage.getItem(key)
    if (typeof value == 'string') {
      return JSON.parse(value)
    }
    return null
  }

  removeCache(key: string) {
    this.stroage.removeItem(key)
  }

  clearCache() {
    this.stroage.clear()
  }
}

export const localCache = new Cache(cacheType.Loacl)
export const sessionCache = new Cache(cacheType.Session)
