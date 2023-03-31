import type { NextPage } from "next";
import { useState } from "react";

import {
  Flex,
  HStack,
  IconButton,
  Text,
  Button,
  Input,
  Radio,
  Stack,
  Center,
  Box,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { useAuthenticated } from "@nhost/nextjs";

import { authProtected } from "../components/protected-route";
import { CREATE_NEW_QUESTION } from "../helpers";
import { useMutation } from "@apollo/client";
import { Sidebar } from "../components/Sidebar";

// * Reference: https://blog.codepen.io/2021/09/01/331-next-js-apollo-server-side-rendering-ssr/

const Home: NextPage = () => {
  const [collapse, setCollapse] = useState(false);
  const isAuthenticated = useAuthenticated();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [questionForm, setQuestionForm] = useState({
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    correct: "",
  });
  const [createQuiz] = useMutation(CREATE_NEW_QUESTION);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createQuiz({
        variables: {
          question: questionForm.question,
          question_answers: {
            data: [
              {
                answer: questionForm.answer_1,
                is_correct: questionForm.answer_1 === questionForm.correct,
              },
              {
                answer: questionForm.answer_2,
                is_correct: questionForm.answer_2 === questionForm.correct,
              },
              {
                answer: questionForm.answer_3,
                is_correct: questionForm.answer_3 === questionForm.correct,
              },
              {
                answer: questionForm.answer_4,
                is_correct: questionForm.answer_4 === questionForm.correct,
              },
            ],
          },
        },
      });
    } catch (error) {
      console.log(error);
      return alert("Failed to add quiz question");
    }

    setQuestionForm({
      question: "",
      answer_1: "",
      answer_2: "",
      answer_3: "",
      answer_4: "",
      correct: "",
    });
  };

  const handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event;
    setQuestionForm({
      ...questionForm,
      [name]: value,
    });
  };

  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={{ base: 2, md: 5 }}>
      <Box
        position="absolute"
        top={0}
        left={0}
        marginLeft="3vh"
        marginTop="5vh"
        zIndex={1}
        w={isMenuOpen ? "250px" : "0"}
        h="full"
        bg="gray.100"
        overflow="hidden"
        transition="width 0.3s ease-in-out"
      >
        <Sidebar collapse={false} />
      </Box>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
        right={1}
        zIndex={1}
        style={{
          transform: isMenuOpen ? "translateX(80px)" : "none",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <IconButton
          aria-label="Menu"
          icon={<MdMenu />}
          position="absolute"
          top={4}
          left={4}
          borderRadius="full"
          onClick={toggleMenu}
        />
        <Text fontSize={{ base: "8vw", md: 50 }} color="gray.300">
          Create a new quiz Question!
        </Text>
        {isAuthenticated && (
          <ul>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="question"
                placeholder="Enter your question"
                onChange={handleInputChange}
                value={questionForm.question}
                mt={[2, 4]}
              />
              <Stack isInline mt={[2, 4]}>
                <Input
                  type="text"
                  name="answer_1"
                  placeholder="First answer"
                  onChange={handleInputChange}
                  value={questionForm.answer_1}
                />
                <Input
                  type="text"
                  name="answer_2"
                  placeholder="Second answer"
                  onChange={handleInputChange}
                  value={questionForm.answer_2}
                />
                <Input
                  type="text"
                  name="answer_3"
                  placeholder="Third answer"
                  onChange={handleInputChange}
                  value={questionForm.answer_3}
                />
                <Input
                  type="text"
                  name="answer_4"
                  placeholder="Forth answer"
                  onChange={handleInputChange}
                  value={questionForm.answer_4}
                />
              </Stack>
              <Center mt={4}>
                <Stack spacing={[0, 4]} direction="row">
                  <Radio
                    name="correct"
                    onChange={handleInputChange}
                    value={questionForm.answer_1}
                    isChecked={
                      questionForm.correct !== "" &&
                      questionForm.correct === questionForm.answer_1
                    }
                  >
                    {questionForm.answer_1 ? questionForm.answer_1 : "answer 1"}
                  </Radio>
                  <Radio
                    name="correct"
                    onChange={handleInputChange}
                    value={questionForm.answer_2}
                    isChecked={
                      questionForm.correct !== "" &&
                      questionForm.correct === questionForm.answer_2
                    }
                  >
                    {questionForm.answer_2 ? questionForm.answer_2 : "answer 2"}
                  </Radio>
                  <Radio
                    name="correct"
                    onChange={handleInputChange}
                    value={questionForm.answer_3}
                    isChecked={
                      questionForm.correct !== "" &&
                      questionForm.correct === questionForm.answer_3
                    }
                  >
                    {questionForm.answer_3 ? questionForm.answer_3 : "answer 3"}
                  </Radio>
                  <Radio
                    name="correct"
                    onChange={handleInputChange}
                    value={questionForm.answer_4}
                    isChecked={
                      questionForm.correct !== "" &&
                      questionForm.correct === questionForm.answer_4
                    }
                  >
                    {questionForm.answer_4 ? questionForm.answer_4 : "answer 4"}
                  </Radio>
                </Stack>
              </Center>
              <Stack isInline mt={[2, 4]} mx="auto">
                <Button colorScheme="green" width="50%" type="submit">
                  Create Question
                </Button>
                <Button colorScheme="red" width="50%" as="a" href="/">
                  Cancel
                </Button>
              </Stack>
            </form>
          </ul>
        )}
      </Flex>
    </HStack>
  );
};

export default authProtected(Home);
