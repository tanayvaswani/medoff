import { z } from "zod";

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }).min(5),
    name: z.string().min(3),
    age: z.number().min(18),
    bio: z.string().length(1000, {message: "Should be less than 1000 characters"}),
    gender: z.string(),
    isAvailable: z.boolean(),
    yoe: z.number().min(3),
    consultingFee: z.number(),
    rating: z.number().multipleOf(0.1),
    role: z.string(),
});

export default schema;
