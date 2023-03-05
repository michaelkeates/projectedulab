import type { NextPage } from "next";
import { useState } from "react";

import { Title } from "@mantine/core";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  Button,
  Input,
  Radio,
  Stack,
  Center,
} from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";
import { Sidebar } from "../components/Sidebar";
import {
  useAccessToken,
  useAuthenticated,
  useChangeEmail,
  useChangePassword,
  useSignOut,
} from "@nhost/nextjs";
import { useAuthQuery } from "@nhost/react-apollo";

import { authProtected } from "../components/protected-route";
import { GET_UNANSWERED_QUESTIONS, RESTART_QUIZ } from "../helpers";
import { useMutation } from "@apollo/client";

import { Question } from "../components/Question";
import { Results } from "../components/Results";
import { NoQuestion } from "@/components/NoQuestion";

// * Reference: https://blog.codepen.io/2021/09/01/331-next-js-apollo-server-side-rendering-ssr/

const Home: NextPage = () => {
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
  if (data && data.auth_unanswered_questions.length > 0) {
    const { auth_unanswered_questions } = data;
    const currentQuestion = auth_unanswered_questions[currentIndex];
    const onNextClicked = (selectedOption) => {
      const currentAnswers = currentQuestion.question_answers;
      const answer = currentAnswers.find(
        (answers) => answers.answer === selectedOption
      );
      if (answer.is_correct) {
        setScore(score + 1);
      }
      if (currentIndex + 1 > auth_unanswered_questions.length - 1) {
        setShowFinished(true);
        return;
      }
      setCurrentIndex(currentIndex + 1);
    };

    return (
      <HStack w="full" h="100vh" bg="gray.100" padding={10}>
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
        >
          <IconButton
            aria-label="Menu Colapse"
            icon={<MdMenu />}
            position="absolute"
            top={6}
            left={6}
          />
          <Text fontSize={50} color="gray.300">
            Create a new quiz Question!
          </Text>
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
                      //key={currentQuestion.id}
                      key="Something"
                    />
                    <Text>{auth_unanswered_questions.length}</Text>
                  </Box>
                )}
                {showFinished ? (
                  <Flex mt={8}>
                    <Button width="50%" variant="outline" onClick={resetQuiz}>
                      Try Again
                    </Button>
                  </Flex>
                ) : (
                  // <Text textAlign="left">
                  //   {currentIndex + 1} / {unansweredQuestions.length}
                  // </Text>
                  <Text></Text>
                )}
              </Box>
            </ul>
          )}
        </Flex>
      </HStack>
    );
  }
};

export default authProtected(Home);
