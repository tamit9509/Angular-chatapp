class RegisterUser {
  private name: string;
  private email: string;
  private password: string;
  constructor(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.password = obj.password;
  }

  get Email() { return this.email; }
  get Name() { return this.name; }
  set Email(email: string) { this.email = email; }
  set Name(name: string) { this.name = name; }
}