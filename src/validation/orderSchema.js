import * as Yup from "yup";

const orderSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, "Name must be at least 2 characters long.")
        .required("Name is Required"),
    size: Yup
        .string(),
    toppings: Yup
        .string(),
    specialRequests: Yup
        .string()
});

export default orderSchema;