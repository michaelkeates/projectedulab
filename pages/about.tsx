import Link from "next/link";

import { Container, Title } from "@mantine/core";

export const AboutPage: React.FC = () => {
  return (
    <Container>
      <Title>About Project eduLab</Title>
      <p>
        Project eduLab is a project that aims to produce an alternative 'proof
        of concept' online educational web learning platform for the fufilment
        of the requirments of the course IS3D660 for the University of South
        Wales
      </p>
      <div>
        Go back to the <Link href="/">home page</Link>
      </div>
    </Container>
  );
};

export default AboutPage;
