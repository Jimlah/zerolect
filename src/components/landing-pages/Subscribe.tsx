import { Button, Form, Input, TextField } from "react-aria-components";

const Subscribe = () => {
  return (
    <Form className="flex items-center gap-5 w-full text-sm">
      <TextField aria-label="Enter your email" className="grow">
        <Input
          placeholder="Enter your email"
          className="outline-0 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 focus:border-gray-400"
        />
      </TextField>
      <Button className="outline-0 px-4 py-2 flex-none rounded-lg">
        Submit
      </Button>
    </Form>
  );
};

export default Subscribe;
