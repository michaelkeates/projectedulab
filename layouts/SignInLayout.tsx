//layouts/SignInLayout.tsx

import Link from "next/link"; //import the Link component from the Next.js framework
import { Anchor, Center, Text } from "@mantine/core"; //import Anchor, Center, and Text components from Mantine UI
import AuthLayout from "./AuthLayout"; //import the AuthLayout component from a local file

//define a new React function component called SignInLayout
export const SignInLayout: React.FC<{
  title?: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <AuthLayout
      {...props} //pass all the props to the AuthLayout component
      footer={
        //render a footer with a text and a Link component to the sign-up page
        <Center>
          {" "}
          {/*render the children of the Center component in the center */}
          <Text>
            {" "}
            {/*render a Text component */}
            Don&lsquo;t have an account? {/*display a text string beneath the text input*/}
            <Anchor component={Link} href="/sign-up/email-password">
              {" "}
              {/*render an Anchor component that links to the sign-up page*/}
              Sign up {/*display a text string*/}
            </Anchor>
          </Text>
        </Center>
      }
    />
  );
};

export default SignInLayout; //export the SignInLayout component as the default export of the module
