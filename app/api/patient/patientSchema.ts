import { z } from "zod";

const patientSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  age: z.number().min(3),
  gender: z.enum(["male", "female", "binary"]),
  weight: z.number().min(8),
  height: z.number().min(60),
  role: z.enum(["PATIENT"]),
});

export default patientSchema;
