import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SUBMIT_ANSWER } from "../helpers";
import { Box, Button, Flex, Heading, Grid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export function Question({ question, onNextClicked }) {
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const [submitAnswer] = useMutation(SUBMIT_ANSWER);
  const [selectedButton, setSelectedButton] = useState(null);

  const onOptionClicked = async (option, index) => {
    try {
      await submitAnswer({
        variables: {
          answer_id: option.id,
          question_id: question.id,
        },
      });
      setAnswered(true);
      setSelectedOption(option.answer);
      setSelectedButton(index);
    } catch (error) {
      console.log(error);
    }
  };

  const submitQuestion = () => {
    setAnswered(false);
    setSelectedOption({});
    setSelectedButton(null);
    onNextClicked(selectedOption);
  };

  return (
    <Box>
      <Text fontSize={{ base: "6vw", md: 60 }} color="gray.300">
        How many can you get right?
      </Text>
      {question && (
        <Box>
          <Heading mt={8} as="h6" size="md" textAlign="center">
            Question: {question.question}
          </Heading>
        </Box>
      )}
      <Flex flexDirection="column" justifyContent="center" mt={8}>
        <Grid templateColumns="repeat(1, 1fr)" gap={4}>
          {question &&
            question.question_answers.map((option, index) => {
              return (
                <Button
                  mx="auto"
                  mt="4"
                  width="100%"
                  minWidth="150px"
                  variant={selectedButton === index ? "solid" : "outline"}
                  colorScheme={selectedButton === index ? "orange" : "gray"}
                  key={option.answer}
                  onClick={() => onOptionClicked(option, index)}
                >
                  {option.answer}
                </Button>
              );
            })}
        </Grid>
        {answered && (
          <Grid templateColumns="repeat(1, 1fr)" gap={4} mt={4}>
            <Button
              mx="auto"
              width="100%"
              minWidth="150px"
              colorScheme="green"
              onClick={submitQuestion}
            >
              Next
            </Button>
          </Grid>
        )}
      </Flex>
    </Box>
  );
}
