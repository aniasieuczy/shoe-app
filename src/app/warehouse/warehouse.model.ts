export class Warehouse {
  public location: string;
  public address: string;
  public capacity: number;
  public enabled: boolean;
  public id: number;

  constructor(location: string, address: string, capacity: number, enabled: boolean, id: number) {
    this.location = location;
    this.address = address;
    this.capacity = capacity;
    this.enabled = enabled;
    this.id = Date.now()
  }

}
