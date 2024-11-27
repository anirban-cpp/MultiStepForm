import { AccountData } from "../../utils/utils";

type AccountFormProps = {
  email?: string;
  password?: string;
  updateFormFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({
  email,
  password,
  updateFormFields,
}: AccountFormProps) => {
  return (
    <>
      <h1>Account Details</h1>
      <span className="inputField">
        <label>Email</label>
        <input
          autoFocus
          required
          type="email"
          value={email}
          onChange={(e) => updateFormFields({ email: e.target.value })}
        />
      </span>
      <span className="inputField">
        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => updateFormFields({ password: e.target.value })}
        />
      </span>
    </>
  );
};

export default AccountForm;
