// Imports:
import * as OriginalYup from "yup";
// tuple, mixed, yup, reach, addMethod, ref, lazy, ValidationError
import { string, date, boolean, number, array, object } from "yup";
import STATE_LIST from "./states.json";

// ********************** String Based Functions **********************

const STRING = (label: string) =>
  string().trim().ensure().nonNullable().required("Required").label(label);

const GSTIN = (label: string) =>
  STRING(label)
    .uppercase()
    .test({
      name: "GstinTest",
      message: "Invalid",
      test: (value: string) => {
        if (value.length === 0) return true;
        const pattern =
          /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/gi;
        return pattern.test(value.toString());
      },
    });

const UPI_ID = (label: string) =>
  STRING(label)
    .lowercase()
    .test("UpiIdTest", "Invalid", (value: any) => {
      //! TODO - Test for UPI ID
      return true;
    });

const STATE_NAME = (label: string) =>
  STRING(label).oneOf(STATE_LIST, "Choose from the list");

const VEHICLE_NUM = (label: string) => STRING(label);

const ADDRESS_LINE = (label: string) =>
  STRING(label)
    .min(5, (props) => `Minimum 5 letters, found ${props.value.length}`)
    .max(45, (props) => `Maximum 45 letters, found ${props.value.length}`);

const EMAIL = (label: string) => STRING(label).email("Invalid");

// ********************** Number Based Functions **********************

const NUMBER = (label: string) =>
  number()
    .label(label)
    .transform((value: any) => (isNaN(value) ? undefined : value))
    .nullable()
    .required("Required");

const PHONE_NUM = (label: string) =>
  NUMBER(label).integer().min(6000000000, "Invalid").max(9999999999, "Invalid");

const PINCODE = (label: string) =>
  NUMBER(label).integer().min(100000, "Invalid").max(999999, "Invalid");

// ********************** Date Based Functions **********************

const DATE = (label: string) => date().required("Required").label(label);

// ********************** Array Based Functions **********************

const ARRAY = (
  label: string,
  innerSchema: OriginalYup.ISchema<any, any, any, any>
) => array(innerSchema).label(label).required("Required");

// ********************** Boolean Based Functions **********************

const BOOLEAN = (label: string) =>
  boolean().defined().required("Required").label(label);

// ********************** Object Based Functions **********************

const OBJECT = () => object().noUnknown().required("Required");

// ********************** Export **********************

export default {
  // String:
  string: STRING,
  email: EMAIL,
  gstin: GSTIN,
  upiId: UPI_ID,
  vehNum: VEHICLE_NUM,
  stateName: STATE_NAME,
  addressLine: ADDRESS_LINE,
  // Number:
  number: NUMBER,
  phoneNum: PHONE_NUM,
  pincode: PINCODE,
  // Date:
  date: DATE,
  // Array:
  array: ARRAY,
  // Boolean:
  boolean: BOOLEAN,
  // Object:
  object: OBJECT,
  // Mixed:
  any: () => OriginalYup.mixed().nullable(),
};

export { type InferType } from "yup";
