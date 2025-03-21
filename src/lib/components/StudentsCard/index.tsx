import { Card, CardBody, Text, Box, Image, Flex } from '@chakra-ui/react';

interface IStudent {
  studentName: string;
  rollNumber: string;
  profileUrl: string;
}

interface IProps {
  students: IStudent[];
}

export function StudentsCard(props: IProps) {
  return (
    <Card my={3}>
      <CardBody>
        <Flex gap={4} flexWrap='wrap' width={`calc(7 * 80px + 6 * 16px)`}>
          {props.students.map((student, i) => {
            return (
              <Box>
                <Image
                  key={`student-${i}`}
                  width='80px'
                  height='80px'
                  objectFit='cover'
                  borderRadius='md'
                  src={student.profileUrl}
                  alt={`student-profile-${student.studentName}`}
                />
                <Text mt={2}>{student.studentName}</Text>
                <Text>Roll No:&nbsp;{student.rollNumber}</Text>
              </Box>
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
}
