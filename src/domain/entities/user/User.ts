import { Entity } from '../Entity';

type UserProps = {
  id?: string;
  email: string;
  password: string;
};

export class User extends Entity {
  private _email: string;
  private _password: string;

  constructor(props: UserProps) {
    super(props.id);
    this._email = props.email;
    this._password = props.password;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
}
