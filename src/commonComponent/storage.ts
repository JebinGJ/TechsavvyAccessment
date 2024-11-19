export const storageSet = (key: string, val: any) => sessionStorage.setItem(key, val)

export const storageGet = (key: string) => {
    const get = sessionStorage.getItem(key)
    if (get === "true" || get === "false") return JSON.parse(get)
    else return get
}

export const storageRemove = (key: string) => sessionStorage.removeItem(key)

export const storageClear = () => sessionStorage.clear();
