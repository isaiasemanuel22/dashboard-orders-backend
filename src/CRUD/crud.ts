export interface CRUD<T> {
    
    add(intance : T);
    getAll();
    update(id: number , intance : T);
    delete(id:number);
    getOne(id:number);

}