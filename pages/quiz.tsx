import type { NextPage } from "next";
import { useState } from "react";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Button,
  Grid,
  Center,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { useAuthenticated } from "@nhost/nextjs";
import { useAuthQuery } from "@nhost/react-apollo";

import { authProtected } from "../components/protected-route";
import { GET_UNANSWERED_QUESTIONS, RESTART_QUIZ } from "../helpers";
import { useMutation } from "@apollo/client";

import { Question } from "../components/Question";
import { Results } from "../components/Results";
import { NoQuestion } from "../components/NoQuestion";

// * Reference: https://blog.codepen.io/2021/09/01/331-next-js-apollo-server-side-rendering-ssr/

const Quiz: NextPage = () => {
  const { loading, data } = useAuthQuery(GET_UNANSWERED_QUESTIONS);
  const [restartQuiz] = useMutation(RESTART_QUIZ);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinished, setShowFinished] = useState(false);
  const isAuthenticated = useAuthenticated();

  const resetQuiz = async () => {
    try {
      await restartQuiz({});
      setCurrentIndex(0);
      setShowFinished(false);
      setScore(0);
    } catch (error) {
      console.log(error);
      return alert("Error restarting quiz");
    }
  };

  if (loading) return <Text>Loading...</Text>;
  //if (data.auth_unanswered_questions.length > 1) {
  const { auth_unanswered_questions } = data;
  const currentQuestion = auth_unanswered_questions[currentIndex];
  if (!currentQuestion) return null; // add this line
  const onNextClicked = (selectedOption) => {
    const currentAnswers = currentQuestion.question_answers;
    const answer = currentAnswers.find(
      (answers) => answers.answer === selectedOption
    );
    if (answer && answer.is_correct) {
      //add this check
      setScore(score + 1);
    }
    if (currentIndex + 1 > auth_unanswered_questions.length - 1) {
      setShowFinished(true);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={{ base: 2, md: 5 }}>
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
        p={{ base: "2", md: "10" }} // adjust padding based on screen size
      >
        <IconButton
          aria-label="Menu Colapse"
          icon={<MdMenu />}
          position="absolute"
          top={6}
          left={6}
        />
        {isAuthenticated && (
          <ul>
            <Box>
              {showFinished ? (
                <Results
                  score={score}
                  numOfQuestions={auth_unanswered_questions.length}
                />
              ) : (
                <Box>
                  <Question
                    onNextClicked={onNextClicked}
                    question={currentQuestion}
                    key={currentQuestion.id}
                  />
                </Box>
              )}
              {showFinished ? (
                <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={8}>
                  <Button width="100%" variant="outline" onClick={resetQuiz}>
                    Try Again
                  </Button>
                  <Button
                    width="100%"
                    colorScheme="red"
                    as="a"
                    href="/"
                    marginLeft="2"
                  >
                    Cancel
                  </Button>
                </Grid>
              ) : (
                <Center mt={8} mb={4}>
                  <Text textAlign="center">
                    Question: {currentIndex + 1} /{" "}
                    {auth_unanswered_questions.length}
                  </Text>
                </Center>
              )}
            </Box>
            <Grid templateColumns="repeat(1, 1fr)" gap={4} mt={8}>
              <Button
                width="100%"
                colorScheme="red"
                as="a"
                href="/"
                marginLeft="2"
              >
                Cancel
              </Button>
            </Grid>
          </ul>
        )}
      </Flex>
    </HStack>
  );
};
//};

export default authProtected(Quiz);
