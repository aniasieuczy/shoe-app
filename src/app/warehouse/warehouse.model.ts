export class Warehouse {
  public location: string;
  public address: string;
  public capacity: number;
  public enabled: boolean;

  constructor(location: string, address: string, capacity: number, enabled: boolean) {
    this.location = location;
    this.address = address;
    this.capacity = capacity;
    this.enabled = enabled;
  }

}
