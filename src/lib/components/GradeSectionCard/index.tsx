import { Box, Card, CardBody, CardHeader, Text } from '@chakra-ui/react';

interface IProps {
  standard: string;
  section: string;
  academicYear: string;
  totalStudents: string;
  classInChargeName: string;
  roomNumber: string;
}

export function GradeSectionCard(props: IProps) {
  return (
    <Card borderRadius='md' width='100%' boxShadow='md'>
      <CardHeader
        pt={4}
        pb={1}
        fontWeight='700'
        fontSize='18px'
        color='#4300B1'
      >
        Welcome to {props.standard} {props.section}!
      </CardHeader>

      <CardBody py={2}>
        <Box display='flex' fontSize='16px' py={1}>
          <Text fontWeight='400'>Academic Year:&nbsp;</Text>
          <Text fontWeight='700'>{props.academicYear}</Text>
        </Box>

        <Box display='flex' fontSize='16px' py={1}>
          <Text fontWeight='400'>Total Students:&nbsp;</Text>
          <Text fontWeight='700'>{props.totalStudents}</Text>
        </Box>

        <Box display='flex' fontSize='16px' py={1}>
          <Text fontWeight='400'>Class Incharge:&nbsp;</Text>
          <Text fontWeight='700'>{props.classInChargeName}</Text>
        </Box>

        <Box display='flex' fontSize='16px' py={1}>
          <Text fontWeight='400'>Room Number:&nbsp;</Text>
          <Text fontWeight='700'>{props.roomNumber}</Text>
        </Box>
      </CardBody>
    </Card>
  );
}
