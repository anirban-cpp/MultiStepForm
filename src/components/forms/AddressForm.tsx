import { AddressData } from "../../utils/utils";

type AddressFormProps = {
  street?: string;
  city?: string;
  state?: string;
  pinCode?: number;
  updateFormFields: (fields: Partial<AddressData>) => void;
};

const AddressForm = ({
  city,
  pinCode,
  state,
  street,
  updateFormFields,
}: AddressFormProps) => {
  return (
    <>
      <h1>Address Details</h1>
      <span className="inputField">
        <label>Street</label>
        <input
          autoFocus
          required
          type="text"
          value={street}
          onChange={(e) => updateFormFields({ street: e.target.value })}
        />
      </span>
      <span className="inputField">
        <label>City</label>
        <input
          required
          type="text"
          value={city}
          onChange={(e) => updateFormFields({ city: e.target.value })}
        />
      </span>
      <span className="inputField">
        <label>State</label>
        <input
          required
          type="text"
          value={state}
          onChange={(e) => updateFormFields({ state: e.target.value })}
        />
      </span>
      <span className="inputField">
        <label>Pincode</label>
        <input
          required
          type="number"
          value={pinCode}
          onChange={(e) =>
            updateFormFields({ pinCode: Number(e.target.value) })
          }
        />
      </span>
    </>
  );
};

export default AddressForm;
