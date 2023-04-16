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
import { useQuery } from "@apollo/client";

import { authProtected } from "../components/protected-route";
import { GET_UNANSWERED_QUESTIONS, RESTART_QUIZ } from "../helpers";
import { useMutation } from "@apollo/client";

import { Question } from "../components/Quiz/Question";
import { Results } from "../components/Quiz/Results";
import { NoQuestion } from "../components/Quiz/NoQuestion";

import { Sidebar } from "../components/Sidebar";

// * Reference: https://blog.codepen.io/2021/09/01/331-next-js-apollo-server-side-rendering-ssr/

const Quiz: NextPage = () => {
  const { loading, data } = useQuery(GET_UNANSWERED_QUESTIONS);
  const [restartQuiz] = useMutation(RESTART_QUIZ);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFinished, setShowFinished] = useState(false);
  const isAuthenticated = useAuthenticated();
  const [collapse, setCollapse] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuStateChange = (state: { isOpen: boolean }) => {
    setIsMenuOpen(state.isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //function to reset quiz
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

  //if loading, show loading text
  if (loading) return <Text>Loading...</Text>;
  //if there is no data, show nothing
  if (!data) return null;
  //extract the array of unanswered questions from the response data
  const { auth_unanswered_questions } = data;
  //getting the current question based on the current index
  const currentQuestion = auth_unanswered_questions[currentIndex];
  //ff there is no current question, show nothing otherwise page will crash
  if (!currentQuestion) return null;
  //function to handle when the user clicks on the next button
  const onNextClicked = (selectedOption) => {
    //getting the answer from the current question based on the selected option
    const currentAnswers = currentQuestion.question_answers;
    const answer = currentAnswers.find(
      (answers) => answers.answer === selectedOption
    );
    //if the answer is correct, increae the score by 1
    if (answer && answer.is_correct) {
      setScore(score + 1);
    }
    //if the current index is the last question, show the finished screen
    if (currentIndex + 1 > auth_unanswered_questions.length - 1) {
      setShowFinished(true);
      return;
    }
    //otherwise move to next question
    setCurrentIndex(currentIndex + 1);
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
        minH={{ base: "100vh", md: "auto" }}
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
        zIndex={1}
        right={1}
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
          onClick={toggleMenu}
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
                <Grid templateColumns="repeat(1, 1fr)" gap={4} mt={1}>
                  <Button width="100%" variant="outline" onClick={resetQuiz}>
                    Try Again
                  </Button>
                </Grid>
              ) : (
                <Center mt={3} mb={4}>
                  <Text fontSize={{ base: "3vw", md: 24 }} textAlign="center">
                    Question: {currentIndex + 1} /{" "}
                    {auth_unanswered_questions.length}
                  </Text>
                </Center>
              )}
            </Box>
            <Box>
              <Grid templateColumns="repeat(1, 1fr)" gap={4} mt={4}>
                <Button width="100%" colorScheme="red" as="a" href="/">
                  Cancel
                </Button>
              </Grid>
            </Box>
          </ul>
        )}
      </Flex>
    </HStack>
  );
};

export default authProtected(Quiz);
