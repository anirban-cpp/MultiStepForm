import { UserData } from "../../utils/utils";

type UserFormProps = {
  firstName?: string;
  lastName?: string;
  age?: number;
  updateFormFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFormFields,
}: UserFormProps) => {
  return (
    <>
      <h1>User Details</h1>
      <span className="inputField">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateFormFields({ firstName: e.target.value })}
        />
      </span>
      <span className="inputField">
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateFormFields({ lastName: e.target.value })}
        />
      </span>
      <span className="inputField">
        <label>Age</label>
        <input
          required
          min={1}
          type="number"
          value={age}
          onChange={(e) => updateFormFields({ age: Number(e.target.value) })}
        />
      </span>
    </>
  );
};

export default UserForm;
