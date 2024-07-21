export abstract class BaseRepositoryService {

    constructor() { }

    responseData<E, D extends Record<string, any>>(entity: E, dto: D): Partial<D> {
        const dkeys = Object.keys(dto);
        const response: Partial<D> = {};
        dkeys.forEach(k => {
            response[k as keyof D] = entity[k]
        });
        return response;
    }

}