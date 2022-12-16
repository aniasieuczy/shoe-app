export class Warehouse {
  public location: string;
  public address: string;
  public capacity: number;
  public enabled: boolean;
  public id: string;

  constructor(location: string, address: string, capacity: number, enabled: boolean, id: string) {
    this.location = location;
    this.address = `ul. ` + address;
    this.capacity = capacity;
    this.enabled = enabled;
    this.id = `WH_` + Date.now()
  }

}
