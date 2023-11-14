import { z } from "zod";

const doctorSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).min(5),
    name: z.string().min(3),
    age: z.number().min(18),
    bio: z.string().length(1000, {message: "Should be less than 1000 characters"}),
    gender: z.enum(["male", "female", "binary"]),
    isAvailable: z.boolean(),
    yoe: z.number().min(3),
    consultingFee: z.number(),
    ratings: z.number().multipleOf(0.1),
    role: z.enum(["DOCTOR"]),
});

export default doctorSchema;
