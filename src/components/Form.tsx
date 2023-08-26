import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./common/Button";
import Input from "./common/TextInput";
import { ZodError, ZodIssue } from "zod";
import { Member, memberSchema } from "@src/db/memberSchema";

const Form = () => {
  const [formData, setFormData] = useState<Member>({
    name: "",
    email: "",
    position: "Some position",
  });
  const [errors, setErrors] = useState<ZodIssue[]>([]);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      memberSchema.parse(formData);
      console.log(formData);
      console.log("Submit successfully");
    } catch (error) {
      if (error instanceof ZodError) {
        setErrors(error.issues);
        console.log(errors);
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedFormData);

    try {
      memberSchema.parse(updatedFormData);
      setErrors([]);
    } catch (error) {
      if (error instanceof ZodError) {
        setErrors(error.issues);
      }
    }
  };

  const getErrorMessage = (path: string): string | undefined => {
    const error = errors.find((err) => err.path[0] === path);
    return error?.message;
  };

  return (
    <div className="mx-auto px-4 lg: max-w-[640px]">
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          name="name"
          value={formData.name}
          handleChange={handleChange}
          category="이름"
          errorMessage={getErrorMessage("name")}
        />
        <Input
          name="email"
          value={formData.email}
          handleChange={handleChange}
          category="이메일"
          errorMessage={getErrorMessage("email")}
        />
        <Button type="submit" text="등록하기" />
      </form>
    </div>
  );
};

export default Form;
