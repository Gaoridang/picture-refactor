import { z } from "zod";

export const memberSchema = z.object({
  name: z
    .string()
    .min(3, { message: "3글자 이상 입력하세요." })
    .regex(/^[a-zA-Z0-9]/, {
      message: "이름은 영어 + 숫자 조합만 가능합니다.",
    }),
  email: z
    .string()
    .min(1, "이메일을 입력하세요.")
    .email({ message: "유효한 이메일을 입력하세요." })
    .endsWith(".com", { message: ".com 이메일을 입력하세요." }),
  position: z.string({}).min(1, "직책을 선택하세요."),
});

export type Member = z.infer<typeof memberSchema>;
