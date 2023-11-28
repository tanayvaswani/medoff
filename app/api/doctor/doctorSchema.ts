import { z } from "zod";

const doctorSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).min(5),
    name: z.string().min(3),
});

export default doctorSchema;
